import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const { user, logout } = useAuth();
  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
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
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div className="flex items-center border-2 rounded-2xl">
                <MdMenu
                  tabIndex={0}
                  size={20}
                />
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="User"
                      src={user?.photoURL}
                    />
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
              >
                <li>
                  <div className="flex flex-col gap-1">
                    <div className="avatar">
                      <div className="w-20 rounded">
                        <img
                          src={user?.photoURL}
                          alt="Tailwind-CSS-Avatar-component"
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{user?.displayName}</h3>
                    <p className="font-medium">{user?.email}</p>
                  </div>
                </li>
                <li>
                  <Link
                    to="/dashboard/myProfile"
                    className="btn btn-outline text-[#FF9051] mt-1 min-h-8 h-8"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    className="btn btn-outline text-[#FF9051] mt-1 min-h-8 h-8"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="btn min-h-10 h-10 btn-outline text-[#FF9051]"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn min-h-10 h-10 btn-outline text-[#FF9051]"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
