import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VolunteerService from "../services/VolunteerService";

const VolunteerForm = () => {
  const navigate = useNavigate();
  const [isAllDaysChecked, setIsAllDaysChecked] = useState(false);
  const [days, setDays] = useState([]);

  const inputChangeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    let daysArray = days || [];

    if (value) {
      // If the checkbox is checked, add the value to the list
      daysArray.push(name);
    } else {
      // If the checkbox is unchecked, remove the value from the list
      const index = daysArray.indexOf(name);
      if (index !== -1) {
        daysArray = [
          ...daysArray.slice(0, index),
          ...daysArray.slice(index + 1),
        ];
      }
    }

    // Update the partner with the new list of dietary days
    setDays(daysArray);
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

    setDays(newDaysAvailable);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName?.value;
    const lastName = e.target.lastName?.value;
    const emailAddress = e.target.emailAddress?.value;
    const address = e.target.address?.value;
    const contactNumber = e.target.contactNumber?.value;
    const daysAvailable = days;
    const serviceProvided = e.target.serviceProvided?.value;
    const password = e.target.password?.value;

    const response = await VolunteerService.signup({
      firstName,
      lastName,
      emailAddress,
      address,
      contactNumber,
      daysAvailable,
      serviceProvided,
      password,
    });

    console.log(response);
  };

  const handleLink = (path) => {
    navigate(path);
  };

  return (
    <div className="text-white">
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
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mr-4">Full Address</label>
            <input
              type="text"
              name="address"
              className="w-[30rem] input text-black"
              placeholder="Address:"
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
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mr-4">Available Days</label>
            <div className="grid grid-cols-3 gap-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="monday"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                  checked={days.includes("monday")}
                />
                Monday
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="tuesday"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                  checked={days.includes("tuesday")}
                />
                Tuesday
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="wednesday"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                  checked={days.includes("wednesday")}
                />
                Wednesday
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="thursday"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                  checked={days.includes("thursday")}
                />
                Thursday
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="friday"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                  checked={days.includes("friday")}
                />
                Friday
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="saturday"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                  checked={days.includes("saturday")}
                />
                Saturday
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="sunday"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                  checked={days.includes("sunday")}
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
            <button type="submit" className="btn ml-10 w-40 btn-primary">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default VolunteerForm;
