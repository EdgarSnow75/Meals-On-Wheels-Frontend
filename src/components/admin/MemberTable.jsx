import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import UserService from "../services/UserService";

const MemberTable = () => {
  const navigate = useNavigate();
  // const { members, viewMembers } = UserService();

  // const handleDeleteMember = async (memberID) => {
  //   if (window.confirm("Are you sure you want to delete this member?")) {
  //     const response = await deleteMember(memberID);
  //     console.log(response);
  //     viewMembers();
  //   }
  // };

  // useEffect(() => {
  //   viewMembers();
  // }, []);

  // useEffect(() => {
  //   console.log(members);
  // }, [members]);

  // if (members.length === 0) {
  //   return <p>No members found.</p>;
  // }
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
                <th>Member ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birthday</th>
                <th>Email Address</th>
                <th>Caretaker</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Dietary Restrictions</th>
                <th>Food Allergies</th>
                <th>Eligibility</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {members &&
                members.map((member) => {
                  <tr key={member.memberID} className="hover">
                    <th>{member.memberID}</th>
                    <td>{member.memberID}</td>
                    <td>{member.memberID}</td>
                    <td>{member.memberID}</td>
                    <td>{member.memberID}</td>
                    <td>{member.memberID}</td>
                    <td>{member.memberID}</td>
                    <td>{member.memberID}</td>
                    <td>{member.memberID}</td>
                    <td>
                      <div className="flex flex-col items-center">
                        <button className="btn btn-primary">
                          <Link to={`/memberValidate/${member.memberID}`}>
                            Validate
                          </Link>
                        </button>
                        <button className="btn btn-secondary">
                          <Link to={`/updateMember/${member.memberID}`}>
                            Update
                          </Link>
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => handleDeleteMember(member.memberID)}
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
                <th>Member ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birthday</th>
                <th>Email Address</th>
                <th>Caretaker</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Dietary Restrictions</th>
                <th>Food Allergies</th>
                <th>Eligibility</th>
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

export default MemberTable;