import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../generic/BackButton";

const MemberProfileUpdate = () => {
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    emailAddress: "",
    address: "",
    contactNumber: "",
    dietaryRestrictions: "",
    foodAllergies: "",
    password: "",
  });

  const [isAllergic, setIsAllergic] = useState(false);
  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    if (target.type === "checkbox") {
      // Get the current list of dietary restrictions
      let restrictions = member.dietaryRestrictions || [];

      if (value) {
        // If the checkbox is checked, add the value to the list
        restrictions.push(name);
      } else {
        // If the checkbox is unchecked, remove the value from the list
        const index = restrictions.indexOf(name);
        if (index !== -1) {
          restrictions = [
            ...restrictions.slice(0, index),
            ...restrictions.slice(index + 1),
          ];
        }
      }
      if (name === "foodAllergic" && !checked) {
        member.foodAllergies = "";
      }

      // Update the member with the new list of dietary restrictions
      setMember({
        ...member,
        dietaryRestrictions: restrictions,
      });
    } else {
      // For other input types, update the member with the new value
      setMember({
        ...member,
        [name]: value,
      });
    }
  };

  const hiddenInputHandler = (event) => {
    if (event.target.checked) {
      setIsAllergic(true);
    } else {
      setIsAllergic(false);
    }
  };

  const submitHandler = () => {
    console.log("hi");
    alert("Your profile as been updated successfully");
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
                className="w-[30rem] input"
                placeholder="First Name"
                value={member.firstName}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr0-4">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="w-[30rem] input"
                placeholder="Last Name"
                value={member.lastName}
                onChange={inputChangeHandler}
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
                value={member.birthdate}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                className="w-[30rem] input"
                placeholder="Email"
                value={member.emailAddress}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Full Address</label>
              <input
                type="text"
                name="userAddress"
                className="w-[30rem] input"
                placeholder="Address:"
                value={member.address}
                onChange={inputChangeHandler}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                className="w-[30rem] input"
                placeholder="Contact"
                value={member.contactNumber}
                onChange={inputChangeHandler}
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
                    checked={member.dietaryRestrictions?.includes("vegetarian")}
                    onChange={inputChangeHandler}
                  />
                  Vegetarian
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="halal"
                    className="mr-2 checkbox-secondary"
                    checked={member.dietaryRestrictions?.includes("halal")}
                    onChange={inputChangeHandler}
                  />
                  Halal
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="glutenFree"
                    className="mr-2 checkbox-secondary"
                    checked={member.dietaryRestrictions?.includes("glutenFree")}
                    onChange={inputChangeHandler}
                  />
                  Gluten-free
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="lowCalories"
                    className="mr-2 checkbox-secondary"
                    checked={member.dietaryRestrictions?.includes(
                      "lowCalories"
                    )}
                    onChange={inputChangeHandler}
                  />
                  Low Calories
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="lowCrab"
                    className="mr-2 checkbox-secondary"
                    checked={member.dietaryRestrictions?.includes("lowCrab")}
                    onChange={inputChangeHandler}
                  />
                  Low Crab
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="vegan"
                    className="mr-2 checkbox-secondary"
                    checked={member.dietaryRestrictions?.includes("vegan")}
                    onChange={inputChangeHandler}
                  />
                  Vegan
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="kosher"
                    className="mr-2 checkbox-secondary"
                    checked={member.dietaryRestrictions?.includes("kosher")}
                    onChange={inputChangeHandler}
                  />
                  Kosher
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="lactoseIntolerant"
                    className="mr-2 checkbox-secondary"
                    checked={member.dietaryRestrictions?.includes(
                      "lactoseIntolerant"
                    )}
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
                      className="w-[30rem] input"
                      value={member.foodAllergies}
                      onChange={inputChangeHandler}
                      placeholder="Please specify your food allergies"
                    />
                  </label>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mr-4 mb-2">New Medical History Document</label>
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
                className="w-[30rem] input"
                placeholder="Password"
                value={member.password}
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
export default MemberProfileUpdate;
