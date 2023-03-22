import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminService from "../services/AdminService";
import PublicService from "../services/PublicService";
import ToastProps from "../generic/ToastProps";

const AdminScheduleControl = (props) => {
  const { setToasts } = props;
  const navigate = useNavigate();
  const [schedules, setSchedules] = useState([]);
  const [partners, setPartners] = useState([]);

  const [newSchedule, setNewSchedule] = useState({
    weekNumber: "",
    days: [],
    dietaryRestrictions: [],
    partner: "",
  });

  const newDays = (e) => {
    const { value } = e.target;
    const days = newSchedule.days;
    if (days.includes(value)) {
      const index = days.indexOf(value);
      days.splice(index, 1);
    } else {
      days.push(value);
    }
    setNewSchedule({ ...newSchedule, days });
  };

  const newDietaryRestrictions = (e) => {
    const { value } = e.target;
    const dietaryRestrictions = newSchedule.dietaryRestrictions;
    if (dietaryRestrictions.includes(value)) {
      const index = dietaryRestrictions.indexOf(value);
      dietaryRestrictions.splice(index, 1);
    } else {
      dietaryRestrictions.push(value);
    }
    setNewSchedule({ ...newSchedule, dietaryRestrictions });
  };

  const newScheduleHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await AdminService.createSchedule(newSchedule);

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          message: response.msg,
        }),
      ]);

      const schedules = await PublicService.getSchedules();

      setSchedules(schedules);

      const newScheduleInput = document.getElementById("newSchedule");

      newScheduleInput.checked = false;
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
  const [editSchedule, setEditSchedule] = useState({
    weekNumber: "",
    days: [],
    dietaryRestrictions: [],
    partner: "",
  });

  const handleEditSchedule = async (scheduleId) => {
    const response = await PublicService.getSchedule(scheduleId);
    setEditSchedule(response);
    setEditId(scheduleId);
  };

  const editDays = (e) => {
    const { value } = e.target;
    const days = editSchedule.days;
    if (days.includes(value)) {
      const index = days.indexOf(value);
      days.splice(index, 1);
    } else {
      days.push(value);
    }
    setEditSchedule({ ...editSchedule, days });
  };

  const editDietaryRestrictions = (e) => {
    const { value } = e.target;
    const dietaryRestrictions = editSchedule.dietaryRestrictions;
    if (dietaryRestrictions.includes(value)) {
      const index = dietaryRestrictions.indexOf(value);
      dietaryRestrictions.splice(index, 1);
    } else {
      dietaryRestrictions.push(value);
    }
    setEditSchedule({ ...editSchedule, dietaryRestrictions });
  };

  const editScheduleHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await AdminService.updateSchedule(editSchedule, editId);

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          message: response.msg,
        }),
      ]);

      const schedules = await PublicService.getSchedules();

      setSchedules(schedules);
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

  const handleDeleteSchedule = (scheduleId) => {
    setDeleteId(scheduleId);
  };

  const deleteScheduleHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await AdminService.deleteSchedule(deleteId);

      setToasts((prev) => [
        ...prev,
        new ToastProps({
          message: response.msg,
        }),
      ]);

      const schedules = await PublicService.getSchedules();

      setSchedules(schedules);
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
    async function fetchSchedules() {
      const response = await PublicService.getSchedules();
      setSchedules(response);
    }

    fetchSchedules();

    async function fetchPartners() {
      const { partners } = await AdminService.getUsers();
      setPartners(partners);
    }

    fetchPartners();
  }, [schedules]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <label htmlFor={`newSchedule`} className="btn btn-error my-4">
          Create new schedule
        </label>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full shadow-lg">
            <thead>
              <tr>
                <th>Schedule Id</th>
                <th>Week number</th>
                <th>Days</th>
                <th>Dietary restrictions</th>
                <th>Partner</th>
                <th>Created by</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schedules &&
                schedules.map((schedule) => (
                  <tr key={schedule._id} className="hover">
                    <th>{schedule._id}</th>
                    <td>{schedule.weekNumber}</td>
                    <td>{schedule.days.join(", ")}</td>
                    <td>{schedule.dietaryRestrictions.join(", ")}</td>
                    <td>{schedule.partner.businessName}</td>
                    <td>{schedule.createdBy}</td>
                    <td>
                      <div className="flex flex-col items-center gap-2">
                        <label
                          htmlFor={`editSchedule`}
                          className="btn btn-primary w-[12rem]"
                          onClick={() => handleEditSchedule(schedule._id)}
                        >
                          Edit schedule
                        </label>
                        <label
                          htmlFor={`deleteSchedule`}
                          className="btn btn-error  w-[12rem]"
                          onClick={() => handleDeleteSchedule(schedule._id)}
                        >
                          Delete schedule
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <th>Schedule Id</th>
                <th>Week number</th>
                <th>Days</th>
                <th>Dietary restrictions</th>
                <th>Partner</th>
                <th>Created by</th>
                <th>Actions</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <input type="checkbox" id="newSchedule" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">New schedule:</h3>
          <form className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label font-bold">Week number</label>
              <input
                type="number"
                className="input input-bordered"
                value={newSchedule.weekNumber}
                placeholder="Week number"
                onChange={(e) =>
                  setNewSchedule({
                    ...newSchedule,
                    weekNumber: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Days</label>
              <div className="flex gap-2 flex-wrap">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.days.includes("monday")}
                    value="monday"
                    onChange={newDays}
                  />
                  <label>Monday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.days.includes("tuesday")}
                    value="tuesday"
                    onChange={newDays}
                  />
                  <label>Tuesday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.days.includes("wednesday")}
                    value="wednesday"
                    onChange={newDays}
                  />
                  <label>Wednesday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.days.includes("thursday")}
                    value="thursday"
                    onChange={newDays}
                  />
                  <label>Thursday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.days.includes("friday")}
                    value="friday"
                    onChange={newDays}
                  />
                  <label>Friday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.days.includes("saturday")}
                    value="saturday"
                    onChange={newDays}
                  />
                  <label>Saturday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.days.includes("sunday")}
                    value="sunday"
                    onChange={newDays}
                  />
                  <label>Sunday</label>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label font-bold">Dietary restrictions</label>
              <div className="flex gap-2 flex-wrap">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.dietaryRestrictions.includes(
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
                    checked={newSchedule.dietaryRestrictions.includes("halal")}
                    value="halal"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Halal</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.dietaryRestrictions.includes(
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
                    checked={newSchedule.dietaryRestrictions.includes(
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
                    checked={newSchedule.dietaryRestrictions.includes(
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
                    checked={newSchedule.dietaryRestrictions.includes("vegan")}
                    value="vegan"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Vegan</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.dietaryRestrictions.includes("kosher")}
                    value="kosher"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Kosher</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={newSchedule.dietaryRestrictions.includes(
                      "lactose-intolerant"
                    )}
                    value="lactose-intolerant"
                    onChange={newDietaryRestrictions}
                  />
                  <label>Lactose intolerant</label>
                </div>
              </div>
              <div>
                <label className="label font-bold">Partner</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={newSchedule.partner._id}
                  onChange={(e) =>
                    setNewSchedule({
                      ...newSchedule,
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
            </div>
            <div className="modal-action">
              <label htmlFor="newSchedule" className="btn btn-error">
                Cancel
              </label>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={newScheduleHandler}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <input
        type="checkbox"
        id="editSchedule"
        className="modal-toggle"
        checked={!!editId}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Edit schedule: {editId ? editId : ""}
          </h3>
          <form className="flex flex-col gap-4">
            <div className="form-control">
              <label className="label font-bold">Week number</label>
              <input
                type="number"
                className="input input-bordered"
                value={editSchedule.weekNumber}
                onChange={(e) =>
                  setEditSchedule({
                    ...editSchedule,
                    weekNumber: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-control">
              <label className="label font-bold">Days</label>
              <div className="flex gap-2 flex-wrap">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editSchedule.days.includes("monday")}
                    value="monday"
                    onChange={editDays}
                  />
                  <label>Monday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editSchedule.days.includes("tuesday")}
                    value="tuesday"
                    onChange={editDays}
                  />
                  <label>Tuesday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editSchedule.days.includes("wednesday")}
                    value="wednesday"
                    onChange={editDays}
                  />
                  <label>Wednesday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editSchedule.days.includes("thursday")}
                    value="thursday"
                    onChange={editDays}
                  />
                  <label>Thursday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editSchedule.days.includes("friday")}
                    value="friday"
                    onChange={editDays}
                  />
                  <label>Friday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editSchedule.days.includes("saturday")}
                    value="saturday"
                    onChange={editDays}
                  />
                  <label>Saturday</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editSchedule.days.includes("sunday")}
                    value="sunday"
                    onChange={editDays}
                  />
                  <label>Sunday</label>
                </div>
              </div>
            </div>
            <div className="form-control">
              <label className="label font-bold">Dietary restrictions</label>
              <div className="flex gap-2 flex-wrap">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editSchedule.dietaryRestrictions.includes(
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
                    checked={editSchedule.dietaryRestrictions.includes("halal")}
                    value="halal"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Halal</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editSchedule.dietaryRestrictions.includes(
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
                    checked={editSchedule.dietaryRestrictions.includes(
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
                    checked={editSchedule.dietaryRestrictions.includes(
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
                    checked={editSchedule.dietaryRestrictions.includes("vegan")}
                    value="vegan"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Vegan</label>
                </div>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={editSchedule.dietaryRestrictions.includes(
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
                    checked={editSchedule.dietaryRestrictions.includes(
                      "lactose-intolerant"
                    )}
                    value="lactose-intolerant"
                    onChange={editDietaryRestrictions}
                  />
                  <label>Lactose intolerant</label>
                </div>
              </div>
              <div>
                <label className="label font-bold">Partner</label>
                <select
                  className="select select-bordered w-full max-w-xs"
                  value={editSchedule.partner._id}
                  onChange={(e) =>
                    setEditSchedule({
                      ...editSchedule,
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
            </div>
            <div className="modal-action">
              <label
                htmlFor="editSchedule"
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
                onClick={editScheduleHandler}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <input
        type="checkbox"
        id="deleteSchedule"
        className="modal-toggle"
        checked={!!deleteId}
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this schedule?
          </h3>
          <form onSubmit={deleteScheduleHandler}>
            <div className="modal-action">
              <label
                htmlFor="deleteSchedule"
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

export default AdminScheduleControl;
