import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  return (
    <div>
      <button
        // onClick={handleGoogleLogin}
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
