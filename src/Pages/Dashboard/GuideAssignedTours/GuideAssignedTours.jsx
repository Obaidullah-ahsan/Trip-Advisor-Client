const GuideAssignedTours = () => {
  return (
    <div>
      <div className="p-2">
        <h2 className="text-3xl font-semibold">My Assigned Tour: 0</h2>
        <div className="overflow-x-auto mt-4">
          <table className="table rounded-xl">
            {/* head */}
            <thead className="bg-blue-400 text-white">
              <tr>
                <th>#</th>
                <th>Package Name</th>
                <th>Guide Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GuideAssignedTours;
