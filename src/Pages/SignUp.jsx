import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Register = () => {
  const { createUser, googleSignIn, updateUser } = useAuth();
  const [profilePic, setProfilePic] = useState("");
  const axiosInstance = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(async (result) => {
        const user = result.user;
        //update user info in the databsae
        const userInfo = {
          email: user.email,
          role: "user", // default role is user
          created_at: new Date().toISOString(),
          last_log_in: new Date().toISOString(),
        };
        //update user profile info in the firebase
        const userRes = await axiosInstance.post("/users", userInfo);
        console.log(userRes);
        updateUser({ displayName: data.name, photoURL: profilePic })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Registration Successful!",
              text: "Your account has been created.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from);
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //signin with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);

        // create user in the database
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };

        axiosInstance.post("/users", userInfo).then((res) => {
          console.log("user data has been stored", res.data);
          navigate(location.state || "/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //handle image upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_image_upload_key
    }`;
    const res = await axios.post(imageUploadUrl, formData);
    setProfilePic(res.data.data.url);
  };

  return (
    <div className="">
      <div className="bg-white p-10">
        <h2 className="text-3xl font-bold mb-2">Create An Account</h2>
        <p className="text-sm text-accent mb-6">Register with ProFast</p>
        <div className="bg-accent/20 rounded-full p-2 w-10 h-10 flex items-center justify-center mb-4">
          <FaUser size={20} className="text-primary/30" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name field */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-primary font-medium">
                Your Name
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
              placeholder="Your Name"
            />
            {errors.name?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Image upload field */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text text-primary font-medium">
                Profile Picture
              </span>
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
              accept="image/*"
            />
          </div>

          {/* Email Input */}
          <div className=" mb-4">
            <label className="label">
              <span className="label-text text-primary font-medium">Email</span>
            </label>
            <input
              type="email"
              {...register(
                "email",
                { required: true },
                { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }
              )}
              placeholder="Email"
              className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
            {errors.email?.type === "pattern" && (
              <p className="text-red-500 text-sm mt-1">
                Please, enter a valid email address
              </p>
            )}
          </div>
          {/* Password Input */}
          <div className=" mb-2">
            <label className="label">
              <span className="label-text text-primary font-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Type your password"
              className="input input-bordered w-full rounded-md focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters or longer
              </p>
            )}
          </div>

          <Link
            to="/forget-password"
            className="text-sm text-accent mb-4 cursor-pointer hover:underline"
          >
            Forget Password?
          </Link>

          <button className="btn btn-secondary w-full rounded-md text-primary font-semibold mb-4">
            Register
          </button>

          <div className="text-sm text-accent text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-secondary hover:underline cursor-pointer"
            >
              Login Here
            </Link>
          </div>

          <div className="divider my-4">Or</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn w-full bg-base-200 hover:bg-base-300"
          >
            <FcGoogle className="text-xl mr-2" /> Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
