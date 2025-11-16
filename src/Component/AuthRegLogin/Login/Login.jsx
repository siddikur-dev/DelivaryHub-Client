import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthContext/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { VscEyeClosed } from "react-icons/vsc";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { signInWithMailPass, signInGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email?.value?.trim();
    const password = form.password?.value;

    signInWithMailPass(email, password)
      .then((res) => {
        const loggedUser = res.user;
        // optional: you can redirect or update UI here
        toast.success("Login successful");
        navigate(location.state || "/");
        form.reset();
      })
      .catch((error) => {
        console.log("login error", error);
        toast.error("Wrong Mail/Password");
      });
  };

  // Sign In Google
  const signWithGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("User sign in successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error("Failed To Google Sign");
        console.log("Sign in google", error);
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4">
      {/* helmet*/}
      <title>Login - Toy Universe</title>
      <div className="bg-base-100 shadow-xl rounded-xl w-full max-w-md p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login Now!
        </h2>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-base-content font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full focus:border-primary focus:ring-primary"
              required
            />
          </div>

          <div>
            <label className="block text-base-content font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full pr-10 focus:border-primary focus:ring-primary"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-3  cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <VscEyeClosed /> : <FaRegEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="text-base-content/70">Remember me</span>
            </label>
            <Link
              to="/reset-password"
              className="text-primary  cursor-pointer underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white  transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-base-content/70">
          Don’t have an account?{" "}
          <a
            href="/register"
            className="text-primary hover:underline font-medium"
          >
            Register here
          </a>
        </p>

        {/* Google Sign-in */}
        <div className="divider text-base-content/60">OR</div>
        <div className="pt-2">
          <button
            className="btn btn-outline w-full flex items-center justify-center gap-2 hover:border-primary hover:text-primary"
            onClick={signWithGoogle}
          >
            <FcGoogle size={22} />
            <span className="font-medium">Sign in with Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
