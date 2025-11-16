import React from 'react';

const CallToAction = () => {
    return (
        <section className="relative w-full bg-gradient-to-br from-[#FF9F45] via-[#FF6F61] to-[#FF3C38] py-24 my-20 overflow-hidden">
            {/* Floating food emojis for playful touch */}
            <div className="absolute top-10 left-16 animate-bounce-slow text-7xl opacity-10 select-none">🍕</div>
            <div className="absolute bottom-12 right-24 animate-pulse text-6xl opacity-10 select-none">🍔</div>
            <div className="absolute top-1/3 right-10 animate-spin-slow text-6xl opacity-10 select-none">🥗</div>

            {/* Card */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 flex justify-center">
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] rounded-3xl px-10 md:px-20 py-16 text-center w-full overflow-hidden">
                    {/* Soft glowing background layer */}
                    <div className="absolute -inset-1.5 bg-gradient-to-tr from-yellow-300 via-red-400 to-pink-500 opacity-20 blur-3xl rounded-[inherit] z-[-1]" />

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl tracking-tight leading-snug">
                        Hungry? <span className="text-yellow-300">Let's Fix That.</span>
                    </h2>

                    {/* Subtitle */}
                    <p className="mt-6 text-lg md:text-xl text-primary max-w-2xl mx-auto font-medium leading-relaxed">
                        Craving something delicious? Foodio delivers hot, fresh, and irresistible meals straight to your door. Skip the wait — your tastebuds deserve it!
                    </p>

                    {/* CTA Button */}
                    <a
                        href="/all-foods"
                        className="mt-10 inline-block bg-white text-red-500 font-bold px-8 py-3 rounded-full text-lg shadow-md hover:bg-yellow-100 hover:scale-105 hover:-translate-y-1 transform transition-all duration-300"
                    >
                        🍽️ Order Now
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
