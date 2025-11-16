import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-base-100 border-t border-secondary py-10 px-5 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-extrabold text-primary mb-2 flex items-center gap-2">
            <span className="text-2xl">🧸</span>
            <span>Toy Universe</span>
          </h2>
          <p className="text-sm text-center md:text-left ">
            A world of joy and imagination for every child. Support local toy
            sellers and discover playful learning!
          </p>
        </div>

        {/* Useful Links */}
        <div className="text-center  hidden lg:block">
          <h3 className="text-lg font-semibold text-secondary mb-3">
            Useful Links
          </h3>
          <ul className="space-y-2 ">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/feature" className="hover:text-primary">
                Feature
              </Link>
            </li>

            <li>
              <Link to="/profile" className="hover:text-primary">
                Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="text-center hidden lg:block ">
          <h3 className="text-lg font-semibold text-secondary mb-3">Legal</h3>
          <ul className="space-y-2 ">
            <li>
              <Link to="/" className="hover:text-primary">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/F" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-primary">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="text-center md:items-end">
          <h3 className="text-lg font-semibold text-secondary mb-3">Connect</h3>
          <p className="mb-3">Follow us on social media</p>
          <div className="flex justify-center gap-3">
            <Link
              to="https://www.facebook.com/siddikur.dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://www.x.com/siddikur_dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/dev-siddikur"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
