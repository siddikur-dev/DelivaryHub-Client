import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-base-content px-4">
      <title> Not Found - Toy Universe BD</title>
      <div className="text-center space-y-6">
        {/* Illustration */}
        <img
          src="https://t3.ftcdn.net/jpg/11/85/96/64/240_F_1185966429_oDAJkNlvJ2nV6wt0wtPQKfMx3A9SQkbV.jpg"
          alt="404 Illustration"
          className="w-82 mx-auto drop-shadow-lg rounded-2xl"
        />

        {/* Error Text */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Oops! Page Not Found
        </h2>
        <p className="max-w-md mx-auto text-base-content/70">
          Oops! The page you are looking for does not exist or has been moved.
          Please check the URL or return to the home page.
        </p>

        {/* Button */}
        <div>
          <Link
            to="/"
            className="btn btn-primary  text-white flex items-center gap-2 mx-auto"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
