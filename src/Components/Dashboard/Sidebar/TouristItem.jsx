import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TbBrandBooking } from "react-icons/tb";
import { FaList, FaUser } from "react-icons/fa";
import useRole from "../../../Hooks/useRole";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const TouristItem = () => {
  const axiosSecure = useAxiosSecure();
  const [role, , userId] = useRole();
  const handleBecomeGuide = () => {
    if (role === "tourist") {
      Swal.fire({
        title: "Are you sure?",
        text: "Please read all the terms & conditions before becoming a Guide.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Become A Guide!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/users/requestToBeGuide/${userId}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              toast.success("Success!, Request Submit Successfully");
            } else if (res.data.matchedCount > 0) {
              toast.success("Please!, Wait for admin approval👊");
            }
          });
        }
      });
    }
  };
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
        <button onClick={handleBecomeGuide}>
          <FaUser /> Become A Guide
        </button>
      </li>
    </div>
  );
};

export default TouristItem;
