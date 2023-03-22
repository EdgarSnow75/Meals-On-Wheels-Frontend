import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../generic/BackButton";
import VolunteerService from "../../services/VolunteerService";
import ToastProps from "../../generic/ToastProps";
import AdminService from "../../services/AdminService";

const VolunteerUpdateForm = (props) => {
  const { id } = useParams();
  const { setToasts } = props;
  const [volunteer, setVolunteer] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    emailAddress: "",
    address: "",
    contactNumber: "",
    daysAvailable: "",
    serviceProvided: "",
  });

  const navigate = useNavigate();
  const [isAllDaysChecked, setIsAllDaysChecked] = useState(false);

  useEffect(() => {
    async function fetchUser() {
      const userData = await AdminService.getUser(id);

      setVolunteer({
        ...userData,
        address: userData.address.fullAddress,
      });
    }
    fetchUser();
  }, [id]);

  useEffect(() => {
    const updateProfileForm = document.getElementById("updateProfileForm");
    const checkboxes = updateProfileForm.querySelectorAll(
      "input[type=checkbox]"
    );

    checkboxes.forEach((checkbox) => {
      if (volunteer.daysAvailable.includes(checkbox.name)) {
        checkbox.checked = true;
      }
    });
  }, [volunteer]);

  const inputChangeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    if (target.type === "checkbox") {
      // Get the current list of dietary days
      let days = volunteer.daysAvailable || [];

      if (value) {
        // If the checkbox is checked, add the value to the list
        days.push(name);
      } else {
        // If the checkbox is unchecked, remove the value from the list
        const index = days.indexOf(name);
        if (index !== -1) {
          days = [...days.slice(0, index), ...days.slice(index + 1)];
        }
      }

      // Update the volunteer with the new list of dietary days
      setVolunteer({
        ...volunteer,
        daysAvailable: days,
      });
    } else {
      // For other input types, update the volunteer with the new value
      setVolunteer({
        ...volunteer,
        [name]: value,
      });
    }
  };

  const handleAllDaysChange = (event) => {
    const isChecked = event.target.checked;
    setIsAllDaysChecked(isChecked);

    const newDaysAvailable = isChecked
      ? [
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
          "sunday",
        ]
      : [];
    setVolunteer((prevVolunteer) => ({
      ...prevVolunteer,
      daysAvailable: newDaysAvailable,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await AdminService.updateUser(volunteer, id);
      setToasts((toasts) => [
        ...toasts,
        new ToastProps({ message: response.msg }),
      ]);
    } catch (error) {
      const err = error.response.data.msg;
      setToasts((toasts) => [
        ...toasts,
        new ToastProps({ type: "error", message: err }),
      ]);
    }
  };

  const handleLink = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="text-white flex flex-col items-center">
        <h2 className="font-bold text-4xl text-black my-4">
          Update your profile
        </h2>
        <div className="rounded-md w-[35rem] shadow-md p-10 pt-2 my-4 ring-[0.5px] ring-[rgba(0,0,0,0.2) bg-accent">
          <form
            onSubmit={submitHandler}
            id="updateProfileForm"
            className="mt-8 max-w-md grid grid-cols-1 gap-6"
          >
            <div className="flex flex-col">
              <label className="mb-1 mr-4">First Name</label>
              <input
                type="text"
                name="firstName"
                className="w-[30rem] input text-black"
                placeholder="First Name"
                value={volunteer.firstName}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 mr-4">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-[30rem] input text-black"
                placeholder="Last Name"
                value={volunteer.lastName}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 mr-4">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                className="w-[30rem] input text-black"
                placeholder="Email"
                value={volunteer.emailAddress}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 mr-4">Full Address</label>
              <input
                type="text"
                name="address"
                className="w-[30rem] input text-black"
                placeholder="Address:"
                value={volunteer.address}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 mr-4">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                className="w-[30rem] input text-black"
                placeholder="Contact"
                value={volunteer.contactNumber}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1 mr-4">Available Days</label>
              <div className="grid grid-cols-3 gap-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Monday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("monday")}
                    onChange={inputChangeHandler}
                  />
                  Monday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Tuesday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("tuesday")}
                    onChange={inputChangeHandler}
                  />
                  Tuesday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Wednesday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("wednesday")}
                    onChange={inputChangeHandler}
                  />
                  Wednesday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Thursday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("thursday")}
                    onChange={inputChangeHandler}
                  />
                  Thursday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Friday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("friday")}
                    onChange={inputChangeHandler}
                  />
                  Friday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Saturday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("saturday")}
                    onChange={inputChangeHandler}
                  />
                  Saturday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Sunday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("sunday")}
                    onChange={inputChangeHandler}
                  />
                  Sunday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2 checkbox-secondary"
                    checked={isAllDaysChecked}
                    onChange={handleAllDaysChange}
                  />
                  All Days
                </label>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 mr-4">Select your Service Type</label>
              <select
                name="serviceProvided"
                className="w-[30rem] input text-black"
                value={volunteer.serviceProvided}
                onChange={inputChangeHandler}
                required
              >
                <option value="">Select Service Type</option>
                <option value="delivery">Delivery</option>
                <option value="logistics">Logistics</option>
              </select>
            </div>
            <div className="flex justify-center items-center">
              <BackButton />
              <button type="submit" className="btn ml-10 w-40 btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default VolunteerUpdateForm;
