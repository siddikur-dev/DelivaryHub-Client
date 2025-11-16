import { FaArrowLeft, FaChevronDown, FaList, FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import { IoFastFoodOutline } from 'react-icons/io5';
import { useLoaderData } from 'react-router';

const EditFood = () => {
    const food = useLoaderData();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    // Pre-fill form with food data
    const [formState, setFormState] = useState({
        ...food,
        food_category: Array.isArray(food.food_category) ? food.food_category : [food.food_category],
        ingredients: Array.isArray(food.ingredients) ? food.ingredients.join(', ') : food.ingredients || '',
    });

    // If the logged-in user is not the owner, show alert and go back on confirm
    if (food.user_email !== user?.email) {
        Swal.fire({
            icon: 'error',
            title: 'Unauthorized',
            text: 'You are not authorized to edit this food.',
            confirmButtonText: 'OK',
        }).then(() => {
            navigate(-1);
        });
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedFood = Object.fromEntries(formData.entries());
        // Custom validation
        const newErrors = {};
        if (!updatedFood.food_name?.trim()) newErrors.food_name = 'Food name is required.';
        if (!updatedFood.food_img?.trim()) newErrors.food_img = 'Food image URL is required.';
        const foodCategories = formData.getAll('food_category');
        if (!foodCategories.length) newErrors.food_category = 'Category is required.';
        if (!updatedFood.quantity?.trim()) newErrors.quantity = 'Quantity is required.';
        if (!updatedFood.price?.trim()) newErrors.price = 'Price is required.';
        if (!updatedFood.food_origin?.trim()) newErrors.food_origin = 'Food origin is required.';
        if (!updatedFood.details?.trim()) newErrors.details = 'Details are required.';
        if (!updatedFood.ingredients?.trim()) newErrors.ingredients = 'Ingredients are required.';
        if (!updatedFood.making_procedure?.trim()) newErrors.making_procedure = 'Making procedure is required.';
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;
        // Add user info
        updatedFood.user_name = user.displayName;
        updatedFood.user_email = user.email;
        updatedFood.food_category = foodCategories;
        updatedFood.ingredients = updatedFood.ingredients.split(',').map(i => i.trim()).filter(Boolean);
        // send to db (PUT with email query param)
        fetch(`${import.meta.env.VITE_API_URL}/foods/${food._id}?email=${user.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Food Updated Successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(-1);
                } else if (data.matchedCount === 0) {
                    Swal.fire({
                        icon: "error",
                        title: "Unauthorized",
                        text: "You are not authorized to edit this food or it does not exist.",
                        confirmButtonText: 'OK',
                    }).then(() => {
                        navigate(-1);
                    });
                }
            })
            .catch((err) => {
                console.error("Error Updating Food Data:", err);
                Swal.fire({
                    title: "Error!",
                    text: `Something went wrong! ${err.message}`,
                    icon: "error",
                });
            })
    }

    const handleFieldChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
        if (type === 'checkbox') {
            let newCategories = [...formState.food_category];
            if (checked) {
                newCategories.push(value);
            } else {
                newCategories = newCategories.filter(cat => cat !== value);
            }
            setFormState(prev => ({ ...prev, food_category: newCategories }));
        } else {
            setFormState(prev => ({ ...prev, [name]: value }));
        }
    };

    return (
        <div className="mt-16 max-w-4xl mx-auto px-4 py-10 md:py-20">
            <title>Edit Food | Foodio</title>
            <div className='flex justify-between items-center py-5'>
                <button onClick={() => navigate(-1)} className="flex btn btn-secondary rounded-3xl btn-outline btn-sm text-sm font-medium">
                    <FaArrowLeft /> Go Back
                </button>
                <Link to='/all-foods' className="flex btn btn-secondary rounded-3xl btn-outline btn-sm text-sm font-medium">
                    View All <FaList />
                </Link>
            </div>
            <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-secondary/2 shadow-md rounded-xl p-6 border-2 border-secondary/30"
                noValidate
            >
                <h2 className="flex items-center justify-center gap-2 text-center text-2xl text-primary md:text-3xl font-bold mb-2">
                    Edit <span className="text-secondary">Food </span> <IoFastFoodOutline className='text-secondary' />
                </h2>
                <p className="text-center text-accent mb-12 max-w-2xl mx-auto">
                    Update the form below to edit this food item. All fields are required for accurate listing and better management.
                </p>
                {/* Food Name & Image URL in one row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Food Name</label>
                        <input
                            type="text"
                            name="food_name"
                            value={formState.food_name || ''}
                            placeholder="e.g. Chicken Biryani"
                            className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                            onChange={handleFieldChange}
                        />
                        {errors.food_name && <p className="text-error text-xs mt-1">{errors.food_name}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Food Image URL</label>
                        <input
                            type="url"
                            name="food_img"
                            value={formState.food_img || ''}
                            placeholder="https://example.com/food.jpg"
                            className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                            onChange={handleFieldChange}
                        />
                        {errors.food_img && <p className="text-error text-xs mt-1">{errors.food_img}</p>}
                    </div>
                </div>
                {/* Food Category & Origin */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Category</label>
                        <div className="flex flex-wrap gap-4">
                            {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan', 'Snacks'].map((cat) => (
                                <label key={cat} className="flex items-center gap-2 text-accent font-normal">
                                    <input
                                        type="checkbox"
                                        name="food_category"
                                        value={cat}
                                        checked={formState.food_category.includes(cat)}
                                        className="checkbox checkbox-xs checkbox-secondary"
                                        onChange={handleFieldChange}
                                    />
                                    <span>{cat}</span>
                                </label>
                            ))}
                        </div>
                        {errors.food_category && <p className="text-error text-xs mt-1">{errors.food_category}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Food Origin</label>
                        <div className='relative'>
                            <select
                                name="food_origin"
                                value={formState.food_origin || ''}
                                className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                                onChange={handleFieldChange}
                            >
                                <option value="">Select Origin</option>
                                <option value="Bangladesh">Bangladesh</option>
                                <option value="India">India</option>
                                <option value="Italy">Italy</option>
                                <option value="USA">USA</option>
                                <option value="China">China</option>
                                <option value="France">France</option>
                                <option value="Japan">Japan</option>
                                <option value="Thailand">Thailand</option>
                                <option value="Turkey">Turkey</option>
                                <option value="Other">Other</option>
                            </select>
                            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-accent">
                                <FaChevronDown className="text-sm" />
                            </div>
                        </div>
                        {errors.food_origin && <p className="text-error text-xs mt-1">{errors.food_origin}</p>}
                    </div>
                </div>
                {/* Quantity & Price */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Quantity</label>
                        <input
                            type="number"
                            name="quantity"
                            value={formState.quantity || ''}
                            placeholder="e.g. 10"
                            className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                            onChange={handleFieldChange}
                        />
                        {errors.quantity && <p className="text-error text-xs mt-1">{errors.quantity}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            value={formState.price || ''}
                            placeholder="e.g. 15"
                            className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                            onChange={handleFieldChange}
                        />
                        {errors.price && <p className="text-error text-xs mt-1">{errors.price}</p>}
                    </div>
                </div>
                {/* About Food: Details, Ingredients, Making Procedure */}
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">About Food: Details</label>
                    <textarea
                        rows={8}
                        name="details"
                        value={formState.details || ''}
                        className="input h-30 input-bordered w-full py-2 rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary overflow-x-hidden overflow-y-auto whitespace-pre-wrap break-words"
                        placeholder="Describe the food, taste, etc."
                        onChange={handleFieldChange}
                    ></textarea>
                    {errors.details && <p className="text-error text-xs mt-1">{errors.details}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Ingredients <span className='text-xs'>(comma separated)</span></label>
                    <input
                        type="text"
                        name="ingredients"
                        value={formState.ingredients || ''}
                        placeholder="e.g. Rice, Chicken, Spices"
                        className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                        onChange={handleFieldChange}
                    />
                    {errors.ingredients && <p className="text-error text-xs mt-1">{errors.ingredients}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium text-primary mb-1">Making Procedure</label>
                    <textarea
                        rows={12}
                        name="making_procedure"
                        value={formState.making_procedure || ''}
                        className="input input-bordered h-30 w-full py-2 rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary overflow-x-hidden overflow-y-auto whitespace-pre-wrap break-words"
                        placeholder="Step by step procedure..."
                        onChange={handleFieldChange}
                    ></textarea>
                    {errors.making_procedure && <p className="text-error text-xs mt-1">{errors.making_procedure}</p>}
                </div>
                {/* Read-Only User Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">Added By (User Name)</label>
                        <input
                            type="text"
                            name="user_name"
                            value={user?.displayName}
                            readOnly
                            className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-primary mb-1">User Email</label>
                        <input
                            type="email"
                            name="user_email"
                            value={user?.email}
                            readOnly
                            className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                        />
                    </div>
                </div>
                {/* Purchase, default 0) */}
                <div className="md:col-span-2 hidden">
                    <label className="block font-medium mb-1">
                        Purchase Count (default: 0)
                    </label>
                    <input
                        type="number"
                        name="purchase_count"
                        value={formState.purchase_count || 0}
                        readOnly
                        className="input-base cursor-not-allowed rounded-3xl"
                    />
                </div>
                {/* Submit */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-secondary text-white px-6 py-2 rounded-3xl border hover:bg-opacity-90 transition duration-300"
                    >
                        <FaPlus /> Update Food
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditFood;