import moment from "moment/moment";
import { Link } from "react-router-dom";

const StoryCard = ({ storyItem }) => {
  const { _id, title, image, story, date } = storyItem;
  return (
    <Link to={`/storydetails/${_id}`}>
      <img
        className="relative z-10 object-cover w-full rounded-md h-60"
        src={image}
        alt=""
      />

      <div className="relative z-20 h-64 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
        <p className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
          {title}
        </p>

        <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
          {story.slice(0, 110)}...Read More
        </p>

        <p className="mt-3 text-sm text-blue-500">
          {date && moment(date).format("MMMM Do YYYY, h:mm:ss a")}
        </p>
      </div>
    </Link>
  );
};

export default StoryCard;
