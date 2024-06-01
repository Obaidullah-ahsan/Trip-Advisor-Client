import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Success",
          text: "User Login Successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location?.state ? location.state : "/");
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
    <div>
      <button
        onClick={handleGoogleLogin}
        type="button"
        className="flex btn btn-outline items-center mt-4 justify-center w-full px-6 mx-2 text-sm font-medium transition-colors duration-300 transform rounded-lg"
      >
        <FaGoogle size={18} />
        <span className="mx-2">Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;
