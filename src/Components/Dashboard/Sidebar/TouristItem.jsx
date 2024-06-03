import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbBrandBooking } from "react-icons/tb";
import { FaList, FaUser } from "react-icons/fa";

const TouristItem = () => {
  return (
    <div>
      <li className="px-4">
        <NavLink
          to="/dashboard/myProfile"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          <CgProfile /> My Profile
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/dashboard/bookings"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          <TbBrandBooking /> My Bookings
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/dashboard/myWishlist"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          <FaList /> My Wishlist
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/dashboard/requestAdmin"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          <FaUser /> Request to Admin
        </NavLink>
      </li>
    </div>
  );
};

export default TouristItem;
