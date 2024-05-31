import { RiMenuUnfoldFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="px-4">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/community"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          Community
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/blogs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          Blogs
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="px-4">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "border-b-2 border-[#FF9051]"
              : ""
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="mx-4">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RiMenuUnfoldFill size={20} />
            </div>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img
            src="https://i.ibb.co/4g4PpPx/Blue-and-Orange-Travel-Agency-Logo.png"
            className="h-10 max-w-56"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 font-semibold">{navLinks}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          <a className="btn min-h-10 h-10 btn-outline text-[#FF9051]">Login</a>
          <a className="btn min-h-10 h-10 btn-outline text-[#FF9051]">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
