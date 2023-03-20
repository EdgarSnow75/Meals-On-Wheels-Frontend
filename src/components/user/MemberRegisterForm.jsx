import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocationService from "../services/LocationService";
import MemberService from "../services/MemberService";

const MemberRegisterFrom = () => {
  const [restrictions, setRestrictions] = useState([]);
  const [allergies, setAllergies] = useState("");

  const [isAllergic, setIsAllergic] = useState(false);
  const navigate = useNavigate();

  const foodAllergyHandler = (event) => {
    const value = event.target.value;

    console.log(value);

    setAllergies(value);
  };

  const inputChangeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    let restrictionsArray = restrictions || [];
    if (value) {
      // If the checkbox is checked, add the value to the list
      restrictionsArray.push(name);
    } else {
      // If the checkbox is unchecked, remove the value from the list
      const index = restrictionsArray.indexOf(name);
      if (index !== -1) {
        restrictionsArray = [
          ...restrictionsArray.slice(0, index),
          ...restrictionsArray.slice(index + 1),
        ];
      }
    }
    // Update the member with the new list of dietary restrictions
    setRestrictions(restrictionsArray);
  };

  const hiddenInputHandler = (event) => {
    if (event.target.checked) {
      setIsAllergic(true);
    } else {
      setIsAllergic(false);
      setAllergies("");
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName?.value;
    const lastName = e.target.lastName?.value;
    const birthdate = e.target.birthdate?.value;
    const emailAddress = e.target.emailAddress?.value;
    const address = e.target.address?.value;
    const contactNumber = e.target.contactNumber?.value;
    const dietaryRestrictions = restrictions;
    const foodAllergies = allergies.split(",") || [];
    const password = e.target.password?.value;

    const response = await MemberService.signup({
      firstName,
      lastName,
      birthdate,
      emailAddress,
      address,
      contactNumber,
      dietaryRestrictions,
      foodAllergies,
      password,
    });

    console.log(response);
  };

  const handleLink = (path) => {
    navigate(path);
  };

  const handleGeoLocation = (e) => {
    // Get the input field for address
    const addressInput = e.target.parentNode.children[0];
    const button = e.target;

    const successhandler = async (pos) => {
      const { latitude, longitude } = pos.coords;

      addressInput.value = "Fetching address...";
      addressInput.disabled = true;
      button.classList.add("loading");

      const response = await LocationService.toAddress({
        lat: latitude,
        long: longitude,
      });

      addressInput.value = response[0].formatted;
      addressInput.disabled = false;
      button.classList.remove("loading");
    };

    LocationService.getCoordinates(successhandler);
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
            <label className="mr0-4">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-[30rem] input text-black"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mr0-4">Birthday</label>
            <input
              type="date"
              name="birthdate"
              className="w-[30rem] input text-black"
              placeholder="Birthday"
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
            <div className="w-[30rem] flex justify-between items-center gap-2">
              <input
                type="text"
                name="address"
                className="w-full input text-black"
                placeholder="Address"
                required
              />
              <button
                className="btn btn-square btn-primary"
                onClick={handleGeoLocation}
              >
                <svg
                  fill="currentColor"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 395.71 395.71"
                  className="pointer-events-none"
                >
                  <path
                    d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
                  c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
                  C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
                  c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                  />
                </svg>
              </button>
            </div>
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
            <label className="mr-4">Dietary Restrictions</label>
            <div className="grid grid-cols-3 gap-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="vegetarian"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                />
                Vegetarian
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="halal"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                />
                Halal
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="glutenFree"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                />
                Gluten-free
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="lowCalories"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                />
                Low Calories
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="lowCrab"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                />
                Low Crab
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="vegan"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                />
                Vegan
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="kosher"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                />
                Kosher
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="lactoseIntolerant"
                  className="mr-2 checkbox-secondary"
                  onChange={inputChangeHandler}
                />
                Lactose Intolerant
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="foodAllergic"
                  className="mr-2 checkbox-primary"
                  checked={isAllergic}
                  onChange={hiddenInputHandler}
                />
                Food Allergies
              </label>
              {isAllergic && (
                <label className="">
                  <input
                    type="text"
                    name="foodAllergies"
                    className="w-[30rem] input text-black"
                    onChange={foodAllergyHandler}
                    placeholder="Please specify your food allergies and separate them by comas (,)"
                  />
                </label>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mr-4 mb-2">Medical History Document</label>
            <input
              type="file"
              name="file"
              className="file:py-2 file:px-4 file:rounded-full file:border-0 file:text-md file:font-semibold
              file:bg-primary file:text-white
              hover:file:bg-primary-focus"
            />
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
export default MemberRegisterFrom;
