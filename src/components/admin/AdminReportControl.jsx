import { useEffect, useState } from "react";
import AdminService from "../services/AdminService";
import ReportService from "../services/ReportService";

const AdminReportControl = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [report, setReport] = useState(<div></div>);

  const reportModalCheckbox = document.getElementById("report");

  useEffect(() => {
    const fetchDeliveries = async () => {
      const deliveries = await AdminService.getDeliveries();
      setDeliveries(deliveries);
    };

    fetchDeliveries();

    const fetchVolunteers = async () => {
      const users = await AdminService.getUsers();
      setVolunteers(users.volunteers);
    };

    fetchVolunteers();
  }, []);

  const handleBeneficiaryReport = async (e) => {
    e.target.classList.add("loading");
    const response = await ReportService.beneficiaryReport();
    e.target.classList.remove("loading");

    const reportElement = (
      <div className="report flex flex-col gap-4">
        <div className="report-header">
          <h2 className="text-2xl font-bold">Beneficiary Report</h2>
        </div>
        <div className="report-body flex flex-col gap-4">
          <div className="total-beneficiaries">
            <h3 className="text-lg font-bold">
              Total Beneficiaries:{" "}
              <span>{response.totalBeneficiaries.totalBeneficiaries}</span>
            </h3>
            <h4>
              Total validated members:{" "}
              <span>{response.totalBeneficiaries.totalValidatedMembers}</span>
            </h4>
            <h4>
              Total validated caregivers:{" "}
              <span>
                {response.totalBeneficiaries.totalValidatedCaregivers}
              </span>
            </h4>
          </div>
          {/* Validations rates */}
          <div className="validation-rates">
            <h3 className="text-lg font-bold">Validation Rates</h3>
            <h4>
              Members: <span>{response.memberValidationRate * 100}%</span>
            </h4>
            <h4>
              Caregivers: <span>{response.caregiverValidationRate * 100}%</span>
            </h4>
          </div>
          {/* Member age ranges */}

          <div className="member-age-ranges">
            <h3 className="text-lg font-bold">Member Age Ranges</h3>
            <h4>
              0-17: <span>{response.memberAgeRange["0-17"]}</span>
            </h4>
            <h4>
              18-24: <span>{response.memberAgeRange["18-24"]}</span>
            </h4>
            <h4>
              25-34: <span>{response.memberAgeRange["25-34"]}</span>
            </h4>
            <h4>
              35-44: <span>{response.memberAgeRange["35-44"]}</span>
            </h4>
            <h4>
              45-54: <span>{response.memberAgeRange["45-54"]}</span>
            </h4>
            <h4>
              55-64: <span>{response.memberAgeRange["55-64"]}</span>
            </h4>
            <h4>
              65+: <span>{response.memberAgeRange["65+"]}</span>
            </h4>
          </div>
        </div>
      </div>
    );

    setReport(reportElement);

    reportModalCheckbox.checked = true;
  };

  const handleDonationReport = async (e) => {
    e.target.classList.add("loading");
    const response = await ReportService.donationReport();
    e.target.classList.remove("loading");

    const reportElement = (
      <div className="report flex flex-col gap-4">
        <div className="report-header">
          <h2 className="text-2xl font-bold">Donation Report</h2>
        </div>
        <div className="report-body flex flex-col gap-4">
          <div className="total-donations">
            <h3 className="text-lg font-bold">
              Total Donations: <span>${response.totalDonations[0].total}</span>
            </h3>
          </div>
          {/* Top donors */}

          <div className="top-donors">
            <h3 className="text-lg font-bold">Top Donors</h3>
            {response.topDonors.map((donor) => {
              return (
                <h4 key={`${donor._id}-top-donor`}>
                  {donor._id || "anonymous"}: <span>${donor.total}</span>
                </h4>
              );
            })}
          </div>

          {/* Top donations */}

          <div className="top-donations">
            <h3 className="text-lg font-bold">Top Donations</h3>
            {response.topDonations.map((donation, i) => {
              return (
                <h4 key={`${donation._id}-top-donation`}>
                  {i + 1}. {donation.donorName || "anonymous"}:{" "}
                  <span>${donation.amount}</span>
                </h4>
              );
            })}
          </div>

          {/* Donations by donor */}

          <div className="donations-by-donor">
            <h3 className="text-lg font-bold">Donations by Donor</h3>
            {response.donationsByDonor.map((donor) => {
              return (
                <h4 key={`${donor._id}-by-donor`}>
                  {donor._id || "anonymous"}: <span>${donor.total}</span>
                </h4>
              );
            })}
          </div>

          {/* Donations by frequency */}

          <div className="donations-by-frequency">
            <h3 className="text-lg font-bold">Donations by Frequency</h3>
            {response.donationsByFrequency.map((frequency) => {
              return (
                <h4 key={`${frequency._id}-by-freq`}>
                  {frequency._id}: <span>{frequency.total}</span>
                </h4>
              );
            })}
          </div>
        </div>
      </div>
    );

    setReport(reportElement);

    reportModalCheckbox.checked = true;
  };

  const handleVolunteerReport = async (e) => {
    e.target.classList.add("loading");
    const response = await ReportService.volunteerReport();
    e.target.classList.remove("loading");

    const reportElement = (
      <div className="report flex flex-col gap-4">
        <div className="report-header">
          <h2 className="text-2xl font-bold">Volunteer Report</h2>
        </div>
        <div className="report-body flex flex-col gap-4">
          <div className="total-volunteers">
            <h3 className="text-lg font-bold">
              Total Volunteers: <span>{response.totalVolunteers[0].total}</span>
            </h3>

            {/* Volunteer retention */}

            <div className="volunteer-retention">
              <h3 className="text-lg font-bold">
                Volunteer Retention:{" "}
                <span>{response.volunteerRetention * 100}%</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );

    setReport(reportElement);

    reportModalCheckbox.checked = true;
  };

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
              <div className="stat-value text-primary">
                {
                  deliveries.filter((delivery) => {
                    const date = new Date(delivery.deliveryDate);
                    return date.getMonth() === new Date().getMonth();
                  }).length
                }
              </div>
              <div className="stat-desc">
                {(deliveries.filter((delivery) => {
                  const date = new Date(delivery.deliveryDate);
                  return date.getMonth() === new Date().getMonth();
                }).length /
                  (deliveries.filter((delivery) => {
                    const date = new Date(delivery.deliveryDate);
                    return date.getMonth() === new Date().getMonth() - 1;
                  }).length || 1)) *
                  100}
                {"% "}
                more than last month
              </div>
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
              <div className="stat-title">Volunteers</div>
              <div className="stat-value text-secondary">
                {
                  volunteers.filter((volunteer) => {
                    const date = new Date(volunteer.createdAt);
                    return date.getMonth() === new Date().getMonth();
                  }).length
                }
              </div>
              <div className="stat-desc">
                {(volunteers.filter((volunteer) => {
                  const date = new Date(volunteer.createdAt);
                  return date.getMonth() === new Date().getMonth();
                }).length /
                  (volunteers.filter((volunteer) => {
                    const date = new Date(volunteer.createdAt);
                    return date.getMonth() === new Date().getMonth() - 1;
                  }).length || 1)) *
                  100}
                {"%"} more than last month
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="font-semibold text-2xl text-white text-center border-b-2">
              Reports are available to generate
            </h2>
            <div className="flex flex-col items-center border-b-2 pb-4 mb-2">
              <h3 className="font-semibold text-xl text-secondary mt-4 mb-2">
                Beneficiaries report (Members and Caregivers)
              </h3>
              <button
                className="btn btn-primary"
                onClick={handleBeneficiaryReport}
              >
                Generate Report
              </button>
            </div>
            <div className="flex flex-col items-center border-b-2 pb-4 mb-2">
              <h3 className="font-semibold text-xl text-secondary mt-4 mb-2">
                Donations report
              </h3>
              <button
                className="btn btn-primary"
                onClick={handleDonationReport}
              >
                Generate Report
              </button>
            </div>
            <div className="flex flex-col items-center border-b-2 pb-4 mb-2">
              <h3 className="font-semibold text-xl text-secondary mt-4 mb-2">
                Volunteers report
              </h3>
              <button
                className="btn btn-primary"
                onClick={handleVolunteerReport}
              >
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" id="report" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {report}
          <div className="modal-action">
            <label
              htmlFor="report"
              className="btn"
              onClick={() => setReport(<div></div>)}
            >
              Ok
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminReportControl;
