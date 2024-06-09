import PackageCard from "../Shared/PackageCard";
import { Link } from "react-router-dom";
import usePackages from "../../Hooks/usePackages";

const OurPackages = () => {
  const [packages] = usePackages();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.slice(0, 3).map((pac, idx) => (
          <PackageCard pac={pac} key={idx}></PackageCard>
        ))}
      </div>
      <div className="flex justify-center w-full mt-10">
        <Link to="/allpackages" className="btn btn-outline text-[#FF9051]">
          All Packages
        </Link>
      </div>
    </div>
  );
};

export default OurPackages;
