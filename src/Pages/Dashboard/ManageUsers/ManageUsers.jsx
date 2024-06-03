import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [changeRoleLoading, setChangeRoleLoading] = useState(false);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
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
  return (
    <div className="p-2">
      <h2 className="text-3xl font-semibold">Total Users: {users.length}</h2>
      <div className="overflow-x-auto mt-4">
        <table className="table rounded-xl">
          {/* head */}
          <thead className="bg-[#D1A054]">
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
                      className={`btn bg-[#D1A054] btn-sm ${
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
                      className={`btn bg-[#D1A054] btn-sm ${
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
