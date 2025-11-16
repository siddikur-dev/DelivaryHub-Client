import React, { useEffect, useState, useMemo } from 'react';
import coverImg from '../../assets/images/header/food-bg3.jpg';
import FoodCard from './FoodCard';
import { FiSearch } from 'react-icons/fi';

const AllFoods = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/foods?search=${search}`)
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, [search]);

    // Frontend sorting logic
    const sortedItems = useMemo(() => {
        let sorted = [...items];
        if (sort === 'price') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sort === 'country') {
            sorted.sort((a, b) => (a.food_origin || '').localeCompare(b.food_origin || ''));
        } else if (sort === 'availability') {
            sorted.sort((a, b) => (b.quantity || 0) - (a.quantity || 0));
        }
        return sorted;
    }, [items, sort]);

    return (
        <div className="mt-16 mb-10 md:mb-16 lg:mb-20">
            <header
                className="w-full h-80 bg-cover bg-center py-16 flex items-center justify-center shadow-md mb-10 relative"
                style={{ backgroundImage: `url('${coverImg}')` }}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/60 via-secondary/20 to-black/50"></div>
                <div className="w-full flex items-center justify-center py-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary text-center tracking-wide border-b-3 border-secondary drop-shadow">ALL FOODS</h1>
                </div>
            </header>

            {/* Search & Sort */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 mb-10 px-2">
                {/* Search */}
                <div className="relative flex-1 max-w-xs md:max-w-sm w-full">
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-xl z-20 pointer-events-none">
                        <FiSearch />
                    </span>
                    <input
                        type="text"
                        placeholder="Search foods..."
                        className="input input-bordered w-full pl-10 py-0 rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                        name="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        autoComplete="off"
                    />
                    {search && (
                        <button
                            onClick={() => setSearch("")}
                            className="absolute right-2 top-1/2 -translate-y-1/2 btn btn-ghost btn-xs text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1"
                            title="Clear search"
                        >
                            ✕
                        </button>
                    )}
                </div>

                {/* Sort options */}
                <div className="flex flex-row flex-wrap gap-2 w-full lg:w-auto justify-center items-center">
                    {/* Sort by Country */}
                    <div className="flex flex-col items-center w-28">
                        <label className="text-primary text-xs font-semibold mb-1">Country</label>
                        <select
                            className="select select-bordered select-sm rounded-md w-full text-primary font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
                            value={sort}
                            onChange={e => setSort(e.target.value)}
                        >
                            <option value="">None</option>
                            <option value="country">A-Z</option>
                        </select>
                    </div>
                    {/* Sort by Price */}
                    <div className="flex flex-col items-center w-28">
                        <label className="text-primary text-xs font-semibold mb-1">Price</label>
                        <select
                            className="select select-bordered select-sm rounded-md w-full text-primary font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
                            value={sort}
                            onChange={e => setSort(e.target.value)}
                        >
                            <option value="">None</option>
                            <option value="price">Low-High</option>
                        </select>
                    </div>
                    {/* Sort by Availability */}
                    <div className="flex flex-col items-center w-28">
                        <label className="text-primary text-xs font-semibold mb-1">Availability</label>
                        <select
                            className="select select-bordered select-sm rounded-md w-full text-primary font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
                            value={sort}
                            onChange={e => setSort(e.target.value)}
                        >
                            <option value="">None</option>
                            <option value="availability">In-stock</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* No results message */}
            {search && sortedItems.length === 0 && (
                <div className="max-w-7xl mx-auto px-2 sm:px-4 mb-8">
                    <div className="text-center py-12">
                        <div className="flex justify-center items-center mb-4">
                            <FiSearch className="text-6xl text-secondary animate-bounce" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-2">No foods found</h3>
                        <p className="text-accent mb-4">
                            No food items match your search for "<span className="font-semibold text-secondary">{search}</span>"
                        </p>
                        <p className="text-sm text-gray-500 mb-6">
                            Try adjusting your search terms or browse all available foods
                        </p>
                        <button
                            onClick={() => setSearch("")}
                            className="btn btn-secondary btn-outline rounded-3xl px-6"
                        >
                            Clear Search & Show All Foods
                        </button>
                    </div>
                </div>
            )}

            {/* food card container */}
            <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {sortedItems.map(item => <FoodCard key={item._id} item={item} />)}
                </div>
            </div>
        </div>
    );
};

export default AllFoods;
