import { FaIdBadge } from "react-icons/fa";
import useAuth from "../../../Hooks/useAuth";
import useRole from "../../../Hooks/useRole";

const MyProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const handleShareStory = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const story = form.story.value;
    const email = user?.email;
    console.log(title, story,email);
  };
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:flex-row-reverse lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
              Share your tour story
            </h1>

            <form onSubmit={handleShareStory} className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Story Title
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email
                  </label>
                  <input
                    name="email"
                    disabled
                    defaultValue={user?.email}
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Story
                </label>
                <textarea
                  name="story"
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Story"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Share
              </button>
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-60 h-60"
              src={user?.photoURL}
              alt=""
            />

            <div className="mt-6 space-y-8 md:mt-8">
              <h2 className="text-2xl font-semibold mb-1">
                {user.displayName}
              </h2>
              <span className="text-sm uppercase dark:text-gray-600">
                <div className="badge badge-accent">{role}</div>
              </span>
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>

                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  {user.email}
                </span>
              </p>
              <p className="flex items-start -mx-2">
                <FaIdBadge className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" />
                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                  {user.uid}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
