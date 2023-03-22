import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";

const VolunteerTable = () => {
  const navigate = useNavigate();
  const [volunteers, setVolunteers] = useState([]);

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this volunteer?")) {
      const response = await AdminService.deleteUser(userId);
      console.log(response);
      viewVolunteers();
    }
  };

  const viewVolunteers = async () => {
    try {
      const users = await AdminService.getUsers();

      setVolunteers(users.volunteers);
      console.log(users.volunteers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    viewVolunteers();
  }, []);

  if (volunteers.length === 0) {
    return <p>No volunteers found.</p>;
  }
  const handleLink = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <button
          className="btn btn-primary my-6"
          onClick={() => handleLink("/adminDashboard/volunteerCreate")}
        >
          Create new volunteer
        </button>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full shadow-lg">
            <thead>
              <tr>
                <th>Volunteer ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Available Days</th>
                <th>Service Provided</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {volunteers.map((volunteer) => (
                <tr key={volunteer._id} className="hover">
                  <th className="z-0">{volunteer._id}</th>
                  <td>{volunteer.firstName}</td>
                  <td>{volunteer.lastName}</td>
                  <td>{volunteer.emailAddress}</td>
                  <td>{volunteer.address?.fullAddress}</td>
                  <td>{volunteer.contactNumber}</td>
                  <td>{volunteer.daysAvailable?.join(", ")}</td>
                  <td>{volunteer.serviceType}</td>
                  <td>
                    <div className="flex flex-col items-center">
                      <button className="btn btn-secondary w-24 mb-2">
                        <Link to={`/admin/volunteerUpdate/${volunteer._id}`}>
                          Update
                        </Link>
                      </button>
                      <button
                        className="btn btn-error w-24"
                        onClick={() => handleDeleteUser(volunteer._id)}
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
                <th>Volunteer ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Available Days</th>
                <th>Service Provided</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VolunteerTable;
