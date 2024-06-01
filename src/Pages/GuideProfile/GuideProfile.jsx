const GuideProfile = () => {
  return (
    <div className="mx-20">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[40rem]"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
              <p className="text-5xl font-semibold text-blue-500 ">“</p>

              <h1 className="text-2xl font-semibold text-blue-500 dark:text-white lg:text-3xl lg:w-96">
                Johan Deo
              </h1>

              <p className="max-w-lg mt-2 text-gray-500 dark:text-gray-400 ">
                John is a passionate historian with over a decade of experience
                guiding tours in San Francisco. He specializes in providing
                engaging and informative historical tours, sharing his love for
                the citys rich past with visitors from around the world.
              </p>

              <h3 className="mt-2 text-lg font-medium">
                B.Sc. in Environmental Science, Stanford University
              </h3>
              <div>
                <h3 className="mt-2 text-lg font-semibold text-blue-500">
                  Skills :
                </h3>
                <ul className="pl-7" style={{ listStyleType: "disc" }}>
                  <li>Historical Tours</li>
                  <li>Archaeology</li>
                  <li>Multi-lingual (Arabic, English)</li>
                  <li>Storytelling</li>
                </ul>
              </div>
              <div>
                <h3 className="mt-2 text-lg font-semibold text-blue-500">
                  Work Experiance :
                </h3>
                <div className="pl-4">
                  <p className="font-medium">Yosemite National Park</p>
                  <p>Nature Guide</p>
                  <p>2018-2023</p>
                </div>
              </div>
              <div>
                <h3 className="mt-2 text-lg font-semibold text-blue-500">
                  Contact :
                </h3>
                <div className="pl-4">
                  <p>john.doe@example.com</p>
                  <p>+1-555-123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuideProfile;
