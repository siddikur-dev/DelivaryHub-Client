import React, { useContext, useRef } from "react";
import { AuthContext } from "../../../Provider/AuthContext/AuthContext";
import toast from "react-hot-toast";
import { MdMarkEmailRead } from "react-icons/md";

const ResetPass = () => {
  const { resetPassword } = useContext(AuthContext);
  const emailRef = useRef();

  // Reset Password Handler
  const forgetPass = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      toast.error("Please provide your email to reset the password.");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset link has been sent to your email.");
        // Redirect to Gmail
        window.location.href = "https://mail.google.com/";
      })
      .catch((error) => {
        console.log("Forget password error:", error.message);
        toast.error("Failed to send reset link. Try again.");
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      <title>Forget Password - Toy Universe</title>

      <div className="bg-base-100 shadow-xl rounded-xl w-full max-w-md p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <MdMarkEmailRead className="text-5xl text-primary" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-primary mb-2">
          Reset Your Password
        </h2>
        <p className="text-base-content/70 mb-6">
          Enter your registered email address. We’ll send you a reset link.
        </p>

        {/* Form */}
        <form onSubmit={forgetPass} className="space-y-4 text-left">
          <div>
            <label className="block text-base-content font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="input input-bordered w-full focus:border-primary focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white transition-all duration-300"
          >
            Send Reset Link
          </button>
        </form>

        {/* Back to Login */}
        <p className="text-center text-sm mt-6 text-base-content/70">
          Remember your password?{" "}
          <a href="/login" className="text-primary hover:underline font-medium">
            Back to Login
          </a>
        </p>
      </div>
    </section>
  );
};

export default ResetPass;
