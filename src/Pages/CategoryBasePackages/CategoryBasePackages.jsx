import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import PackageCard from "../../Components/Shared/PackageCard";
import { BiArrowBack } from "react-icons/bi";

const CategoryBasePackages = () => {
  const { category } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: packages = [] } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/categoryBasePackages/${category}`
      );
      return data;
    },
  });
  console.log([packages]);
  return (
    <div className="mx-20 my-12">
      <div className="flex items-center">
        <Link
          to="/"
          className="ml-5 flex gap-2 text-lg items-center font-semibold"
        >
          <BiArrowBack /> Back to Home
        </Link>
        <h2 className="text-4xl font-bold text-center mx-auto mb-6">
          Category Base Packages
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pac, idx) => (
          <PackageCard pac={pac} key={idx}></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryBasePackages;
