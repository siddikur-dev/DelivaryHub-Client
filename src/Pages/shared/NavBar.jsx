import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { FaArrowRight, FaBars } from "react-icons/fa";
import DeliveryLogo from "../../components/DevliveryLogo/DelivaryLogo";
import { BsArrowUpRightCircle } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Signout user
  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#CAEB66",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log Out Successful!",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          navigate("/");
        });
      }
    });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/send-parcel">Send Parcel</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar rounded-xl px-4 md:px-8 py-3 shadow-sm container mx-auto ">
      {/* Left Side - Logo and Brand */}
      <div className="">
        <DeliveryLogo />
        {/* <span className="ml-2 text-xl font-bold">DeliveryHub</span> */}
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden lg:flex lg:flex-1 lg:justify-center">
        <ul className="menu menu-horizontal px-1 text-sm font-medium">
          {navLinks}
        </ul>
      </div>

      {/* Right Side - Auth Buttons */}
      <div className="hidden lg:flex lg:items-center lg:space-x-3">
        {user ? (
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium">
              Welcome, {user.displayName || user.email}
            </span>
            <button
              onClick={handleSignOut}
              className="btn btn-secondary rounded-md text-primary"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Link
              to="/auth/login"
              className="btn btn-secondary btn-outline rounded-md text-primary"
            >
              Sign In
            </Link>
            <Link
              to="/auth/signup"
              className="btn  btn-secondary btn-outline rounded-md text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        )}

        <Link
          to="/be-a-rider"
          className="btn btn-secondary text-primary rounded-md"
        >
          Be a Rider <BsArrowUpRightCircle size={20} />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden ml-auto">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="btn btn-secondary btn-outline text-xl"
        >
          <FaBars />
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-base-100 z-50 shadow-md p-4">
            <ul className="menu menu-vertical space-y-2 text-base font-medium">
              {navLinks}
              <div className="divider"></div>
              {user ? (
                <>
                  <li className="p-2 text-center">
                    <span>Welcome, {user.displayName || user.email}</span>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="btn btn-secondary w-full rounded-md text-primary"
                    >
                      Log Out
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="btn btn-secondary btn-outline w-full rounded-md text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="btn-secondary btn btn-outline w-full rounded-md  text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
              <li>
                <Link
                  to="/be-a-rider"
                  className="flex items-center justify-center text-black btn-secondary btn px-3 py-2 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Be a Rider <FaArrowRight className="ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
