import { useEffect, useState } from "react";
import PackageCard from "../../Components/Shared/PackageCard";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const AllPackages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/public/tourpackage.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="mx-20 my-12">
      <div className="flex items-center">
        <Link to="/" className="ml-5 flex gap-2 text-lg items-center font-semibold">
          <BiArrowBack /> Back to Home
        </Link>
        <h2 className="text-4xl font-bold text-center mx-auto mb-6">
          All Packages
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <PackageCard item={item} key={idx}></PackageCard>
        ))}
      </div>
    </div>
  );
};

export default AllPackages;
