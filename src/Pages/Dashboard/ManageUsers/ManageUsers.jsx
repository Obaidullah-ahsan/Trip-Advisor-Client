import { FaUsers } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  return (
    <div className="p-8">
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
                  {user?.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      //   onClick={() => handleMakeAdmin(user)}
                      className="btn bg-[#D1A054] btn-sm"
                    >
                      <FaUsers color="white" size={25} />
                    </button>
                  )}
                </td>
                <th>
                  <button
                    // onClick={() => handleDeleteUser(user)}
                    className="btn bg-[#B91C1C] btn-sm"
                  >
                    <MdDeleteForever color="white" size={25} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
