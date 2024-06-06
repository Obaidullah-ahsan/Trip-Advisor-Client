import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import moment from "moment";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { BiArrowBack } from "react-icons/bi";

const StoryDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data: story = [] } = useQuery({
    queryKey: ["storyDetails"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/story/${id}`);
      return data;
    },
  });
  const sharedUrl = "https://i.ibb.co/SPTJJjM/Greek-chicken-salad-recipe-6.jpg";
  return (
    <div className="mx-20 my-8">
      <div className="flex mt-5 items-center">
        <Link
          to="/"
          className="ml-5 flex gap-2 text-lg items-center font-semibold"
        >
          <BiArrowBack /> Back to Home
        </Link>
        <h2 className="text-4xl font-bold text-center mx-auto mb-6">
          All Stories
        </h2>
      </div>
      <div className="container flex flex-col mx-auto space-y-6 lg:h-[25rem] lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
              {story?.title}
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {story?.story}
            </p>
            <p className="mt-3 text-sm text-blue-500">
              {moment(story?.date).format("MMMM Do YYYY, h:mm:ss a")}
            </p>
            <div className="flex gap-5 my-2">
              <p className="font-semibold">Share: </p>
              <FacebookShareButton url={sharedUrl} quote="post Decsription">
                <FacebookIcon size={30} round={true} />
              </FacebookShareButton>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={story?.image}
            alt="glasses photo"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryDetails;
