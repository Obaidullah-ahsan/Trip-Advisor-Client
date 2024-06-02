import { Link } from "react-router-dom";

const PackageCard = ({ pac }) => {
  const { _id, image, tour_type, tour_title, price } = pac;
  return (
    <div className="card card-compact rounded-md bg-base-100 hover:shadow-xl p-3">
      <figure>
        <img className="max-h-40 w-full" src={image} alt="Shoes" />
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
