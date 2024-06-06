import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import StoryCard from "../../Components/Shared/StoryCard";
import useLoadStory from "../../Hooks/useLoadStory";

const AllStory = () => {
  const [allStory] = useLoadStory();
  return (
    <div className="mx-20 my-12">
      <div className="flex items-center">
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {allStory?.map((storyItem) => (
          <StoryCard storyItem={storyItem} key={storyItem._id}></StoryCard>
        ))}
      </div>
    </div>
  );
};

export default AllStory;
