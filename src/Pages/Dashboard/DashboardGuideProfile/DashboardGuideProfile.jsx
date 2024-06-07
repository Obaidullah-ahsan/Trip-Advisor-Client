import toast from "react-hot-toast";
import { useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";
import { useForm } from "react-hook-form";
import { FaIdBadge } from "react-icons/fa";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const DashboardGuideProfile = () => {
  const [shereLoading, setShereLoading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [role] = useRole();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    setShereLoading(true);
    const imageFile = data.image[0];
    const formData = new FormData();
    formData.append("image", imageFile);
    const res = await axiosPublic.post(image_hosting_api, formData);
    if (res.data.success) {
      const storyItem = {
        title: data?.title,
        story: data?.story,
        image: res.data.data.display_url,
        creator_email: user?.email,
        date: new Date(),
      };
      const storyRes = await axiosSecure.post("/story", storyItem);
      if (storyRes.data.insertedId) {
        toast.success("Story Shered Successfully");
        reset();
        setShereLoading(false);
      }
    }
  };
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900">
      <div className="px-6 py-6 mx-auto">
        <div className="lg:flex lg:flex-row-reverse lg:items-center">
          <div className="lg:w-[70%] lg:mx-10">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl">
              Adding a guide’s profile
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Phone
                </label>
                <input
                  {...register("number", { required: true })}
                  type="number"
                  placeholder="Contact number"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Education
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Education"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Skills
                </label>
                <div className="flex gap-2">
                  <input
                    {...register("skill_1", { required: true })}
                    type="text"
                    placeholder="Skill 1"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <input
                    {...register("skill_2", { required: true })}
                    type="text"
                    placeholder="Skill 2"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="flex-1">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Work experience
                </label>
                <input
                  {...register("company", { required: true })}
                  type="text"
                  placeholder="Company"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <div className="flex gap-2">
                  <input
                    {...register("position", { required: true })}
                    type="text"
                    placeholder="Position"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                  <input
                    {...register("duration", { required: true })}
                    type="text"
                    placeholder="Duration"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <button
                className={`${
                  shereLoading === true && "btn-disabled"
                } w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50`}
              >
                Share
              </button>
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-[30%] lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-60 h-60"
              src={user?.photoURL}
              alt=""
            />

            <div className="mt-6 space-y-8 md:mt-8">
              <h2 className="text-2xl font-semibold mb-1">
                {user.displayName}
              </h2>
              <span className="text-sm uppercase dark:text-gray-600">
                <div className="badge badge-accent">{role}</div>
              </span>
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  {user.email}
                </span>
              </p>
              <p className="flex items-start -mx-2">
                <FaIdBadge className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  {user.uid}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardGuideProfile;
