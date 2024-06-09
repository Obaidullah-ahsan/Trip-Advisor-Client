import { MdLocationOn } from "react-icons/md";
import { FaRegCalendarAlt, FaSearch } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="h-[500px]  lg:h-[630px] banner-bg-sm md:banner-bg flex items-center">
      <div className="flex flex-col justify-center h-full max-w-xl md lg:max-w-3xl max-h-[400px]  lg:max-h-[450px] p-10 lg:p-20 mr-10 bg-base-100 bg-opacity-30">
        <h2 className="text-3xl md:text-5xl font-bold md:leading-[60px] mb-3">
          <span className="text-6xl md:text-[80px]">Discover</span>
          <br />
          New Destination
        </h2>
        <p>
          Discover the world like never before with Trip Advisor, your go-to
          travel guide for unforgettable adventures.Trip Advisor ensures you
          have all the information you need to explore with confidence and
          excitement.
        </p>
        <div className="bg-white md:flex items-center gap-3 p-2 max-w-lg my-8 hidden">
          <div className="flex-1">
            <label className="flex items-center gap-1 mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              <MdLocationOn color="#FF9051" size={20} /> Location
            </label>
            <input
              className="block w-full px-4 py-2 text-gray-700 bg-white dark:bg-gray-800 "
              type="text"
              disabled
              placeholder="Location"
            />
          </div>
          <div className="flex-1">
            <label className="flex items-center gap-1 mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              <FaRegCalendarAlt color="#FF9051" size={20} /> Date
            </label>
            <input
              disabled
              className="w-full px-4 py-2 text-gray-700 bg-white dark:bg-gray-800"
              type="date"
            />
          </div>
          <button className="btn disabled rounded-none bg-[#001F3E] h-full px-7">
            <FaSearch color="white" size={25} />
          </button>
        </div>
        <p className="font-medium text-gray-600">
          <span className="font-bold text-black">Populer Search</span> : Cox
          bazar,
          <span className="text-[#d17946]"> Bandarban</span>, Sajek, Saint
          Martine
        </p>
      </div>
    </div>
  );
};

export default Banner;
