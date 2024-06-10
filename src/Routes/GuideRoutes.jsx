import useRole from "../Hooks/useRole";
import useAuth from "../Hooks/useAuth";
import { PulseLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

const GuideRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, , , isLoading] = useRole();
  const isAdmin = role === "guide";
  if (loading || isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <PulseLoader color="#36d7b7" />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default GuideRoutes;
