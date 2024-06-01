import { useEffect, useState } from "react";
import PackageCard from "../Shared/PackageCard";
import { Link } from "react-router-dom";

const OurPackages = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/public/tourpackage.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.slice(0, 3).map((item, idx) => (
          <PackageCard item={item} key={idx}></PackageCard>
        ))}
      </div>
      <div className="flex justify-center w-full mt-10">
        <Link to="/allpackages" className="btn btn-outline text-[#FF9051]">All Packages</Link>
      </div>
    </div>
  );
};

export default OurPackages;
