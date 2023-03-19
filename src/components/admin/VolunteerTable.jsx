import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import UserService from "../services/UserService";

const VolunteerTable = () => {
  // const { volunteers, viewVolunteers } = UserService();
  const navigate = useNavigate();
  // const handleDeletevolunteer = async (volunteerID) => {
  //   if (window.confirm("Are you sure you want to delete this volunteer?")) {
  //     const response = await deletevolunteer(volunteerID);
  //     console.log(response);
  //     viewVolunteers();
  //   }
  // };

  // useEffect(() => {
  //   viewVolunteers();
  // }, []);

  // useEffect(() => {
  //   console.log(volunteers);
  // }, [volunteers]);

  // if (volunteers.length === 0) {
  //   return <p>No volunteers found.</p>;
  // }
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
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {volunteers &&
                volunteers.map((volunteer) => {
                  <tr key={volunteer.volunteerID} className="hover">
                    <th>{volunteer.volunteerID}</th>
                    <td>{volunteer.volunteerID}</td>
                    <td>{volunteer.volunteerID}</td>
                    <td>{volunteer.volunteerID}</td>
                    <td>{volunteer.volunteerID}</td>
                    <td>{volunteer.volunteerID}</td>
                    <td>{volunteer.volunteerID}</td>
                    <td>{volunteer.volunteerID}</td>
                    <td>{volunteer.volunteerID}</td>
                    <td>
                      <div className="flex flex-col items-center">
                        <button className="btn btn-primary">
                          <Link to={`/volunteerValidate/${volunteer.volunteerID}`}>
                            Validate
                          </Link>
                        </button>
                        <button className="btn btn-secondary">
                          <Link to={`/updatevolunteer/${volunteer.volunteerID}`}>
                            Update
                          </Link>
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => handleDeletevolunteer(volunteer.volunteerID)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>;
                })} */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>
                  <div className="flex flex-col items-center">
                    <button className="btn btn-primary my-2 w-28">
                      <Link to="/">Validate</Link>
                    </button>
                    <button className="btn btn-secondary my-2 w-28">
                      <Link to="/">Update</Link>
                    </button>
                    <button className="btn btn-error my-2 w-28">Delete</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Littel, Schaden and Vandervort</td>
                <td>Canada</td>
                <td>12/16/2020</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>Blue</td>
                <td>
                  <div className="flex flex-col items-center">
                    <button className="btn btn-primary my-2 w-28">
                      <Link to="/">Validate</Link>
                    </button>
                    <button className="btn btn-secondary my-2 w-28">
                      <Link to="/">Update</Link>
                    </button>
                    <button className="btn btn-error my-2 w-28">Delete</button>
                  </div>
                </td>
              </tr>
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
                <th>Password</th>
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
