import { Link } from "react-router-dom";
import useGuide from "../../Hooks/useGuide";

const OurGuides = () => {
  const [guides] = useGuide();
  return (
    <div className="mt-10">
      <div className="overflow-x-auto">
        {/* <h2 className="text-4xl font-semibold text-center mx-auto my-3">Our Guide</h2> */}
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-left">#</th>
              <th className="text-left">Image</th>
              <th className="text-left">Name</th>
              <th className="text-left">Email</th>
              <th className="text-left">Phone</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {guides?.map((person, idx) => (
              <tr key={idx}>
                <td className="text-left">
                  <p>{idx + 1}</p>
                </td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={person?.profile_picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-left">{person?.name}</td>
                <td className="text-left">{person?.contact_details?.email}</td>
                <td className="text-left">{person?.contact_details?.phone}</td>
                <th className="text-left">
                  <Link
                    to={`/guideProfile/${person?._id}`}
                    className="btn btn-outline"
                  >
                    Details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OurGuides;
