import useLoadStory from "../../../Hooks/useLoadStory";
import StoryCard from "../../../Components/Shared/StoryCard";
import { Link } from "react-router-dom";

const TouristStory = () => {
  const [stories, isLoading] = useLoadStory();
  console.log(stories, isLoading);
  return (
    <div className="mx-20 mt-20 mb-12">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Tourist Shered Story
        </h1>

        <p className="max-w-lg mt-4 text-gray-500">
          We believe that every journey holds a unique story waiting to be told.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-4">
        {stories?.slice(0, 4).map((storyItem) => (
          <StoryCard storyItem={storyItem} key={storyItem._id}></StoryCard>
        ))}
      </div>
      <div className="flex justify-center w-full mt-10">
        <Link to="/allstories" className="btn btn-outline text-[#FF9051]">
          All Stories
        </Link>
      </div>
    </div>
  );
};

export default TouristStory;
