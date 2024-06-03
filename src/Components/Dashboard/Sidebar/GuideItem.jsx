import { CgProfile } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const GuideItem = () => {
  return (
    <div>
      <li className="px-4">
        <NavLink
          to="/dashboard/guideProfile"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          <CgProfile /> Guide Profile
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/dashboard/GuideAssignedTours"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          <FaList />
          My Assigned Tours
        </NavLink>
      </li>
    </div>
  );
};

export default GuideItem;
