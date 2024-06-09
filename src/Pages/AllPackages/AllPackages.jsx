import PackageCard from "../../Components/Shared/PackageCard";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import usePackages from "../../Hooks/usePackages";

const AllPackages = () => {
  const [packages] = usePackages();
  return (
    <div className="mx-4 md:mx-8 lg:mx-20 my-12">
      <div className="flex items-center">
        <Link to="/" className="ml-5 hidden md:flex gap-2 text-lg items-center font-semibold">
          <BiArrowBack /> Back to Home
        </Link>
        <h2 className="text-4xl font-bold text-center mx-auto mb-6">
          All Packages
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

export default AllPackages;
