import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";
import PublicService from "../services/PublicService";
import ToastProps from "../generic/ToastProps";

const AdminDeliveryControl = (props) => {
  const { setToasts } = props;
  const navigate = useNavigate();
  const [deliveries, setDeliveries] = useState([]);
  const [partners, setPartners] = useState([]);
  const [caregivers, setCaregivers] = useState([]);
  const [members, setMembers] = useState([]);
  const [volunteers, setVolunteers] = useState([]);

  const [newDelivery, setNewDelivery] = useState({
    deliveryDate: "",
    dietaryRestrictions: [],
    deliveredFor: "",
    caregiver: "",
    deliveredBy: "",
    partner: "",
    status: "",
    comment: "",
  });

  const newDietaryRestrictions = (e) => {
    const { value } = e.target;
    const dietaryRestrictions = newDelivery.dietaryRestrictions;
    if (dietaryRestrictions.includes(value)) {
      const index = dietaryRestrictions.indexOf(value);
      dietaryRestrictions.splice(index, 1);
    } else {
      dietaryRestrictions.push(value);
    }
    setNewDelivery({ ...newDelivery, dietaryRestrictions });
  };

  const newDeliveryHandler = async (e) => {
    e.preventDefault();

    console.log(newDelivery);

    try {
      const response = await AdminService.newDelivery(newDelivery);

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          message: response.msg,
        }),
      ]);

      const deliveries = await AdminService.getDeliveries();

      setDeliveries(deliveries);

      const newDeliveryInput = document.getElementById("newDelivery");

      newDeliveryInput.checked = false;
    } catch (error) {
      const err = error.response.data.msg;

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          message: err,
          type: "error",
        }),
      ]);
    }
  };

  const [editId, setEditId] = useState("");
  const [editDelivery, setEditDelivery] = useState({
    deliveryDate: "",
    dietaryRestrictions: [],
    deliveredFor: "",
    caregiver: "",
    deliveredBy: "",
    partner: "",
    status: "",
    comment: "",
  });

  const handleEditDelivery = async (deliveryId) => {
    const response = await AdminService.getDelivery(deliveryId);
    setEditDelivery(response);
    setEditId(deliveryId);
  };

  const editDietaryRestrictions = (e) => {
    const { value } = e.target;
    const dietaryRestrictions = editDelivery.dietaryRestrictions;
    if (dietaryRestrictions.includes(value)) {
      const index = dietaryRestrictions.indexOf(value);
      dietaryRestrictions.splice(index, 1);
    } else {
      dietaryRestrictions.push(value);
    }
    setEditDelivery({ ...editDelivery, dietaryRestrictions });
  };

  const editDeliveryHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await AdminService.updateDelivery(editDelivery, editId);

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          message: response.msg,
        }),
      ]);

      const deliveries = await AdminService.getDeliveries();

      setDeliveries(deliveries);
      setEditId("");
    } catch (error) {
      const err = error.response.data.msg;

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          message: err,
          type: "error",
        }),
      ]);
    }
  };

  const [deleteId, setDeleteId] = useState("");

  const handledeleteDelivery = (deliveryId) => {
    setDeleteId(deliveryId);
  };

  const deleteDeliveryHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await AdminService.updateDeliveryStatus(
        deleteId,
        "cancelled"
      );

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          message: response.msg,
        }),
      ]);

      const deliveries = await AdminService.getDeliveries();
      setDeliveries(deliveries);
      setDeleteId("");
    } catch (error) {
      const err = error.response.data.msg;

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          message: err,
          type: "error",
        }),
      ]);
    }
  };

  useEffect(() => {
    async function fetchDeliveries() {
      const response = await AdminService.getDeliveries();
      setDeliveries(response);
    }

    fetchDeliveries();
  }, []);

  useEffect(() => {
    async function fetchPartners() {
      const { partners } = await AdminService.getUsers();
      setPartners(partners);
    }

    async function fetchMembers() {
      const { members } = await AdminService.getUsers();
      setMembers(members);
    }

    async function fetchVolunteers() {
      const { volunteers } = await AdminService.getUsers();
      setVolunteers(volunteers);
    }

    async function fetchCaregivers() {
      const { caregivers } = await AdminService.getUsers();
      setCaregivers(caregivers);
    }

    fetchVolunteers();
    fetchMembers();
    fetchPartners();
    fetchCaregivers();
  }, [deliveries]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <label htmlFor={`newDelivery`} className="btn btn-error my-4">
          Create new delivery
        </label>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full shadow-lg">
            <thead>
              <tr>
                <th>Delivery Id</th>
                <th>Delivery date</th>
                <th>Dietary restrictions</th>
                <th>Delivered for</th>
                <th>Caregiver</th>
                <th>Delivered by</th>
                <th>Partner</th>
                <th>Status</th>
                <th>Comment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {deliveries &&
                deliveries.map((delivery) => (
                  <tr key={delivery._id} className="hover">
                    <th>{delivery._id}</th>
                    <td>{delivery.deliveryDate}</td>
                    <td>{delivery.dietaryRestrictions.join(", ")}</td>
                    <td>{delivery.deliveredFor.firstName}</td>

                    <td>{delivery.caregiver?.firstName || "No Caregiver"}</td>
                    <td>{delivery.deliveredBy.firstName}</td>
                    <td>{delivery.partner.businessName}</td>
                    <td>{delivery.status}</td>
                    <td>{delivery.comment}</td>
                    <td>
                      <div className="flex flex-col items-center gap-2">
                        <label
                          htmlFor={`editDelivery`}
                          className="btn btn-primary w-[12rem]"
                          onClick={() => handleEditDelivery(delivery._id)}
                        >
                          Edit delivery
                        </label>
                        <label
                          htmlFor={`deleteDelivery`}
                          className="btn btn-error  w-[12rem]"
                          onClick={() => handledeleteDelivery(delivery._id)}
                        >
                          Cancel delivery
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Delivery Id</th>
                <th>Delivery Date</th>
                <th>Dietary restrictions</th>
                <th>deliveredFor</th>
                <th>caregiver</th>
                <th>deliveredBy</th>
                <th>partner</th>
                <th>Status</th>
                <th>comment</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <input type="checkbox" id="newDelivery" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">New delivery:</h3>
          <form className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label font-bold">Delivery Date</label>
              <input
                type="date"
                className="input input-bordered"
                value={newDelivery.deliveryDate}
                placeholder="Delivery Date"
                onChange={(e) =>
                  setNewDelivery({
                    ...newDelivery,
                    deliveryDate: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Dietary restrictions</label>
              <div className="flex gap-2 flex-wrap">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newDelivery.dietaryRestrictions.includes(
                      "vegetarian"
                    )}
                    value="vegetarian"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Vegetarian</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newDelivery.dietaryRestrictions.includes("halal")}
                    value="halal"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Halal</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newDelivery.dietaryRestrictions.includes(
                      "gluten-free"
                    )}
                    value="gluten-free"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Gluten-free</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newDelivery.dietaryRestrictions.includes(
                      "low-calories"
                    )}
                    value="low-calories"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Low calories</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newDelivery.dietaryRestrictions.includes(
                      "low-carb"
                    )}
                    value="low-carb"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Low carb</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newDelivery.dietaryRestrictions.includes("vegan")}
                    value="vegan"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Vegan</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newDelivery.dietaryRestrictions.includes("kosher")}
                    value="kosher"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Kosher</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newDelivery.dietaryRestrictions.includes(
                      "lactose-intolerant"
                    )}
                    value="lactose-intolerant"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Lactose intolerant</label>
                </div>
              </div>
              <div>
                <label className="label font-bold">Delivered for</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={newDelivery.deliveredFor?._id}
                  onChange={(e) =>
                    setNewDelivery({
                      ...newDelivery,
                      deliveredFor: e.target.value,
                    })
                  }
                >
                  <option value="">Select a member</option>
                  {members.map((member) => (
                    <option key={member._id} value={member._id}>
                      {member.firstName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label font-bold">Caretaker</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={newDelivery.caregiver._id}
                  onChange={(e) =>
                    setNewDelivery({
                      ...newDelivery,
                      caregiver: e.target.value,
                    })
                  }
                >
                  <option value="">Select a caregiver</option>
                  {caregivers.map((caregiver) => (
                    <option key={caregiver._id} value={caregiver._id}>
                      {caregiver.firstName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label font-bold">Delivered By</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={newDelivery.deliveredBy?._id}
                  onChange={(e) =>
                    setNewDelivery({
                      ...newDelivery,
                      deliveredBy: e.target.value,
                    })
                  }
                >
                  <option value="">Select a volunteer</option>
                  {volunteers.map((volunteer) => (
                    <option key={volunteer._id} value={volunteer._id}>
                      {volunteer.firstName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label font-bold">Partner</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={newDelivery.partner._id}
                  onChange={(e) =>
                    setNewDelivery({
                      ...newDelivery,
                      partner: e.target.value,
                    })
                  }
                >
                  <option value="">Select a partner</option>
                  {partners.map((partner) => (
                    <option key={partner._id} value={partner._id}>
                      {partner.businessName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label font-bold">Comments</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={newDelivery.comment}
                  placeholder="Comments"
                  onChange={(e) =>
                    setNewDelivery({
                      ...newDelivery,
                      comment: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div className="modal-action">
              <label htmlFor="newDelivery" className="btn btn-error">
                Cancel
              </label>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={newDeliveryHandler}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <input
        type="checkbox"
        id="editDelivery"
        className="modal-toggle"
        checked={!!editId}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Edit delivery: {editId ? editId : ""}
          </h3>
          <form className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label font-bold">Delivery Date</label>
              <input
                type="date"
                className="input input-bordered"
                value={editDelivery.deliveryDate.slice(0, 10)}
                placeholder="Delivery Date"
                onChange={(e) =>
                  setEditDelivery({
                    ...editDelivery,
                    deliveryDate: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Dietary restrictions</label>
              <div className="flex gap-2 flex-wrap">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editDelivery.dietaryRestrictions.includes(
                      "vegetarian"
                    )}
                    value="vegetarian"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Vegetarian</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editDelivery.dietaryRestrictions.includes("halal")}
                    value="halal"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Halal</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editDelivery.dietaryRestrictions.includes(
                      "gluten-free"
                    )}
                    value="gluten-free"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Gluten-free</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editDelivery.dietaryRestrictions.includes(
                      "low-calories"
                    )}
                    value="low-calories"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Low calories</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editDelivery.dietaryRestrictions.includes(
                      "low-carb"
                    )}
                    value="low-carb"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Low carb</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editDelivery.dietaryRestrictions.includes("vegan")}
                    value="vegan"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Vegan</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editDelivery.dietaryRestrictions.includes(
                      "kosher"
                    )}
                    value="kosher"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Kosher</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editDelivery.dietaryRestrictions.includes(
                      "lactose-intolerant"
                    )}
                    value="lactose-intolerant"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Lactose intolerant</label>
                </div>
              </div>
              <div>
                <label className="label font-bold">Delivered for</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={editDelivery.deliveredFor?._id}
                  onChange={(e) =>
                    setEditDelivery({
                      ...editDelivery,
                      deliveredFor: e.target.value,
                    })
                  }
                >
                  <option value="">Select a member</option>
                  {members.map((member) => (
                    <option key={member._id} value={member._id}>
                      {member.firstName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label font-bold">Caretaker</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={editDelivery.caregiver?._id}
                  onChange={(e) =>
                    setEditDelivery({
                      ...editDelivery,
                      caregiver: e.target.value,
                    })
                  }
                >
                  <option value="">Select a caregiver</option>
                  {caregivers.map((caregiver) => (
                    <option key={caregiver._id} value={caregiver._id}>
                      {caregiver.firstName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label font-bold">Delivered By</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={editDelivery.deliveredBy?._id}
                  onChange={(e) =>
                    setEditDelivery({
                      ...editDelivery,
                      deliveredBy: e.target.value,
                    })
                  }
                >
                  <option value="">Select a volunteer</option>
                  {volunteers.map((volunteer) => (
                    <option key={volunteer._id} value={volunteer._id}>
                      {volunteer.firstName}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="label font-bold">Partner</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={editDelivery.partner._id}
                  onChange={(e) =>
                    setEditDelivery({
                      ...editDelivery,
                      partner: e.target.value,
                    })
                  }
                >
                  <option value="">Select a partner</option>
                  {partners.map((partner) => (
                    <option key={partner._id} value={partner._id}>
                      {partner.businessName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-control">
                <label className="label font-bold">Comments</label>
                <input
                  type="text"
                  className="input input-bordered"
                  value={editDelivery.comment}
                  placeholder="Comments"
                  onChange={(e) =>
                    setEditDelivery({
                      ...editDelivery,
                      comment: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div className="modal-action">
              <label
                htmlFor="editDelivery"
                className="btn btn-error"
                onClick={() => {
                  setEditId(null);
                }}
              >
                Cancel
              </label>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={editDeliveryHandler}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <input
        type="checkbox"
        id="deleteDelivery"
        className="modal-toggle"
        checked={!!deleteId}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to cancel this delivery?
          </h3>
          <form onSubmit={deleteDeliveryHandler}>
            <div className="modal-action">
              <label
                htmlFor="deleteDelivery"
                className="btn btn-error"
                onClick={() => {
                  setDeleteId(null);
                }}
              >
                Cancel
              </label>
              <button type="submit" className="btn btn-primary">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDeliveryControl;
