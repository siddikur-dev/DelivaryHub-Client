import { Link, useLocation, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import Spinner from "./shared/Spinner";
import loginLottie from '../assets/lotties/login-lottie.json';
import Lottie from "lottie-react";


const Login = () => {

    const { user, loginUser, googleSignIn, setUser } = useAuth();


    //use location for path
    const location = useLocation();
    //navigate / redirect to another page
    const navigate = useNavigate()
    //handle error
    const [error, setError] = useState('');
    const errorMessages = {
        "auth/invalid-credential": "Invalid email or password.",
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Incorrect password. Try again.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/missing-password": "Please enter your password.",
        "auth/too-many-requests": "Too many attempts. Please try again later.",
        "auth/network-request-failed": "Network error. Check your internet connection.",
    };


    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    };
    //if already logged in then return to previous page.
    useEffect(() => {
        if (user) {
            navigate(location.state ? location.state : '/');
        }
    }, [user, navigate, location.state]);

    if (user) {
        // Only redirect if not in error state
        if (!error) {
            return <Spinner />;
        }
    }

    const handleSignin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        //signin user
        loginUser(email, password)
            .then(userCredential => {
                const currentUser = userCredential.user;
                const userInfo = {
                    email: currentUser.email,
                    displayName: currentUser.displayName,
                    photoURL: currentUser.photoURL,
                }
                setUser(userInfo)
                setError('');
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign In Success!",
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(error => {
                const message = errorMessages[error.code] || "An unexpected error occurred.";
                setError(message);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${message}`,
                });
            })

    }

    //google signin
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setUser(result.user);
                navigate(`${location.state ? location.state : '/'}`)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Sign In Success!",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(error => {
                const errorMessage = error.message;
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: errorMessage || 'Something went wrong!'
                });
            })
    }

    return (
        <div className="mt-16 max-w-5xl py-10 md:py-20 mx-auto flex flex-col md:flex-row">
            <title>Foodio | User Login</title>
            {/* Left Column Image */}
            <div className="flex-1 flex items-center justify-center p-4 w-11/12 lg:w-full mx-auto">
               <Lottie animationData={loginLottie}></Lottie>
            </div>

            {/* Right Column (Form) */}
            <div className="flex-1 w-full flex items-center justify-center p-4 md:p-8">
                <div className="w-full max-w-md border-2 p-4 md:p-6 lg:p-8 rounded-xl border-secondary/30 shadow-md">
                    <h2 className="text-primary text-3xl font-bold mb-6 text-center">Log In</h2>

                    <form
                        onSubmit={handleSignin}
                        className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="label">
                                <span className="label-text text-primary font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                                onFocus={() => setError('')}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="label">
                                <span className="label-text text-primary font-medium">Password</span>
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Type Your Password"
                                    className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary pr-10"
                                    // autoComplete="current-password"
                                    onFocus={() => setError('')}
                                />
                                <p
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 z-10 right-3 flex items-center text-secondary"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </p>
                            </div>
                        </div>
                        {/* show error message */}
                        {error && <p className='text-red-500'>✗ {error}</p>}

                        {/* Sign In Button */}
                        <button className="btn btn-secondary text-white w-full rounded-3xl mt-4">
                            Log In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Sign in with Google */}
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-outline hover:bg-secondary/15 border-secondary w-full rounded-3xl">
                        <FcGoogle />
                        Login with Google
                    </button>

                    {/* Sign Up Link */}
                    <p className="mt-4 text-center text-sm text-accent">
                        Don’t have an account?{" "}
                        <Link to="/signup" className="text-secondary hover:underline font-medium rounded">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;