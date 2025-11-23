import React from "react";
import DeliveryLogo from "../../components/DevliveryLogo/DelivaryLogo";
import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="container mx-auto px-8 lg:px-12 py-2">
      <DeliveryLogo />

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        {/* Drawer Content */}
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-base-300">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost lg:hidden"
            >
              {/* Hamburger icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-6"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </label>

            <div className="px-4">Navbar Title</div>
          </nav>

          <Outlet />
        </div>

        {/* Drawer Side */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

          <div className="min-h-full w-64 bg-base-200 flex flex-col">
            <ul className="menu w-full grow">
              <li>
                <button>
                  {/* Home icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </svg>
                  Homepage
                </button>
              </li>

              <li>
                <Link to="/dashboard/my-parcels">My Parcel</Link>
              </li>
              <li>
                <Link to="/dashboard/payment-history">Payment History</Link>
              </li>

              <li>
                <button>
                  {/* Settings */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-4"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                  Settings
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
