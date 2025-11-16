import React from "react";
import { FaTruck, FaShieldAlt, FaSmile, FaGift } from "react-icons/fa";
import faq from "../../assets/faq.svg";

const Feature = () => {
  return (
    <div className="w-full bg-100">
      {/* Helmet */}
      <title>Feature - Toy Universe</title>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-10 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Why
            <span className="text-secondary"> Choose </span>
            Us
          </h2>
          <p className="text-lg font-medium">
            Bringing happiness, creativity, and learning to every child’s
            playtime.
          </p>
        </div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="p-6 border-t-4 border-primary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70 ">
            <div className="flex justify-center mb-4">
              <FaGift className="text-5xl text-primary  transition-colors duration-300" />
            </div>
            <h3
              className="text-xl font-semibold mb-2 
             transition-colors duration-300"
            >
              Wide Variety
            </h3>
            <p className="text-sm md:text-base transition-colors duration-300">
              Explore our collection of fun, educational, and creative toys for
              every child.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border-t-4 border-secondary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70">
            <div className="flex justify-center mb-4">
              <FaShieldAlt className="text-5xl text-secondary" />
            </div>
            <h3 className="text-xl font-semibold  mb-2">Safe & Non-Toxic</h3>
            <p className=" text-sm md:text-base">
              All our toys are made from non-toxic materials to ensure your
              child’s safety.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border-t-4 border-primary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70">
            <div className="flex justify-center mb-4">
              <FaTruck className="text-5xl text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className=" text-sm md:text-base">
              Quick and reliable delivery to your doorstep all over Bangladesh.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 border-t-4 border-secondary hover:-translate-y-1 text-center group card w-full shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl bg-base-300/70">
            <div className="flex justify-center mb-4">
              <FaSmile className="text-5xl text-secondary" />
            </div>
            <h3 className="text-xl font-secondary  mb-2">Happy Customers</h3>
            <p className=" text-sm md:text-base">
              Thousands of happy parents trust ToyTopia for quality and
              joy-filled playtime.
            </p>
          </div>
        </div>
      </section>
      {/*  */}
      {/* Faq */}
      <section className="py-16 px-4 sm:px-6 lg:px-10 bg-base-100  transition-all duration-300">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Side Image */}
          <div className="flex justify-center">
            <img
              src={faq}
              alt="FAQ Illustration"
              className="w-4/5 max-w-sm lg:max-w-md rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side FAQ */}
          <section className="py-16 px-4 sm:px-6 lg:px-10 bg-base-100 transition-all duration-300">
            <div className="max-w-4xl mx-auto">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-primary">
                Frequently Asked{" "}
                <span className="text-secondary">Questions</span>
              </h2>

              {/* FAQ Items */}
              <div className="space-y-5">
                <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
                  <summary className="cursor-pointer text-lg font-semibold">
                    What is Toy Universe?
                  </summary>
                  <p className="mt-3 text-base text-base-content/80">
                    Toy Universe is your local kids’ toy platform offering fun,
                    safe, and creative toys for every age.
                  </p>
                </details>

                <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Are your toys safe for kids?
                  </summary>
                  <p className="mt-3 text-base text-base-content/80">
                    Absolutely! All our toys are made from child-safe, non-toxic
                    materials with strict quality checks.
                  </p>
                </details>

                <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-primary">
                  <summary className="cursor-pointer text-lg font-semibold">
                    How fast do you deliver?
                  </summary>
                  <p className="mt-3 text-base text-base-content/80">
                    We usually deliver within 2–5 working days across
                    Bangladesh.
                  </p>
                </details>

                <details className="bg-base-300/60 p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-secondary">
                  <summary className="cursor-pointer text-lg font-semibold">
                    Can I return a product?
                  </summary>
                  <p className="mt-3 text-base text-base-content/80">
                    Yes, we have a simple return policy if your toy is damaged
                    or not as described.
                  </p>
                </details>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Feature;
