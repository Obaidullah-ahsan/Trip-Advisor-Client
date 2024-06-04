import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const MyWishlist = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: wishlist = [], refetch } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/wishlist/${user?.email}`);
      return data;
    },
  });

  const handleWishlistDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/wishlist/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            toast.success("Wishlist Delete Successfully");
            refetch();
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="p-2">
        <h2 className="text-3xl font-semibold">Wishlist: {wishlist.length}</h2>
        <div className="overflow-x-auto mt-4">
          <table className="table rounded-xl">
            {/* head */}
            <thead className="bg-blue-400 text-white">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Type</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist?.map((item, idx) => (
                <tr key={item._id}>
                  <th>
                    <p>{idx + 1}</p>
                  </th>
                  <td>
                    <h2 className="font-bold">{item?.tour_title}</h2>
                  </td>
                  <td>
                    <p className="font-bold">{item?.tour_type}</p>
                  </td>
                  <td>
                    <p className="font-bold">{item?.price}</p>
                  </td>
                  <td>
                    <button
                      onClick={() => handleWishlistDelete(item?._id)}
                      className="btn btn-sm"
                    >
                      <MdDeleteForever color="red" size={18} />
                    </button>
                  </td>
                  <td>
                    <Link
                      to={`/packagedetails/${item.packageId}`}
                      className="card-actions"
                    >
                      <button className="btn btn-outline btn-sm">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyWishlist;
