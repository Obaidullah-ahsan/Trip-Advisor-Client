import { FacebookIcon, FacebookShareButton } from "react-share";
import useLoadStory from "../../../Hooks/useLoadStory";

const TouristStory = () => {
  const [allStory] = useLoadStory();
  console.log(allStory);
  const sharedUrl = "https://i.ibb.co/SPTJJjM/Greek-chicken-salad-recipe-6.jpg";
  return (
    <div>
      <FacebookShareButton url={sharedUrl} quote="post Decsription">
        <FacebookIcon />
      </FacebookShareButton>
    </div>
  );
};

export default TouristStory;
