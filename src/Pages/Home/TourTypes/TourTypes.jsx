import { FaSkiing } from "react-icons/fa";
import { GiBoatFishing, GiCaveEntrance, GiParkBench } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain } from "react-icons/tb";
import CategoryCard from "../../../Components/CategoryCard/CategoryCard";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="md:mx-8 lg:mx-20 mb-12 bg-base-200 p-6"
    >
      <h2 className="text-2xl lg:text-4xl mb-8 font-bold">
        Select Type for Traveling
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
        {category.map((item, idx) => (
          <CategoryCard item={item} key={idx}></CategoryCard>
        ))}
      </div>
    </motion.div>
  );
};

export default TourTypes;
