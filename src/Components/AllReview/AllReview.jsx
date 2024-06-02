import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ReviewCard from "./ReviewCard";
import { useParams } from "react-router-dom";

const AllReview = () => {
  const { email } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/reviews/${email}`);
      return data;
    },
  });
  console.log(reviews);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mx-auto mb-6">{
        reviews.length ? "Travelres Says":"No Review Avaiable"
      }</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {reviews?.map((review) => (
          <ReviewCard review={review} key={review._id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
