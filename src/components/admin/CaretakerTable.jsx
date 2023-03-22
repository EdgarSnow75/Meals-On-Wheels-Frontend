import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";

const CaretakerTable = () => {
  const [caretakers, setCaretakers] = useState([]);
  const navigate = useNavigate();

  const handleDeleteUser = async (userId) => {
    if (window.confirm("Are you sure you want to delete this caretaker?")) {
      const response = await AdminService.deleteUser(userId);
      console.log(response);
      viewCaretakers();
    }
  };

  const handleValidation = async (userId) => {
    if (
      window.confirm(
        "Are you sure you want to validate this caretker's dependent member?"
      )
    ) {
      const response = await AdminService.validate(userId);
      console.log(response);
      viewCaretakers();
    }
  };

  const handleInvalidation = async (userId) => {
    if (
      window.confirm(
        "Are you sure you want to invalidate this caretker's dependent member?"
      )
    ) {
      const response = await AdminService.invalidate(userId);
      console.log(response);
      viewCaretakers();
    }
  };

  const viewCaretakers = async () => {
    try {
      const users = await AdminService.getUsers();

      setCaretakers(users.caregivers);
      console.log(users.caregivers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    viewCaretakers();
  }, []);

  if (caretakers.length === 0) {
    return <p>No caretakers found.</p>;
  }
  const handleLink = (path) => {
    navigate(path);
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <button
          className="btn btn-primary my-6"
          onClick={() => handleLink("/adminDashboard/caretakerCreate")}
        >
          Create new caretaker
        </button>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full shadow-lg">
            <thead>
              <tr>
                <th>Caretaker ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Relationship with dependent member</th>

                <th>Member ID</th>
                <th>Member Eligibility</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {caretakers.map((caretaker) => (
                <tr key={caretaker._id} className="hover">
                  <th className="z-0">{caretaker._id}</th>
                  <td>{caretaker.firstName}</td>
                  <td>{caretaker.lastName}</td>
                  <td>{caretaker.emailAddress}</td>
                  <td>{caretaker.address?.fullAddress}</td>
                  <td>{caretaker.contactNumber}</td>
                  <td>{caretaker.relationshipToMember}</td>
                  <td>{caretaker.dependentMember}</td>
                  <td>{caretaker.validated.toString()}</td>
                  <td>
                    <div className="flex flex-col items-center">
                      {caretaker.validated.toString() === "false" ? (
                        <div>
                          <button
                            className="btn btn-primary w-24 mb-2"
                            onClick={() => handleValidation(caretaker._id)}
                          >
                            Validate
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            className="btn btn-primary w-24 mb-2"
                            onClick={() => handleInvalidation(caretaker._id)}
                          >
                            Invalidate
                          </button>
                        </div>
                      )}
                      <button className="btn btn-secondary w-24 mb-2">
                        <Link to={`/admin/caretakerUpdate/${caretaker._id}`}>
                          Update
                        </Link>
                      </button>
                      <button
                        className="btn btn-error w-24"
                        onClick={() => handleDeleteUser(caretaker._id)}
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
                <th>Caretaker ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Relationship with dependent member</th>

                <th>Member ID</th>
                <th>Member Eligibility</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CaretakerTable;
