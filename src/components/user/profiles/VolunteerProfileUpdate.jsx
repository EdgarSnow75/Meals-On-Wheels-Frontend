import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../generic/BackButton";

const VolunteerProfileUpdate = () => {
  const [volunteer, setVolunteer] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    address: "",
    contactNumber: "",
    daysAvailable: "",
    serviceProvided: "",
    password: "",
  });
  const navigate = useNavigate();
  const [isAllDaysChecked, setIsAllDaysChecked] = useState(false);

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
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ]
      : [];
    setVolunteer((prevVolunteer) => ({
      ...prevVolunteer,
      daysAvailable: newDaysAvailable,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("hi");
    console.log(volunteer);
    alert("Your profile as been updated successfully");
    console.log(volunteer);
    console.log(volunteer.firstName);
    console.log(volunteer.address);
    console.log(volunteer.emailAddress);
    console.log(volunteer.daysAvailable);
    console.log(volunteer.password);
    console.log(volunteer.serviceProvided);
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
            className="mt-8 max-w-md grid grid-cols-1 gap-6"
          >
            <div className="flex flex-col">
              <label className="mr-4">First Name</label>
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
              <label className="mr-4">Last Name</label>
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
              <label className="mr-4">Email Address</label>
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
              <label className="mr-4">Full Address</label>
              <input
                type="text"
                name="userAddress"
                className="w-[30rem] input text-black"
                placeholder="Address:"
                value={volunteer.fullAddress}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Contact Number</label>
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
              <label className="mr-4">Available Days</label>
              <div className="grid grid-cols-3 gap-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Monday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("Monday")}
                    onChange={inputChangeHandler}
                  />
                  Monday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Tuesday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("Tuesday")}
                    onChange={inputChangeHandler}
                  />
                  Tuesday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Wednesday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("Wednesday")}
                    onChange={inputChangeHandler}
                  />
                  Wednesday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Thursday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("Thursday")}
                    onChange={inputChangeHandler}
                  />
                  Thursday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Friday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("Friday")}
                    onChange={inputChangeHandler}
                  />
                  Friday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Saturday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("Saturday")}
                    onChange={inputChangeHandler}
                  />
                  Saturday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Sunday"
                    className="mr-2 checkbox-secondary"
                    checked={volunteer.daysAvailable?.includes("Sunday")}
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
              <label className="mr-4">Select your Service Type</label>
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
            <div className="flex flex-col">
              <label className="mr-4">Password</label>
              <input
                type="password"
                name="password"
                className="w-[30rem] input text-black"
                placeholder="Password"
                value={volunteer.password}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div>
              <label className="mr-4 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 checkbox-secondary"
                  required
                />
                By signing up, you agree to our
                <a
                  onClick={() => handleLink("/privacyPolicy")}
                  className="link link-primary ml-1"
                >
                  Terms & Conditions
                </a>
              </label>
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
export default VolunteerProfileUpdate;
