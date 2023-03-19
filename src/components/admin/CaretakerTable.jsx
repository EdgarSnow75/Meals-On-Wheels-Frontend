import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import UserService from "../services/UserService";

const CaretakerTable = () => {
  // const { caretakers, viewCaretakers } = UserService();
  const navigate = useNavigate();
  // const handleDeletecaretaker = async (caretakerID) => {
  //   if (window.confirm("Are you sure you want to delete this caretaker?")) {
  //     const response = await deletecaretaker(caretakerID);
  //     console.log(response);
  //     viewCaretakers();
  //   }
  // };

  // useEffect(() => {
  //   viewCaretakers();
  // }, []);

  // useEffect(() => {
  //   console.log(caretakers);
  // }, [caretakers]);

  // if (caretakers.length === 0) {
  //   return <p>No caretakers found.</p>;
  // }
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
                <th>Associated Member</th>
                <th>Member First Name</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {caretakers &&
                caretakers.map((caretaker) => {
                  <tr key={caretaker.caretakerID} className="hover">
                    <th>{caretaker.caretakerID}</th>
                    <td>{caretaker.caretakerID}</td>
                    <td>{caretaker.caretakerID}</td>
                    <td>{caretaker.caretakerID}</td>
                    <td>{caretaker.caretakerID}</td>
                    <td>{caretaker.caretakerID}</td>
                    <td>{caretaker.caretakerID}</td>
                    <td>{caretaker.caretakerID}</td>
                    <td>{caretaker.caretakerID}</td>
                    <td>
                      <div className="flex flex-col items-center">
                        <button className="btn btn-primary">
                          <Link to={`/caretakerValidate/${caretaker.caretakerID}`}>
                            Validate
                          </Link>
                        </button>
                        <button className="btn btn-secondary">
                          <Link to={`/updatecaretaker/${caretaker.caretakerID}`}>
                            Update
                          </Link>
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => handleDeletecaretaker(caretaker.caretakerID)}
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
                <td>
                  <div className="flex flex-col items-center">
                    <button className="btn btn-primary my-2 w-28">
                      <Link to="/">View</Link>
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
                <th>Caretaker ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Address</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Relationship with dependent member</th>
                <th>Associated Member</th>
                <th>Member First Name</th>
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

export default CaretakerTable;
