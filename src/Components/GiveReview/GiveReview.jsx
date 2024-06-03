import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";

const GiveReview = ({ guide }) => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const axiosSecure = useAxiosSecure();
  const handleReview = async (e) => {
    e.preventDefault();
    const comment = e.target.comment.value;
    const review = {
      traveler_Name: user?.displayName,
      rating,
      comment,
      guide_email: guide?.contact_details?.email,
    };
    console.log(review);
    const res = await axiosSecure.post("/reviews", review);
    if (res.data.insertedId) {
      toast.success("Give Review Successfully");
    }
  };
  return (
    <div className="mb-12 px-6">
      <h2 className="text-4xl font-bold text-center mx-auto mb-6">
        Give Review
      </h2>
      <section className="flex flex-col mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-60">
        <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
          <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">
              Please Give Me{" "}
              <span className="text-blue-600 dark:text-blue-400 md:text-blue-300">
                Ratings
              </span>{" "}
            </h2>

            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">
              At Trip Advisor, we pride ourselves on providing unforgettable
              travel experiences.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
          <form onSubmit={handleReview}>
            <div>
              <label className="block ml-1 mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Star Rating
              </label>
              <Rating
                style={{ maxWidth: 150 }}
                value={rating}
                onChange={setRating}
              />
            </div>
            <div className="p-1.5">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Comment
              </label>
              <textarea
                className="textarea w-[300px] textarea-bordered"
                placeholder="Comment"
                name="comment"
              ></textarea>
            </div>
            <button className="btn ml-1">Submit</button>
            <Toaster />
          </form>
        </div>
      </section>
    </div>
  );
};

export default GiveReview;
