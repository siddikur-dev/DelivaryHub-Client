import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import Spinner from "./shared/Spinner";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const { user, createUser, googleSignIn, setUser, updateUser } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [imageFile, setImageFile] = useState(null); // FIXED: file state
  const [showPassword, setShowPassword] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [errors, setErrors] = useState({});

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  // Password validations
  const validation = {
    length: form.password.length >= 6,
    lowerUpper: /(?=.*[a-z])(?=.*[A-Z])/.test(form.password),
    numberOrSymbol: /(?=.*[0-9])|(?=.*[^A-Za-z0-9])/.test(form.password),
    emailNotIncluded: !form.password.includes(form.email.split("@")[0] || ""),
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // SIGN UP PROCESS
  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!imageFile) {
      setErrors((prev) => ({ ...prev, photo: "Photo is required." }));
      return;
    }

    try {
      // 1. Firebase create user
      const result = await createUser(form.email, form.password);

      // 2. Upload image to imgbb
      const formData = new FormData();
      formData.append("image", imageFile);
      // const image_api_url = `https://api.imgbb.com/1/upload?${import.meta.env.}`;
      const res = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`,
        formData
      );

      const imageUrl = res.data.data.url;
      console.log(imageUrl);

      // 3. Update Firebase user
      await updateUser({
        displayName: form.name,
        photoURL: imageUrl,
      });

      Swal.fire({
        icon: "success",
        title: "Account created successfully!",
        timer: 1500,
        showConfirmButton: false,
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(({ user: currentUser }) => {
        setUser({
          email: currentUser.email,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        });

        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Sign Up Success!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message,
        });
      });
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  if (user) return <Spinner />;

  return (
    <div className="py-20 px-12">
      <div className="w-full border-2 p-6 rounded-xl border-secondary/30 shadow-md">
        <h2 className="text-3xl text-primary font-bold mb-6 text-center">
          Sign Up
        </h2>

        <form onSubmit={handleRegistration} className="space-y-4">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text text-primary font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="input input-bordered w-full rounded-3xl"
            />
            {errors.name && (
              <p className="text-red-600 text-xs">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-primary font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="input input-bordered w-full rounded-3xl"
            />
            {errors.email && (
              <p className="text-red-600 text-xs">{errors.email}</p>
            )}
          </div>

          {/* Photo Upload */}
          <div>
            <label className="label">
              <span className="label-text text-primary font-medium">
                Profile Photo
              </span>
            </label>
            <input
              type="file"
              name="photo"
              onChange={(e) => setImageFile(e.target.files[0])}
              className="file-input w-full rounded-3xl"
            />
            {errors.photo && (
              <p className="text-red-600 text-xs">{errors.photo}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text text-primary font-medium">
                Password
              </span>
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                onFocus={() => setShowValidation(true)}
                className="input input-bordered w-full rounded-3xl"
              />

              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 inset-y-0 flex items-center text-secondary"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-600 text-xs">{errors.password}</p>
            )}
          </div>

          {/* Password validation */}
          {showValidation && (
            <ul className="text-sm mt-2 space-y-1">
              <li
                className={
                  validation.length ? "text-green-600" : "text-red-600"
                }
              >
                {validation.length ? "✔" : "✘"} At least 6 characters
              </li>
              <li
                className={
                  validation.lowerUpper ? "text-green-600" : "text-red-600"
                }
              >
                {validation.lowerUpper ? "✔" : "✘"} Lower & Upper case
              </li>
              <li
                className={
                  validation.numberOrSymbol ? "text-green-600" : "text-red-600"
                }
              >
                {validation.numberOrSymbol ? "✔" : "✘"} Number or symbol
              </li>
              <li
                className={
                  validation.emailNotIncluded
                    ? "text-green-600"
                    : "text-red-600"
                }
              >
                {validation.emailNotIncluded ? "✔" : "✘"} Not your email part
              </li>
            </ul>
          )}

          <button
            type="submit"
            className="btn btn-secondary text-white w-full rounded-3xl"
          >
            Sign Up
          </button>
        </form>

        <div className="divider">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline border-secondary w-full rounded-3xl"
        >
          <FcGoogle /> Continue with Google
        </button>

        <p className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-secondary font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
