import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CaregiverService from "../services/CaregiverService";

const CareTakerForm = () => {
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
    const firstName = e.target.cFirstName?.value;
    const lastName = e.target.cLastName?.value;
    const emailAddress = e.target.cEmailAddress?.value;
    const address = e.target.cAddress?.value;
    const contactNumber = e.target.cContactNumber?.value;
    const relationshipToMember = e.target.relationshipToMember?.value;
    const password = e.target.cPassword?.value;

    const memberDetails = {
      firstName: e.target.firstName?.value,
      lastName: e.target.lastName?.value,
      birthdate: e.target.birthdate?.value,
      emailAddress: e.target.emailAddress?.value,
      address: e.target.address?.value,
      contactNumber: e.target.contactNumber?.value,
      dietaryRestrictions: restrictions,
      foodAllergies: allergies.split(",") || [],
      password: e.target.password?.value,
    };

    const response = await CaregiverService.signup({
      firstName,
      lastName,
      emailAddress,
      address,
      contactNumber,
      relationshipToMember,
      password,
      memberDetails,
    });

    console.log(response);
  };

  const handleLink = (path) => {
    navigate(path);
  };

  const handleGeoLocation = async () => {
    const coords = await LocationService.getCoordinates();

    console.log(coords);
  };

  return (
    <div className="text-white">
      <div className="rounded-md w-[35rem] shadow-md p-10 pt-2 my-4 ring-[0.5px] ring-[rgba(0,0,0,0.2) bg-accent">
        <form onSubmit={submitHandler}>
          <div className="mt-8 max-w-md grid grid-cols-1 gap-6">
            <h2 className="font-bold text-xl text-primary pb-2 border-b-4 border-primary w-[30rem]">
              Caretaker's Details
            </h2>
            <div className="flex flex-col">
              <label className="mr-4">Your First Name</label>
              <input
                type="text"
                name="cFirstName"
                className="w-[30rem] input text-black"
                placeholder="First Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr0-4">Your Last Name</label>
              <input
                type="text"
                name="cLastName"
                className="w-[30rem] input text-black"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Your Email Address</label>
              <input
                type="email"
                name="cEmailAddress"
                className="w-[30rem] input text-black"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Your Full Address</label>
              <input
                type="text"
                name="cAddress"
                className="w-[30rem] input text-black"
                placeholder="Address:"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Your Contact Number</label>
              <input
                type="text"
                name="cContactNumber"
                className="w-[30rem] input text-black"
                placeholder="Contact"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">
                Your relationship with the dependent member
              </label>
              <select
                name="relationshipToMember"
                className="w-[30rem] input text-black"
                required
              >
                <option value="">Select Relationship</option>
                <option value="Parent">Parent</option>
                <option value="Guardian">Guardian</option>
                <option value="Nurse">Nurse</option>
                <option value="Relative">Relative</option>
                <option value="Caregiver">Caregiver</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mr-4 mb-2">
                Documents to support your relationship
              </label>
              <input
                type="file"
                name="file"
                className="file:py-2 file:px-4 file:rounded-full file:border-0 file:text-md file:font-semibold
              file:bg-primary file:text-white
              hover:file:bg-primary-focus"
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Yours Password</label>
              <input
                type="password"
                name="cPassword"
                className="w-[30rem] input text-black"
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div className="mt-12 max-w-md grid grid-cols-1 gap-6">
            <h2 className="font-bold text-xl text-primary pb-2 border-b-4 border-primary w-[30rem]">
              Dependent Member's Details
            </h2>
            <div className="flex flex-col">
              <label className="mr-4">Member's First Name</label>
              <input
                type="text"
                name="firstName"
                className="w-[30rem] input text-black"
                placeholder="First Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr0-4">Member's Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-[30rem] input text-black"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr0-4">Member's Birthday</label>
              <input
                type="date"
                name="birthdate"
                className="w-[30rem] input text-black"
                placeholder="Birthday"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Member's Email Address</label>
              <input
                type="email"
                name="emailAddress"
                className="w-[30rem] input text-black"
                placeholder="Email"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Member's Full Address</label>
              <input
                type="text"
                name="userAddress"
                className="w-[30rem] input text-black"
                placeholder="Address:"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Member's Contact Number</label>
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
              <label className="mr-4">Member's Password</label>
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
          </div>
        </form>
      </div>
    </div>
  );
};
export default CareTakerForm;
