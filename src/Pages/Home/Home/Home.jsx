import Banner from "../Banner/Banner";
import TourTypes from "../TourTypes/TourTypes";
import TouristStory from "../TouristStory/TouristStory";
import TravelGuide from "../TravelGuide/TravelGuide";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TravelGuide></TravelGuide>
      <TourTypes></TourTypes>
      <TouristStory></TouristStory>
    </div>
  );
};

export default Home;
