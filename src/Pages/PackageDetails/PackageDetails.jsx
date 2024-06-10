import { Link, useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { BiArrowBack } from "react-icons/bi";
import OurGuides from "../../Components/OurGuides/OurGuides";
import useAuth from "../../Hooks/useAuth";
import useGuide from "../../Hooks/useGuide";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const PackageDetails = () => {
  const [myValue, setMyValue] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const { user, loading } = useAuth();
  const { id } = useParams();
  const [guides] = useGuide();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const { data: packageDetails, isLoading ,isFetching} = useQuery({
    queryKey: ["package"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/packages/${id}`);
      return data;
    },
  });
  const handleSelectGuide = (e) => {
    setMyValue(e.target.value);
  };

  const handleBookings = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to Confirm your Booking?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirm",
      denyButtonText: `My Bookings`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const price = e.target.price.value;
        const bookingsItem = {
          tourist_name: user?.displayName,
          tourist_email: user?.email,
          tourist_image: user?.photoURL,
          tour_title: packageDetails?.tour_title,
          price,
          guide_name: myValue,
          date: startDate,
          status: "In Review",
        };
        axiosPublic.post("/bookings", bookingsItem).then((res) => {
          if (res.data.insertedId) {
            toast.success("Tout Booking Successfully");
          }
        });
      } else if (result.isDenied) {
        navigate("/");
      }
    });
  };
  if ((isLoading, loading, isFetching)) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  return (
    <div className="mx-20 my-8">
      <div className="flex items-center">
        <Link
          to="/"
          className="ml-5 hidden md:flex gap-2 text-lg items-center font-semibold"
        >
          <BiArrowBack /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-center mx-auto mb-6">
          Packages Details
        </h1>
      </div>
      <div className="flex flex-row gap-4 mt-6">
        <img className="w-[67%]" src={packageDetails?.image[0]}></img>
        <div className="w-[33%] flex flex-col gap-4">
          <img
            className="w-full"
            height="215"
            src={packageDetails?.image[1]}
          ></img>
          <img
            className="w-full"
            height="215"
            src={packageDetails?.image[2]}
          ></img>
        </div>
      </div>
      <div className="mt-12">
        <h1 className="text-2xl lg:text-3xl font-bold mb-5">About The Tour</h1>
        <h2 className="text-xl font-semibold mb-2">
          Tour Title : {packageDetails?.tour_title}
        </h2>
        <p className="text-gray-500 font-semibold mb-2">
          About : {packageDetails?.about}
        </p>
        <p className="text-gray-500 font-semibold mb-2">
          Tour Type : {packageDetails?.tour_type}
        </p>
        <p className="text-gray-500 font-semibold mb-2">
          Price : {packageDetails?.price}
        </p>
      </div>
      <div>
        <h2 className="text-2xl mt-12 font-bold text-gray-800 capitalize lg:text-3xl dark:text-white">
          All tour guides
        </h2>
        <OurGuides></OurGuides>
      </div>
      <div className="p-12 my-12 bg-base-200">
        <h1 className="text-4xl font-bold mb-8">Booking Tour</h1>
        <form
          onSubmit={handleBookings}
          className="container flex flex-col mx-auto space-y-12"
        >
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="text-base font-semibold">Tourist Name</label>
              <input
                disabled
                defaultValue={user?.displayName}
                type="text"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-base font-semibold">Tourist Email</label>
              <input
                disabled
                defaultValue={user?.email}
                type="text"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-base font-semibold">Image</label>
              <input
                type="text"
                disabled
                defaultValue={user?.photoURL}
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="text-base font-semibold">Title</label>
              <input
                defaultValue={packageDetails?.tour_title}
                disabled
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-base font-semibold">Price</label>
              <input
                type="number"
                name="price"
                required
                defaultValue={packageDetails?.price}
                placeholder="Enter Price"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label className="text-base font-semibold">
                <div className="label py-[2px]">
                  <span className="label-text">Guide Name</span>
                </div>
                <select
                  onChange={handleSelectGuide}
                  defaultValue={"DEFAULT"}
                  className="select min-h-10 h-10 mt-1 select-bordered w-full"
                >
                  <option value="DEFAULT" disabled>
                    Select Guide
                  </option>
                  {guides?.map((guide) => (
                    <option key={guide._id} value={guide.name}>
                      {guide.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="col-span-full sm:col-span-2 flex flex-col">
              <label className="text-base font-semibold">Date</label>
              <DatePicker
                className="min-h-10 h-10 px-4 mt-1 w-full rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="col-span-full mt-3">
              <button
                className={`${
                  !user && "btn-disabled"
                } btn w-full bg-[#43BA7F] text-base font-semibold text-white rounded-md`}
              >
                Book Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;
