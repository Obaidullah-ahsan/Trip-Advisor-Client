import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Select from "react-select";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddPackage = () => {
  const [select, setSelect] = useState("");
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const options = [
    { value: "Beach", label: "Beach" },
    { value: "Luxury", label: "Luxury" },
    { value: "Lake", label: "Lake" },
    { value: "Wildlife", label: "Wildlife" },
    { value: "Adventure", label: "Adventure" },
    { value: "Cultural", label: "Cultural" },
    { value: "Eco-tourism", label: "Eco-tourism" },
  ];

  const handleSelect = (e) => {
    setSelect(e.value);
  };
  const onSubmit = async (data) => {
    const formData1 = new FormData();
    formData1.append("image", data.image1[0]);
    const formData2 = new FormData();
    formData2.append("image", data.image2[0]);
    const formData3 = new FormData();
    formData3.append("image", data.image3[0]);
    const res1 = await axiosPublic.post(image_hosting_api, formData1);
    const res2 = await axiosPublic.post(image_hosting_api, formData2);
    const res3 = await axiosPublic.post(image_hosting_api, formData3);
    if (res1.data.success && res2.data.success && res3.data.success) {
      const packageItem = {
        tour_title: data?.title,
        about: data?.about,
        price: parseFloat(data?.price),
        tour_type: select,
        image: [
          res1.data.data.display_url,
          res2.data.data.display_url,
          res3.data.data.display_url,
        ],
        tour_plan: [data?.day1, data?.day2, data?.day3],
      };
      const packageRes = await axiosSecure.post("/packages", packageItem);
      if (packageRes.data.insertedId) {
        toast.success("Package Added Successfully");
        reset();
        // setShereLoading(false);
      }
    }
  };
  return (
    <div className="mx-4 md:mx-8 lg:mx-12">
      <h2 className="text-2xl lg:mt-12 font-bold text-gray-800 capitalize lg:text-3xl dark:text-white">
        Add Package
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
        <div className="flex-1">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Title
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Enter title"
            className="block w-full px-5 py-[7px] mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex flex-col lg:flex-row mt-3 gap-5">
          <div className="flex-1">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Price
            </label>
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Enter price"
              className="block w-full px-5 py-[7px] mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Tour Type
            </label>
            <Select onChange={handleSelect} options={options} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="mt-4 md:mt-3">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Image-1
            </label>
            <input
              type="file"
              {...register("image1", { required: true })}
              className="file-input file-input-bordered w-full"
            />
          </div>

          <div className="mt-4 md:mt-3">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Image-2
            </label>
            <input
              type="file"
              {...register("image2", { required: true })}
              className="file-input file-input-bordered w-full"
            />
          </div>

          <div className="mt-4 md:mt-3">
            <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
              Image-3
            </label>
            <input
              type="file"
              {...register("image3")}
              className="file-input file-input-bordered w-full"
            />
          </div>
        </div>

        <div className="w-full mt-4">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            About
          </label>
          <textarea
            {...register("about", { required: true })}
            className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-32 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="About"
          ></textarea>
        </div>
        <div className="flex-1 mt-2">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Day 1 Tour plan
          </label>
          <input
            {...register("day1")}
            type="text"
            placeholder="Day 1"
            className="block w-full px-5 py-[7px] mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex-1 mt-2">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Day 2 Tour plan
          </label>
          <input
            {...register("day2")}
            type="text"
            placeholder="Day 2"
            className="block w-full px-5 py-[7px] mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
        <div className="flex-1 mt-2">
          <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
            Day 3 Tour plan
          </label>
          <input
            {...register("day3")}
            type="text"
            placeholder="Day 3"
            className="block w-full px-5 py-[7px] mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <button
          className={`w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}
        >
          Share
        </button>
      </form>
      {/* <div>
        <h2 className="text-2xl mt-12 font-bold text-gray-800 capitalize lg:text-3xl dark:text-white">
          All tour guides
        </h2>
        <OurGuides></OurGuides>
      </div> */}
    </div>
  );
};

export default AddPackage;
