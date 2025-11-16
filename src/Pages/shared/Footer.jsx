import { FaFacebookF, FaTwitter, FaInstagram, FaHome, FaUtensils, FaImages, FaPlus, FaRegUserCircle, FaListOl } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from '/logo-foodio.png';


const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-secondary/10 via-base-100 to-secondary/5 text-accent pt-14 pb-8 border-t border-secondary/20 shadow-inner">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-10 text-sm items-start lg:justify-items-center">
                {/* Brand & Mission */}
                <div className="md:col-span-2 flex flex-col gap-2 items-start">
                    <div className="flex items-center gap-3 mb-2">
                        <img src={logo} alt="Foodio Logo" className="w-32 drop-shadow-lg" />
                    </div>
                    <p className="text-accent text-base leading-relaxed mb-2 max-w-xs">Discover, order, and manage your favorite meals with Foodio. Enjoy a seamless, secure, and delicious experience every time.</p>
                </div>
                {/* Navigation Links - Unique, Iconic, Grouped */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-2 text-primary">Navigation</h3>
                    <NavLink to='/' className="flex items-center gap-2 hover:translate-x-2 duration-500 hover:text-secondary font-medium"><FaHome /> Home</NavLink>
                    <NavLink to='/all-foods' className="flex items-center gap-2 hover:translate-x-2 duration-500 hover:text-secondary font-medium"><FaUtensils /> All Foods</NavLink>
                    <NavLink to='/gallery' className="flex items-center gap-2 hover:translate-x-2 duration-500 hover:text-secondary font-medium"><FaImages /> Gallery</NavLink>
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold mb-2 text-primary">User</h3>
                    <NavLink to='/my-profile' className="flex items-center gap-2 hover:translate-x-2 duration-500 hover:text-secondary font-medium"><FaRegUserCircle /> My Profile</NavLink>
                    <NavLink to='/my-foods' className="flex items-center gap-2 hover:translate-x-2 duration-500 hover:text-secondary font-medium"><FaUtensils /> My Foods</NavLink>
                    <NavLink to='/add-foods' className="flex items-center gap-2 hover:translate-x-2 duration-500 hover:text-secondary font-medium"><FaPlus /> Add Foods</NavLink>
                    <NavLink to='/my-orders' className="flex items-center gap-2 hover:translate-x-2 duration-500 hover:text-secondary font-medium"><FaListOl /> My Orders</NavLink>
                </div>
                {/* Contact & Social */}
                <div className="flex flex-col gap-2 items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-2 text-primary">Contact</h3>
                    <p className="mb-1">support@foodio.com</p>
                    <p className="mb-1">+1 (800) 123-4567</p>
                    <p>123 Food St, WA, USA</p>
                    <div className="flex gap-4 text-lg mt-3">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            {/* Bottom: Terms/Privacy row, then copyright row */}
            <div className="pt-8 mt-8 text-center text-xs text-accent border-t border-secondary/10 flex flex-col items-center gap-2">
                <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/terms-and-conditions" className="hover:text-secondary underline">Terms & Conditions</Link>
                    <span className="text-secondary/30">|</span>
                    <Link to="/privacy-policy" className="hover:text-secondary underline">Privacy Policy</Link>
                </div>
                <div>
                    © {new Date().getFullYear()} <span className="text-secondary font-semibold">Foodio</span>. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
