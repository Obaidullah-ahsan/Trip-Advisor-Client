import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import PackageCard from "../../Components/Shared/PackageCard";

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
    <div className="md:mx-8 lg:mx-20 my-12">
      <div className="flex items-center">
        <h2 className="text-4xl font-bold text-center mx-auto mb-6">
          Category Base Packages
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pac, idx) => (
          <PackageCard pac={pac} key={idx}></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryBasePackages;
