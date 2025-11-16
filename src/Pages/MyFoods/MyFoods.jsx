import axios from 'axios';
import { useState, use } from 'react';
import notFoundLottie from '../../assets/lotties/food-not-found.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { Fade } from 'react-awesome-reveal';

const MyFoods = ({myFoodsPromise}) => {
    const initialFoods = use(myFoodsPromise); 
    const { user } = useAuth();
    const [myFoods, setMyFoods] = useState(initialFoods || []);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${import.meta.env.VITE_API_URL}/foods/${id}?email=${user.email}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Food has been deleted.",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            const updatedFoods = myFoods.filter(food => food._id !== id);
                            setMyFoods(updatedFoods);
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting application:", error);
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${error.message} || Something went wrong while deleting the food}`,
                        });
                    })
            }
        });
    }

    // if (loading) {
    //     return <Spinner />;
    // }

    return (
        <div className="max-w-7xl mt-16 min-h-[calc(100vh-300px)] mx-auto px-4 py-8 md:py-16 lg:py-20">
            <Fade>
            <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
                My <span className="text-secondary">Food</span> Listings
            </h2>

            </Fade>
            {/* {if no food found />} */}
            {myFoods.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16">
                    <Lottie animationData={notFoundLottie} className="w-50 h-50"></Lottie>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary/60 mt-8 mb-2 text-center">No Foods Found</h3>
                    <p className="text-accent text-lg mb-6 text-center max-w-md">You haven't added any foods yet. Start by adding your first food item!</p>
                </div>
            ) : (
                <div className="overflow-x-auto shadow-md rounded-xl">
                    <table className="min-w-full bg-base-200 overflow-x-scroll text-left border border-secondary/10">
                        <thead className="bg-secondary/10 text-secondary text-sm">
                            <tr>
                                <th className="px-4 py-3 border-b border-secondary/10">Photo</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Name</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Quantity</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Price</th>
                                <th className="px-4 py-3 border-b border-secondary/10 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myFoods.map((food) => (
                                <tr key={food._id} className="hover:bg-secondary/5 transition duration-200">
                                    <td className="px-4 py-3 border-b border-secondary/10">
                                        <img
                                            src={food.food_img}
                                            alt={food.food_name}
                                            className="h-16 w-24 object-cover rounded"
                                        />
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                                        {food.food_name}
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                                        {food.quantity || 1}
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                                        ${food.price}
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 text-center space-y-1 lg:space-y-0 space-x-2">
                                        <Link to={`/item-details/${food._id}`} className="btn btn-xs md:btn-sm btn-outline btn-info">View</Link>
                                        <Link to={`/edit-food/${food._id}`} className="btn btn-xs md:btn-sm btn-outline btn-primary">Edit</Link>
                                        <button
                                            onClick={() => handleDelete(food._id)}
                                            className="btn btn-xs md:btn-sm btn-outline btn-error"
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyFoods;
