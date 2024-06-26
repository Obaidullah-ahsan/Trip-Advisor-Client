import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/traveler.svg";
import GoogleLogin from "../../Components/Shared/GoogleLogin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Login = () => {
  const { loginUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const userInfo = {
          email,
          name: result.user.displayName,
          status: "Verified",
          role: "tourist",
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        Swal.fire({
          title: "Success!",
          text: "User Login Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location?.state ? location.state : "/");
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          title: "Error!",
          text: error.code.slice(5, 50),
          icon: "error",
          confirmButtonText: "Try again",
        });
      });
  };
  return (
    <div className="flex w-full my-12 max-w-sm mx-auto overflow-hidden bg-base-100 rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-5xl">
      <div className="hidden mx-6 lg:flex justify-center lg:w-[45%]">
        <img src={logo} alt="" />
      </div>

      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <h2 className="text-center mx-auto text-2xl font-bold">Login Now!</h2>
        <form onSubmit={handleLogin}>
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Email Address
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Password
            </label>

            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              placeholder="Enter your password"
              name="password"
              required
            />
          </div>
          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
              Sign In
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
            or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>
        <GoogleLogin></GoogleLogin>
        <p className="mt-8 text-xs font-light text-center text-gray-400">
          {" "}
          Dont have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
