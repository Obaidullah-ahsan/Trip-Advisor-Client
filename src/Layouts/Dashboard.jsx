import { Link, Outlet } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
import TouristItem from "../Components/Dashboard/Sidebar/TouristItem";
import AdminItem from "../Components/Dashboard/Sidebar/AdminItem";
import GuideItem from "../Components/Dashboard/Sidebar/GuideItem";
import useRole from "../Hooks/useRole";
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
  //   const { user } = useAuth();

  const [role] = useRole();
  return (
    <div className="flex">
      <div className="drawer lg:w-64 lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {role === "tourist" && <TouristItem></TouristItem>}
            {role === "admin" && <AdminItem></AdminItem>}
            {role === "guide" && <GuideItem></GuideItem>}
            <div className="divider"></div>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 p-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
