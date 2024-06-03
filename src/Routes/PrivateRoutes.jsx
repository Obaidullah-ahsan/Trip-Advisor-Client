import { Navigate, useLocation } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import useAuth from "../Hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PulseLoader color="#36d7b7" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;
