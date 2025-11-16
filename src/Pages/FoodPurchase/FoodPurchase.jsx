import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const FoodPurchase = () => {
    const food = useLoaderData();
    const { user } = useAuth();
    const navigate = useNavigate();

    // Form state for order info (no buying date input, use Date.now() in backend)
    const [form, setForm] = useState({
        order_quantity: 1
    });

    const handleSubmit = e => {
        e.preventDefault();
        // Prevent user from buying their own product
        if (food.user_email === user?.email) {
            Swal.fire({
                icon: 'warning',
                title: "You can't buy your own product!",
                text: "You are the seller of this food item.",
                confirmButtonColor: "#3085d6",
            });
            return;
        }
        // Send only relevant fields, buying date will be set in backend
        const purchaseData = {
            foodId: food._id || 'demo-id',
            food_name: food.food_name,
            price: food.price,
            order_quantity: form.order_quantity,
            buyer_name: user?.displayName,
            buyer_email: user?.email,
            total_price: form.order_quantity * food.price,
            purchase_time: Date.now(), // Add purchase time as timestamp
        };
        // Example: send to backend (replace with real API call)
        axios.post(`${import.meta.env.VITE_API_URL}/orders`, purchaseData)
            .then(res => {  
                if(res.data.insertedId){
                    Swal.fire({
                        title: "Purchase Successful!",
                        text: `Your order for ${food.food_name} has been placed successfully!`,
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "View Order",
                        cancelButtonText: "OK",
                    }).then(() => {
                        navigate('/my-orders');
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Order Failed',
                        text: 'Could not place your order. The item may be out of stock or unavailable.',
                        confirmButtonColor: "#3085d6",
                    });
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Order Failed',
                    text: err?.response?.data?.message || 'Could not place your order. Please try again.',
                    confirmButtonColor: "#3085d6",
                });
            });

    };

    return (
        <div className="max-w-7xl mx-auto mt-16 px-4 py-8 md:py-16 lg:py-24">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 bg-base-100 rounded-3xl shadow-lg overflow-hidden border border-secondary/10">
                {/* Left: Food Info (5/12) */}
                <div className="flex flex-col gap-4 p-4 md:p-8 md:col-span-5">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Food <span className="text-secondary">Info</span></h2>
                    <div className="flex items-center justify-center mb-4">
                        <img
                            src={food.food_img}
                            alt={food.food_name}
                            className="rounded-2xl shadow-lg w-full max-w-xs h-60 object-cover transition-transform duration-500 hover:scale-102"
                        />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-2 flex items-center gap-3">{food.food_name}
                      {food.quantity === 0 && (
                        <span className="badge bg-error text-white text-xs md:text-sm font-bold w-fit">Stock Out</span>
                      )}
                    </h2>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {food.food_category.map(cat => (
                            <span key={cat} className="badge bg-secondary/20 rounded-3xl text-xs md:text-sm text-secondary font-semibold">{cat}</span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm md:text-base text-accent mb-2">
                        <span>Origin: <span className="font-medium text-primary">{food.food_origin}</span></span>
                        <span>Quantity: <span className="font-medium text-primary">{food.quantity}</span></span>
                        <span>Price: <span className="font-medium text-primary">${food.price}</span></span>
                        <span>Purchased: <span className="font-medium text-primary">{food.purchase_count}</span></span>
                    </div>
                    <div className="text-base text-accent mb-2 whitespace-pre-line italic">
                        {food.details.slice(0, 100)}{food.details.length > 100 ? '...' : ''}
                    </div>
                </div>
                {/* Right: Order Info (7/12) */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-4 md:p-8 border-t md:border-t-0 md:border-l border-secondary/10 bg-gradient-to-br from-secondary/5 to-base-200 md:col-span-7">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Order <span className="text-secondary">Info</span></h2>
                    <div className="space-y-3 text-base md:text-lg">
                        <div>
                            <label className="font-semibold text-primary block mb-1">Food Name</label>
                            <input
                                type="text"
                                value={food.food_name}
                                readOnly
                                className="input input-bordered w-full rounded-3xl bg-base-100 text-accent font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-primary block mb-1">Buyer Name</label>
                            <input
                                type="text"
                                value={user?.displayName || ''}
                                readOnly
                                className="input input-bordered w-full rounded-3xl bg-base-100 text-accent font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-primary block mb-1">Buyer Email</label>
                            <input
                                type="email"
                                value={user?.email || ''}
                                readOnly
                                className="input input-bordered w-full rounded-3xl bg-base-100 text-accent font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="font-semibold text-primary block mb-1">Price/item</label>
                                <input
                                    type="text"
                                    value={`$${food.price}`}
                                    readOnly
                                    className="input input-bordered rounded-3xl px-3 bg-base-100 text-accent font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
                                />
                            </div>
                            <div>
                                <label className="font-semibold text-primary block mb-1">Quantity</label>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-xs btn-outline btn-secondary font-bold px-3"
                                        onClick={() => setForm(prev => ({ ...prev, order_quantity: Math.max(1, Number(prev.order_quantity || 1) - 1) }))}
                                        aria-label="Decrease quantity"
                                    >-</button>
                                    <input
                                        type="number"
                                        name="order_quantity"
                                        min={1}
                                        max={food.quantity}
                                        value={form.order_quantity}
                                        onChange={e => {
                                            let val = Number(e.target.value);
                                            if (val < 1) val = 1;
                                            if (val > food.quantity) val = food.quantity;
                                            setForm(prev => ({ ...prev, order_quantity: val }));
                                        }}
                                        required
                                        className="input input-bordered w-16 text-center rounded-3xl bg-base-100 text-accent focus:outline-none focus:ring-1 focus:ring-secondary"
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-xs btn-outline btn-secondary font-bold px-3"
                                        onClick={() => setForm(prev => ({ ...prev, order_quantity: Math.min(food.quantity, Number(prev.order_quantity || 1) + 1) }))}
                                        aria-label="Increase quantity"
                                    >+</button>
                                    <span className="text-xs text-accent ml-2">(Max: {food.quantity})</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="font-semibold text-primary block mb-1">Total Price</label>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="inline-flex items-center gap-2 text-2xl font-extrabold text-accent bg-secondary/5 border border-secondary/20 rounded-2xl px-5 py-2 shadow-sm">
                                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a5 5 0 00-10 0v2a5 5 0 0010 0zm-2 7h2a2 2 0 002-2v-5a2 2 0 00-2-2h-2m-4 0H7a2 2 0 00-2 2v5a2 2 0 002 2h2m4 0v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2" /></svg>
                                    ${ (form.order_quantity * food.price).toFixed(2) }
                                </span>
                            </div>
                        </div>
                        {/* Buying Date is not an input field, will be set in backend with Date.now() */}
                    </div>
                    <div className="mt-8 flex flex-col gap-3">
                        <button type="button" onClick={() => navigate(-1)} className="btn btn-outline btn-secondary rounded-3xl">Go Back</button>
                        <button type="submit" className="btn btn-secondary rounded-3xl font-semibold text-white px-8 text-lg shadow-lg hover:scale-105 transition-transform duration-200" disabled={food.quantity === 0}>Confirm Purchase</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FoodPurchase;