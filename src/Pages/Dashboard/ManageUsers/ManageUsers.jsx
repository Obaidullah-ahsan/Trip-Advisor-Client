import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import Select from "react-select";

const ManageUsers = () => {
  const [changeRoleLoading, setChangeRoleLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users", filter, search],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/users?filter=${filter}&search=${search}`
      );
      return res.data;
    },
  });
  const handleMakeAdmin = (user, role) => {
    setChangeRoleLoading(true);
    Swal.fire({
      title: "Are you sure?",
      text: "Change User Role!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, Make ${role}!`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/changeRole/${user._id}`, { role })
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount) {
              Swal.fire({
                title: "Updated!",
                text: "User Role has been Updated.",
                icon: "success",
              });
              refetch();
            }
          });
      }
    });
    setChangeRoleLoading(false);
  };
  const options = [
    { value: "admin", label: "Admin" },
    { value: "guide", label: "Guide" },
    { value: "tourist", label: "Tourist" },
  ];

  const handleSelect = (e) => {
    setFilter(e.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };
  return (
    <div className="p-2">
      <h2 className="text-3xl font-semibold mb-4">Manage Users</h2>
      <div className="flex items-center justify-evenly">
        <div className="max-w-80 flex-1">
          <Select onChange={handleSelect} options={options} />
        </div>
        <form onSubmit={handleSearch}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-1 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              name="roleSearch"
              placeholder="Enter Role"
            />

            <button className="px-1 md:px-4 py-1 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="table rounded-xl">
          {/* head */}
          <thead className="bg-blue-400 text-white">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, idx) => (
              <tr key={user._id}>
                <th>
                  <p>{idx + 1}</p>
                </th>
                <td>
                  <h2 className="font-bold">{user.name}</h2>
                </td>
                <td>
                  <p className="font-bold">{user.email}</p>
                </td>
                <td>
                  <p className="font-bold">{user.role}</p>
                </td>
                <td>
                  {user?.status === "Verified" ? (
                    <p className="font-bold">{user.status}</p>
                  ) : (
                    <p className="font-bold">Wants to be Guide</p>
                  )}
                </td>
                <td>
                  {user?.role === "admin" ? (
                    <div className="badge text-green-500 badge-outline">
                      Admin
                    </div>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user, "admin")}
                      className={`btn btn-outline btn-sm ${
                        changeRoleLoading && "disabled"
                      }`}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user?.role === "guide" ? (
                    <div className="badge text-[#D1A054] badge-outline">
                      Guide
                    </div>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user, "guide")}
                      className={`btn btn-outline btn-sm ${
                        changeRoleLoading && "disabled"
                      }`}
                    >
                      Make Guide
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
