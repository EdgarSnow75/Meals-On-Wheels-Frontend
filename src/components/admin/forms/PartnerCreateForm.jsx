import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../generic/BackButton";

const PartnerCreateForm = () => {
  const [partner, setPartner] = useState({
    businessName: "",
    emailAddress: "",
    address: "",
    contactNumber: "",
    daysAvailable: "",
    serviceType: "",
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
      let days = partner.daysAvailable || [];

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

      // Update the partner with the new list of dietary days
      setPartner({
        ...partner,
        daysAvailable: days,
      });
    } else {
      // For other input types, update the partner with the new value
      setPartner({
        ...partner,
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
    setPartner((prevPartner) => ({
      ...prevPartner,
      daysAvailable: newDaysAvailable,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("hi");
    console.log(partner);
    alert("You've been successfully registered as a partner!");
    console.log(partner);
    console.log(partner.businessName);
    console.log(partner.address);
    console.log(partner.emailAddress);
    console.log(partner.daysAvailable);
    console.log(partner.password);
    console.log(partner.serviceType);
  };

  const handleLink = (path) => {
    navigate(path);
  };

  return (
    <div>
      <div className="text-white flex flex-col items-center">
        <h2 className="font-bold text-4xl text-black my-4">
          Create a new partner user
        </h2>
        <div className="rounded-md w-[35rem] shadow-md p-10 pt-2 my-4 ring-[0.5px] ring-[rgba(0,0,0,0.2) bg-accent">
          <form
            onSubmit={submitHandler}
            className="mt-8 max-w-md grid grid-cols-1 gap-6"
          >
            <div className="flex flex-col">
              <label className="mr-4">Business Name</label>
              <input
                type="text"
                name="businessName"
                className="w-[30rem] input text-black"
                placeholder="Business Name"
                value={partner.businessName}
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
                value={partner.emailAddress}
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
                value={partner.fullAddress}
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
                value={partner.contactNumber}
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
                    checked={partner.daysAvailable?.includes("Monday")}
                    onChange={inputChangeHandler}
                  />
                  Monday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Tuesday"
                    className="mr-2 checkbox-secondary"
                    checked={partner.daysAvailable?.includes("Tuesday")}
                    onChange={inputChangeHandler}
                  />
                  Tuesday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Wednesday"
                    className="mr-2 checkbox-secondary"
                    checked={partner.daysAvailable?.includes("Wednesday")}
                    onChange={inputChangeHandler}
                  />
                  Wednesday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Thursday"
                    className="mr-2 checkbox-secondary"
                    checked={partner.daysAvailable?.includes("Thursday")}
                    onChange={inputChangeHandler}
                  />
                  Thursday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Friday"
                    className="mr-2 checkbox-secondary"
                    checked={partner.daysAvailable?.includes("Friday")}
                    onChange={inputChangeHandler}
                  />
                  Friday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Saturday"
                    className="mr-2 checkbox-secondary"
                    checked={partner.daysAvailable?.includes("Saturday")}
                    onChange={inputChangeHandler}
                  />
                  Saturday
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="Sunday"
                    className="mr-2 checkbox-secondary"
                    checked={partner.daysAvailable?.includes("Sunday")}
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
              <label className="mr-4 mb-2">Business License Document</label>
              <input
                type="file"
                name="file"
                className="file:py-2 file:px-4 file:rounded-full file:border-0 file:text-md file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary-focus"
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Select your Service Type</label>
              <select
                name="serviceType"
                className="w-[30rem] input text-black"
                value={partner.serviceType}
                onChange={inputChangeHandler}
                required
              >
                <option value="">Select Service Type</option>
                <option value="restraurant">
                  Restaurant (Hot and Frozen meals)
                </option>
                <option value="grocery">
                  Grocery (Ingredients and Frozen goods)
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Password</label>
              <input
                type="password"
                name="password"
                className="w-[30rem] input text-black"
                placeholder="Password"
                value={partner.password}
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
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default PartnerCreateForm;
