import { Rating } from "@smastrom/react-rating";

const ReviewCard = ({ review }) => {
  const { traveler_Name, rating, comment } = review;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="flex flex-col items-center p-7">
        <p className="text-5xl font-semibold text-blue-500 ">“</p>
        <p className="py-2">{comment}</p>
        <div>
          <Rating readOnly style={{ maxWidth: 100 }} value={rating} />
        </div>
        <h2 className="text-xl font-bold">{traveler_Name}</h2>
        <p className="italic">Traveler</p>
      </div>
    </div>
  );
};

export default ReviewCard;
