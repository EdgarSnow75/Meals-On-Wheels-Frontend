import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import UserService from "../services/UserService";

const PartnerTable = () => {
  // const { partners, viewPartner } = UserService();
  const navigate = useNavigate();

  // const handleDeletepartner = async (partnerID) => {
  //   if (window.confirm("Are you sure you want to delete this partner?")) {
  //     const response = await deletepartner(partnerID);
  //     console.log(response);
  //     viewPartner();
  //   }
  // };

  // useEffect(() => {
  //   viewPartner();
  // }, []);

  // useEffect(() => {
  //   console.log(partners);
  // }, [partners]);

  // if (partners.length === 0) {
  //   return <p>No partners found.</p>;
  // }
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
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* {partners &&
                partners.map((partner) => {
                  <tr key={partner.partnerID} className="hover">
                    <th>{partner.partnerID}</th>
                    <td>{partner.partnerID}</td>
                    <td>{partner.partnerID}</td>
                    <td>{partner.partnerID}</td>
                    <td>{partner.partnerID}</td>
                    <td>{partner.partnerID}</td>
                    <td>{partner.partnerID}</td>
                    <td>{partner.partnerID}</td>
                    <td>{partner.partnerID}</td>
                    <td>
                      <div className="flex flex-col items-center">
                        <button className="btn btn-primary">
                          <Link to={`/partnerValidate/${partner.partnerID}`}>
                            Validate
                          </Link>
                        </button>
                        <button className="btn btn-secondary">
                          <Link to={`/updatepartner/${partner.partnerID}`}>
                            Update
                          </Link>
                        </button>
                        <button
                          className="btn btn-error"
                          onClick={() => handleDeletepartner(partner.partnerID)}
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
                <th>Partner ID</th>
                <th>Business Name</th>
                <th>Email Address</th>
                <th>Full Address</th>
                <th>Contact Number</th>
                <th>Available Days</th>
                <th>Service Type</th>
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

export default PartnerTable;
