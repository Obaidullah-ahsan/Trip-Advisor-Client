import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="">
      <footer className="bg-[#F3F3F3] dark:bg-gray-900">
        <div className="container md:p-14 md:pb-5 mx-auto">
          <div className="lg:flex lg:gap-36">
            <div className="w-full -mx-6 lg:w-1/2">
              <div className="px-4">
                <img
                  src="https://i.ibb.co/4g4PpPx/Blue-and-Orange-Travel-Agency-Logo.png"
                  className="h-14 max-w-56 mb-4"
                  alt=""
                />

                <p className="max-w-md mt-2 text-gray-500 dark:text-white">
                  At Trip Advisor, we believe that travel enriches lives and
                  broadens perspectives. Our mission is to inspire and guide
                  travelers through every step of their journey.
                </p>
                <div className="flex mt-4 -mx-2">
                  <button className="mx-2 px-[14px] py-3 rounded-badge text-white bg-black">
                    <FaGoogle size={20} />
                  </button>

                  <button className="mx-2 px-[14px] py-3 rounded-badge text-white bg-black">
                    <FaFacebook size={20} />
                  </button>

                  <button className="mx-2 px-[14px] py-3 rounded-badge text-white bg-black">
                    <FaInstagram size={20} />
                  </button>
                  <button className="mx-2 px-[14px] py-3 rounded-badge text-white bg-black">
                    <FaTwitter size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 lg:w-1/2">
              <div className="grid grid-cols-3 gap-6 ">
                <div>
                  <h3 className=" font-bold uppercase dark:text-white">
                    About
                  </h3>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Tourist Spote
                  </a>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Our Guide
                  </a>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Community
                  </a>
                </div>
                <div>
                  <h3 className=" uppercase font-bold dark:text-white">
                    Resources
                  </h3>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Community Center
                  </a>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Contact
                  </a>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Resource Center
                  </a>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Blogs
                  </a>
                </div>
                <div>
                  <h3 className=" uppercase font-bold dark:text-white">
                    Support
                  </h3>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Help Center
                  </a>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Covid-19 Response
                  </a>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Trust & Safety
                  </a>
                  <a className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                    Cencellation options
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />
          <div>
            <p className="text-center text-gray-500 dark:text-gray-400">
              © Teip Advisor 2020 - All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
