import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import moment from "moment";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/bookings/${user?.email}`);
      return data;
    },
  });
  const handleBookingsDelete = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/deleteBookings/${id}`).then((deleteRes) => {
            if (deleteRes.data.deletedCount) {
              toast.success("Booking Cancel Successfully");
              refetch();
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };
  return (
    <div>
      <div className="p-2">
        <h2 className="text-3xl font-semibold">
          My Bookings: {bookings.length}
        </h2>
        <div className="overflow-x-auto mt-4">
          <table className="table rounded-xl">
            {/* head */}
            <thead className="bg-blue-400 text-white">
              <tr>
                <th>#</th>
                <th>Package Name</th>
                <th>Guide Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((item, idx) => (
                <tr key={item._id}>
                  <th>
                    <p>{idx + 1}</p>
                  </th>
                  <td>
                    <h2 className="font-bold">{item?.tour_title}</h2>
                  </td>
                  <td>
                    <p className="font-bold">{item?.guide_name}</p>
                  </td>
                  <td>
                    <p className="font-bold">{item?.price}</p>
                  </td>
                  <td>
                    <p className="font-bold">
                      {moment(item?.date).format("YYYY/MM/DD")}
                    </p>
                  </td>
                  <td>
                    <p className="font-bold">{item?.status}</p>
                  </td>
                  <td>
                    <button
                      className={`btn btn-sm ${
                        item?.status === "In Review" && "btn-disabled"
                      }`}
                    >
                      Pay
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleBookingsDelete(item?._id)}
                      className={`btn btn-sm ${
                        item?.status === "Accepted" && "btn-disabled"
                      }`}
                    >
                      Cancel
                    </button>
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

export default MyBookings;
