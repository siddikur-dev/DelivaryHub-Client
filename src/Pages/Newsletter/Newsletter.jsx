import React from "react";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-primary mb-3">
          Stay <span className="text-secondary">Connected</span>
        </h2>
        <p className="text-base-content/70 max-w-xl mx-auto mb-8">
          Subscribe to get updates on new toys, exclusive offers, and exciting
          collections from{" "}
          <span className="font-semibold text-primary">Toy Universe BD</span>!
        </p>

        {/* Form */}
        <form className="max-w-md mx-auto flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full sm:flex-1 bg-base-100 border-primary/40 focus:border-primary focus:ring-primary"
            required
          />
          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto text-white font-semibold  transition-all duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
