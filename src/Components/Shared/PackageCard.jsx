import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const PackageCard = ({ pac }) => {
  const { user } = useAuth();
  const { _id, image, tour_type, tour_title, price } = pac;
  const axiosPublic = useAxiosPublic();
  const handleWishlist = () => {
    const wishlist = {
      packageId: _id,
      tour_title,
      tour_type,
      price,
      email: user?.email,
    };
    axiosPublic.post("/wishlist", wishlist).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Trip added to the wishlist");
      }
    });
  };
  return (
    <div className="card card-compact rounded-md bg-base-100 hover:shadow-xl p-3">
      <figure>
        <img className="max-h-40 w-full relative" src={image} alt="Shoes" />
        <button
          onClick={handleWishlist}
          className="rounded-full absolute right-6 top-6 p-2 bg-slate-100"
        >
          <FaRegHeart color="#FF9051" size={20} />
        </button>
      </figure>
      <div className="p-1">
        <p className="text-gray-500">{tour_type}</p>
        <h2 className="text-lg font-semibold my-2 leading-6">{tour_title}</h2>
        <h3 className="text-[#001F3E] font-bold text-lg mb-3">
          From ${price}/
          <span className="text-gray-600 font-normal text-sm">Person</span>
        </h3>
        <Link to={`/packagedetails/${_id}`} className="card-actions">
          <button className="btn btn-outline">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
