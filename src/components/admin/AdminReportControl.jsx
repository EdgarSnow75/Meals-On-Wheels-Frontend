const AdminReportControl = () => {
  return (
    <div>
      <div className="bg-accent shadow-md mb-6 ring-[0.5px] ring-[rgba(0,0,0,0.2)] p-10 rounded-md">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Monthly Reports
          </h2>
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Meals Delivered</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Partners and Volunteers</div>
              <div className="stat-value text-secondary">1.1 K</div>
              <div className="stat-desc">31% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-value">95%</div>
              <div className="stat-title">Successful Deliveries</div>
              <div className="stat-desc text-secondary">5% Fail Rate</div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-white my-10 text-center border-b-2">
              Monthly reports are available to generate
            </h2>
            <div className="flex flex-col items-center border-b-2 pb-4 mb-2">
              <h3 className="font-semibold text-xl text-secondary mt-4 mb-2">
                Report for Total Number of Members Serviced:
              </h3>
              <button className="btn btn-primary">Generate Report</button>
            </div>
            <div className="flex flex-col items-center border-b-2 pb-4 mb-2">
              <h3 className="font-semibold text-xl text-secondary mt-4 mb-2">
                Monthly Financial Report:
              </h3>
              <button className="btn btn-primary">Generate Report</button>
            </div>
            <div className="flex flex-col items-center border-b-2 pb-4 mb-2">
              <h3 className="font-semibold text-xl text-secondary mt-4 mb-2">
                Report for Logicstics
              </h3>
              <button className="btn btn-primary">Generate Report</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminReportControl;
