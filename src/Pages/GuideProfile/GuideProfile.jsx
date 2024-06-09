import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, Outlet, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import GiveReview from "../../Components/GiveReview/GiveReview";
import useAuth from "../../Hooks/useAuth";

const GuideProfile = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  const { data: guide = [] } = useQuery({
    queryKey: ["guide"],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/guides/${id}`);
      return data;
    },
  });
  return (
    <div className="lg:mx-20">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div>
            <Link
              to="/"
              className="mb-5 flex gap-2 text-lg items-center font-semibold"
            >
              <BiArrowBack /> Back to Home
            </Link>
          </div>
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[45rem]"
              src={guide?.profile_picture}
              alt=""
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-blue-500 ">“</p>

              <h1 className="text-2xl font-semibold text-blue-500 dark:text-white lg:text-3xl lg:w-96">
                {guide?.name}
              </h1>

              <p className="max-w-lg mt-2 text-gray-500 dark:text-gray-400 ">
                {guide?.about}
              </p>

              <h3 className="mt-2 text-lg font-medium">{guide?.education}</h3>
              <div>
                <h3 className="mt-2 text-lg font-semibold text-blue-500">
                  Skills :
                </h3>
                <ul className="pl-7" style={{ listStyleType: "disc" }}>
                  {guide?.skills?.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mt-2 text-lg font-semibold text-blue-500">
                  Work Experiance :
                </h3>
                <div className="pl-4">
                  <p className="font-medium">
                    {guide?.work_experience?.company}
                  </p>
                  <p>{guide?.work_experience?.position}</p>
                  <p>{guide?.work_experience?.duration}</p>
                </div>
              </div>
              <div>
                <h3 className="mt-2 text-lg font-semibold text-blue-500">
                  Contact :
                </h3>
                <div className="pl-4">
                  <p>{guide?.contact_details?.email}</p>
                  <p>{guide?.contact_details?.phone}</p>
                </div>
              </div>
              <Link
                to={`allreview/${guide?.contact_details?.email}`}
                className="btn mt-3 btn-outline"
              >
                View Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Outlet></Outlet>
      {user && <GiveReview guide={guide}></GiveReview>}
    </div>
  );
};

export default GuideProfile;
