import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";

const MemberTable = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this member?")) {
      const response = await AdminService.deleteUser(userId);
      console.log(response);
      viewMembers();
    }
  };

  const handleValidation = async (userId) => {
    if (window.confirm("Are you sure you want to validate this member?")) {
      const response = await AdminService.validate(userId);
      console.log(response);
      viewMembers();
    }
  };

  const handleInvalidation = async (userId) => {
    if (window.confirm("Are you sure you want to invalidate this member?")) {
      const response = await AdminService.invalidate(userId);
      console.log(response);
      viewMembers();
    }
  };

  const viewMembers = async () => {
    try {
      const users = await AdminService.getUsers();

      setMembers(users.members);
      console.log(users.members);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    viewMembers();
  }, []);

  if (members.length === 0) {
    return <p>No members found.</p>;
  }
  const handleLink = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <button
          className="btn btn-primary my-6"
          onClick={() => handleLink("/adminDashboard/memberCreate")}
        >
          Create new member
        </button>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full shadow-lg">
            <thead>
              <tr>
                <th className="z-0">Member ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birthday</th>
                <th>Email Address</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Dietary Restrictions</th>
                <th>Food Allergies</th>
                <th>Eligibility</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member._id} className="hover">
                  <th className="z-0">{member._id}</th>
                  <td>{member.firstName}</td>
                  <td>{member.lastName}</td>
                  <td>{member.birthdate}</td>
                  <td>{member.emailAddress}</td>
                  <td>{member.address?.fullAddress}</td>
                  <td>{member.contactNumber}</td>
                  <td>{member.dietaryRestrictions?.join(", ")}</td>
                  <td>{member.foodAllergies?.join(", ")}</td>
                  <td>{member.validated.toString()}</td>
                  <td>
                    <div className="flex flex-col items-center">
                      {member.validated.toString() === "false" ? (
                        <div>
                          <button
                            className="btn btn-primary w-24 mb-2"
                            onClick={() => handleValidation(member._id)}
                          >
                            Validate
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            className="btn btn-primary w-24 mb-2"
                            onClick={() => handleInvalidation(member._id)}
                          >
                            Invalidate
                          </button>
                        </div>
                      )}
                      <button className="btn btn-secondary w-24 mb-2">
                        <Link to={`/admin/memberUpdate/${member._id}`}>
                          Update
                        </Link>
                      </button>
                      <button
                        className="btn btn-error w-24"
                        onClick={() => handleDeleteUser(member._id)}
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
                <th>Member ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birthday</th>
                <th>Email Address</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Dietary Restrictions</th>
                <th>Food Allergies</th>
                <th>Eligibility</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberTable;
