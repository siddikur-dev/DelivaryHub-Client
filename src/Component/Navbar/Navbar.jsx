import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import { AuthContext } from "../../Provider/AuthContext/AuthContext";
import { TbLogout2 } from "react-icons/tb";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";

const Navbar = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);

  const navigate = useNavigate();
  if (loading) {
    return (
      <div className="flex justify-center my-3">
        <BeatLoader color="rgba(232, 89, 79, 1)" />
      </div>
    );
  }
  // Sign Out Function
  const signOut = () => {
    signOutUser()
      .then(() => {
        navigate("/");
        toast.success("Logout Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand / Logo */}
        <NavLink className="text-2xl font-bold tracking-wide">
          <span className="text-primary">🧸Toy</span>
          <span className="text-secondary">Universe</span>
        </NavLink>
        <div className="hidden md:flex gap-5 items-center">
          <NavLink
            to="/"
            className="text-base font-medium text-base-content    hover:text-primary/75"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-base font-medium text-base-content    hover:text-primary/75"
          >
            About
          </NavLink>

          <NavLink
            to="/feature"
            className="text-base font-medium text-base-content    hover:text-primary/75"
          >
            Feature
          </NavLink>

          {user && (
            <NavLink
              to="/profile"
              className="text-base font-medium text-base-content    hover:text-primary/75"
            >
              Profile
            </NavLink>
          )}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3 items-center">
          <ThemeToggle></ThemeToggle>
          {user ? (
            <div className="flex items-center gap-3">
              {/* Profile Image */}
              <div
                className="relative flex items-center justify-center cursor-pointer group"
                onClick={() => navigate("/profile")}
              >
                <img
                  src={
                    user.photoURL ||
                    "https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                  }
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 hover:border-blue-500 transition-all duration-200"
                />

                {/* Name below on hover */}
                <span className="absolute top-full mt-1 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {user.displayName}
                </span>
              </div>

              {/* Logout Button */}
              <button
                onClick={signOut}
                className="btn btn-primary text-white hover:font-semibold duration-300"
              >
                <TbLogout2 />
                Logout
              </button>
            </div>
          ) : (
            <Link
              to={"/login"}
              className="btn btn-primary text-white  duration-300"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Dropdown Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="  btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-base-content"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className="text-base-content hover:text-primary/75 hover:bg-base-200"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-base-content hover:text-primary/75 hover:bg-base-200"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/feature"
                className="text-base-content hover:text-primary/75 hover:bg-base-200"
              >
                Feature 
              </NavLink>
            </li>
            <li>
              {user && (
                <NavLink
                  to="/profile"
                  className="  text-base-content hover:text-primary/75 hover:bg-base-200"
                >
                  Profile
                </NavLink>
              )}
            </li>
            <ThemeToggle></ThemeToggle>
            <li>
              {user ? (
                <button
                  onClick={signOut}
                  className="btn btn-primary text-white   duration-300 mt-2"
                >
                  <TbLogout2 />
                  Logout
                </button>
              ) : (
                <Link
                  to={"/register"}
                  className="btn btn-primary w-full mt-2 text-white duration-300"
                >
                  Register
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
