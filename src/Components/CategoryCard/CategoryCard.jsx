import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {
  const { label, icon: Icon } = item;
  return (
    <Link
      to={`/categoryBasePackages/${label}`}
      className={`flex 
    flex-col 
    items-center 
    justify-center 
    gap-2
    p-3
    border-b-2
   hover:text-neutral-800
    transition
    cursor-pointer `}
    >
      <Icon color="#1DAEFF" size={56} />
      <div className="text-sm font-semibold">{label}</div>
    </Link>
  );
};

export default CategoryCard;
