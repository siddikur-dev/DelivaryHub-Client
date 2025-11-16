import { Link, useLoaderData } from 'react-router';
import { FaGlobeAsia, FaBoxOpen, FaStar } from 'react-icons/fa';
import { useState } from 'react';
import Spinner from './shared/Spinner';

const FoodDetails = () => {
    const food = useLoaderData();
    const [isLoading, setIsLoading] = useState(false);

    if (!food) {
        return <div className="text-center text-error py-20">Food not found.</div>;
    }

    const handleButtonClick = (action) => {
        setIsLoading(true);
        // Simulate loading time - in real app this would be actual navigation or API call
        setTimeout(() => {
            setIsLoading(false);
            // Here you can add actual navigation logic based on the action
            if (action === 'back') {
                window.location.href = '/all-foods';
            } else if (action === 'purchase') {
                window.location.href = `/food-purchase/${food._id}`;
            }
        }, 1000);
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="max-w-7xl mx-auto mt-16 px-4 py-8 md:py-16 lg:py-24">
            {/* Main Product Section */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
                {/* Left Side - Product Image */}
                <div className="flex flex-col items-center lg:items-start lg:col-span-2">
                    <div className="relative w-full h-full">
                        <img
                            src={food.food_img}
                            alt={food.food_name}
                            className="w-full h-full object-cover rounded-2xl shadow-lg border border-secondary/20"
                        />
                    </div>
                </div>

                {/* Right Side - Product Details */}
                <div className="flex flex-col justify-start space-y-6 lg:col-span-3">
                    {/* Product Title */}
                    <h1 className="text-3xl lg:text-4xl font-bold text-primary leading-tight">
                        {food.food_name}
                    </h1>

                    {/* Pricing Information */}
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-secondary">${food.price}</span>
                            <span className="text-lg text-gray-500 line-through">${(food.price * 1.35).toFixed(2)}</span>
                        </div>
                        <div className="flex gap-3">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded text-sm">Regular: ${(food.price * 1.1).toFixed(2)}</span>
                            <span className={`px-3 py-1 rounded text-sm ${food.quantity > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {food.quantity > 0 ? 'In Stock' : 'Sold Out'}
                            </span>
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded text-sm">Code: {food._id.slice(-5)}</span>
                        </div>
                    </div>

                    {/* Chef */}
                    <div className="text-lg">
                        <span className="font-semibold text-primary">Owner:</span> {food.user_name}
                    </div>

                    {/* Food Information */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-primary">Food Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div><span className="font-medium">Food Type:</span> {food.food_name?.slice(0, 8)}</div>
                            <div><span className="font-medium">Origin:</span> {food.food_origin}</div>
                            <div><span className="font-medium">Available Portions:</span> {food.quantity} servings</div>
                            <div><span className="font-medium">Total Sold:</span> {food.purchase_count || 0} orders</div>
                        </div>
                    </div>

                    {/* Category Badges */}
                    <div className="flex flex-wrap gap-2">
                        {Array.isArray(food.food_category)
                            ? food.food_category.map(cat => (
                                <span key={cat} className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium border border-secondary/30">
                                    {cat}
                                </span>
                            ))
                            : food.food_category && <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium border border-secondary/30">{food.food_category}</span>
                        }
                    </div>

                    {/* Online Order Notice */}
                    <div className="flex items-center gap-2 text-sm text-red-600">
                        <div className="w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold">i</div>
                        <span>Only For Online Order</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button 
                            onClick={() => handleButtonClick('back')} 
                            className="btn btn-outline btn-secondary rounded-3xl font-semibold shadow-md hover:scale-105 transition-transform"
                        >
                            Back to All Foods
                        </button>
                        <button 
                            onClick={() => handleButtonClick('purchase')} 
                            className="btn btn-secondary rounded-3xl font-bold text-white shadow-lg hover:scale-105 hover:bg-secondary/90 transition-transform duration-300"
                        >
                            Purchase Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Food Details and Making Procedure Tabs */}
            <div className="mt-8">
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="food_tabs" role="tab" className="tab tab-lg font-semibold [&:checked]:text-secondary [&:checked]:border-b-2 [&:checked]:border-secondary" aria-label="Food Details" defaultChecked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-secondary/20 rounded-box p-6 shadow-md">
                        <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                            <FaGlobeAsia className="text-secondary" />
                            Food Details
                        </h2>
                        <div className="text-base text-accent leading-relaxed whitespace-pre-line">
                            {food.details}
                        </div>
                    </div>

                    <input type="radio" name="food_tabs" role="tab" className="tab tab-lg font-semibold [&:checked]:text-secondary [&:checked]:border-b-2 [&:checked]:border-secondary" aria-label="Making Procedure" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-secondary/20 rounded-box p-6 shadow-md">
                        <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                            <FaBoxOpen className="text-secondary" />
                            Making Procedure
                        </h2>
                        
                        {/* Ingredients Section */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                                <FaStar className="text-secondary text-sm" />
                                Ingredients
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {Array.isArray(food.ingredients)
                                    ? food.ingredients.map((ing, i) => (
                                        <span key={i} className="px-3 py-2 bg-secondary/10 rounded-xl text-sm text-secondary font-medium border border-secondary/20">
                                            {ing}
                                        </span>
                                    ))
                                    : <span className="px-3 py-2 bg-secondary/10 rounded-xl text-sm text-secondary font-medium border border-secondary/20">{food.ingredients}</span>
                                }
                            </div>
                        </div>

                        {/* Making Procedure */}
                        <div>
                            <h3 className="text-lg font-semibold text-primary mb-3">Instructions</h3>
                            <div className="text-sm text-accent leading-relaxed whitespace-pre-line">
                                {food.making_procedure}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payment Options */}
            <div className="mt-8 bg-base-100 rounded-2xl p-6 shadow-md border border-secondary/20">
                <h2 className="text-xl font-bold text-primary mb-4">Payment Options</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl mb-2">💳</div>
                        <div className="text-sm font-medium">Credit Card</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl mb-2">🏦</div>
                        <div className="text-sm font-medium">Bank Transfer</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl mb-2">📱</div>
                        <div className="text-sm font-medium">Mobile Payment</div>
                    </div>
                    <div className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl mb-2">💰</div>
                        <div className="text-sm font-medium">Cash on Delivery</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;