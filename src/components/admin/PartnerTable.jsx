import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";

const PartnerTable = () => {
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this partner?")) {
      const response = await AdminService.deleteUser(userId);
      console.log(response);
      viewPartners();
    }
  };

  const viewPartners = async () => {
    try {
      const users = await AdminService.getUsers();

      setPartners(users.partners);
      console.log(users.partners);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    viewPartners();
  }, []);

  if (partners.length === 0) {
    return <p>No partners found.</p>;
  }
  const handleLink = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <button
          className="btn btn-primary my-6"
          onClick={() => handleLink("/adminDashboard/partnerCreate")}
        >
          Create new partner
        </button>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full shadow-lg">
            <thead>
              <tr>
                <th>Partner ID</th>
                <th>Business Name</th>
                <th>Email Address</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Available Days</th>
                <th>Service Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {partners.map((partner) => (
                <tr key={partner._id} className="hover">
                  <th className="z-0">{partner._id}</th>
                  <td>{partner.businessName}</td>
                  <td>{partner.emailAddress}</td>
                  <td>{partner.address?.fullAddress}</td>
                  <td>{partner.contactNumber}</td>
                  <td>{partner.daysAvailable?.join(", ")}</td>
                  <td>{partner.serviceType}</td>
                  <td>
                    <div className="flex flex-col items-center">
                      <button className="btn btn-secondary w-24 mb-2">
                        <Link to={`/admin/partnerUpdate/${partner._id}`}>
                          Update
                        </Link>
                      </button>
                      <button
                        className="btn btn-error w-24"
                        onClick={() => handleDeleteUser(partner._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Partner ID</th>
                <th>Business Name</th>
                <th>Email Address</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Available Days</th>
                <th>Service Type</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PartnerTable;
