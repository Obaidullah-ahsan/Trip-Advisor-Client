import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { PulseLoader } from "react-spinners";
import { Navigate } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  if (loading || isAdminLoading) {
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

export default AdminRoutes;
