import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {
  const { loginUser, googleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();
  const axiosInstance = useAxiosSecure();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged In Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const authErrorMessages = {
          "auth/invalid-credential": "Wrong email or password.",
          "auth/user-not-found": "User does not exist.",
          "auth/wrong-password": "Wrong password.",
          "auth/invalid-email": "Invalid email format.",
          "auth/missing-password": "Please enter your password.",
          "auth/too-many-requests": "Too many attempts. Try again later.",
        };

        const message =
          authErrorMessages[error.code] || "Something went wrong. Try again.";

        Swal.fire({
          icon: "error",
          title: "Login Failed!",
          text: message,
          timer: 2500,
        });
      });
  };

  //signin with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        // console.log(result.user);

        // create user in the database
        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };

        axiosInstance.post("/users", userInfo).then((res) => {
          // console.log("user data has been stored", res.data);
          navigate(location.state || "/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" py-20 px-12">
      <div className="border-secondary/30 shadow-md border-2 p-10 ">
        <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
        <p className="text-sm text-accent mb-6">Login with Profast</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div className=" mb-4">
            <label className="label">
              <span className="label-text text-primary font-medium">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
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
              className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
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

          <button className="btn btn-secondary text-white w-full rounded-3xl mt-4">
            Continue
          </button>

          <div className="text-sm text-accent text-center">
            Don't have any account?{" "}
            <Link
              state={location.state}
              to="/auth/signup"
              className="text-secondary hover:underline cursor-pointer"
            >
              Register
            </Link>
          </div>

          <div className="divider my-4">Or</div>

        </form>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline hover:bg-secondary/15 border-secondary w-full rounded-3xl"
        >
          <FcGoogle />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
