import { Link, Outlet } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
import TouristItem from "../Components/Dashboard/Sidebar/TouristItem";
import AdminItem from "../Components/Dashboard/Sidebar/AdminItem";
import GuideItem from "../Components/Dashboard/Sidebar/GuideItem";
import useRole from "../Hooks/useRole";
import { FaHome } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const Dashboard = () => {
  const [role] = useRole();
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="drawer z-50 lg:w-64 lg:drawer-open lg:sticky justify-end min-h-12 h-12">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mr-8 my-3">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="drawer-button lg:hidden">
            <MdMenu size={25} />
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
