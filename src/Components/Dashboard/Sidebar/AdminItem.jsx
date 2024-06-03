import { CgProfile } from "react-icons/cg";
import { RiPlayListAddLine } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const AdminItem = () => {
  return (
    <div>
      <li className="px-4">
        <NavLink
          to="/dashboard/adminProfile"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          <CgProfile /> Admin Profile
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/dashboard/addPackage"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          <RiPlayListAddLine /> Add Package
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/dashboard/manageUsers"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          <FaUsers /> Manage Users
        </NavLink>
      </li>
    </div>
  );
};

export default AdminItem;
