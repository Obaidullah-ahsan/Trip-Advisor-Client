import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const PackageDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: packageDetails = [] } = useQuery({
    queryKey: ["package"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/packages/${id}`);
      return data;
    },
  });
  console.log(packageDetails);
  return (
    <div className="mx-20 my-12 bg-base-200">
      <h2>Pacage Details</h2>
      <div className="p-12">
        <form
        //   onSubmit={handleAddTouristSpot}
          className="container flex flex-col mx-auto space-y-12"
        >
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-base font-semibold">
                Image
              </label>
              <input
                type="text"
                name="image"
                required
                placeholder="Enter photo url"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-base font-semibold">
                Tourists spot name
              </label>
              <input
                type="text"
                name="tourists_spot_name"
                required
                placeholder="Enter tourists spot name"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-base font-semibold">
                {/* <div className="label py-[2px]">
                  <span className="label-text">Country Name</span>
                </div>
                <select
                  onChange={handleSelectCountry}
                  defaultValue={"DEFAULT"}
                  className="select min-h-10 h-10 mt-1 select-bordered w-full"
                >
                  <option value="DEFAULT" disabled>
                    Select Country
                  </option>
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select> */}
              </label>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-base font-semibold">
                Location
              </label>
              <input
                type="text"
                name="location"
                required
                placeholder="Enter location"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-base font-semibold">
                Short description
              </label>
              <input
                type="text"
                name="description"
                required
                placeholder="Enter short description"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="city" className="text-base font-semibold">
                Average cost
              </label>
              <input
                type="text"
                name="average_cost"
                required
                placeholder="Enter average cost"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="city" className="text-base font-semibold">
                Seasonality
              </label>
              <input
                type="text"
                name="seasonality"
                required
                placeholder="Enter Seasonality"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>

            <div className="col-span-full sm:col-span-3">
              <label htmlFor="zip" className="text-base font-semibold">
                Travel time
              </label>
              <input
                type="text"
                name="travel_time"
                required
                placeholder="Enter travel time"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="zip" className="text-base font-semibold">
                Total Visitors Per Year
              </label>
              <input
                type="text"
                name="totalVisitorsPerYear"
                required
                placeholder="Enter Total Visitors Per Year"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="zip" className="text-base font-semibold">
                User Name
              </label>
              <input
                disabled
                type="text"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="zip" className="text-base font-semibold">
                User Email
              </label>
              <input
                disabled
                type="text"
                className="w-full min-h-10 h-10 px-4 mt-1 rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full mt-3">
              <button className="btn w-full bg-[#43BA7F] text-base font-semibold text-white rounded-md">
                Add Tourist Spot
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PackageDetails;
