import { FaSkiing } from "react-icons/fa";
import { GiBoatFishing, GiCaveEntrance, GiParkBench } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain } from "react-icons/tb";
import CategoryCard from "../../../Components/CategoryCard/CategoryCard";

const TourTypes = () => {
  const category = [
    {
      label: "Beach",
      icon: TbBeach,
    },
    {
      label: "Luxury",
      icon: MdOutlineVilla,
    },
    {
      label: "Lake",
      icon: GiBoatFishing,
    },
    {
      label: "Wildlife",
      icon: TbMountain,
    },
    {
      label: "Adventure",
      icon: FaSkiing,
    },
    {
      label: "Cultural",
      icon: GiCaveEntrance,
    },
    {
      label: "Eco-tourism",
      icon: GiParkBench,
    },
  ];

  return (
    <div className="mx-20 mb-12 bg-base-200 p-6">
      <h2 className="text-4xl mb-8 font-bold">Select Type for Traveling</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {
            category.map((item,idx)=> <CategoryCard item={item} key={idx}></CategoryCard>)
        }
      </div>
    </div>
  );
};

export default TourTypes;
