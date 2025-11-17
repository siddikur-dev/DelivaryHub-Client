import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUser, googleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const from = location.state?.from || "/";
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          icon: "Success",
          title: "Logged In Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //signin with google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          icon: "success",
          title: "Logged In Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from);
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
              to="/auth/signup"
              className="text-secondary hover:underline cursor-pointer"
            >
              Register
            </Link>
          </div>

          <div className="divider my-4">Or</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline hover:bg-secondary/15 border-secondary w-full rounded-3xl"
          >
            <FcGoogle />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
