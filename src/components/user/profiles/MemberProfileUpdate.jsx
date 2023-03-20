import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../generic/BackButton";
import MemberService from "../../services/MemberService";

const MemberProfileUpdate = (props) => {
  const { isLoggedIn, userDetails } = props;
  const [member, setMember] = useState({
    firstName: "",
    lastName: "",
    birthdate: "",
    emailAddress: "",
    address: "",
    contactNumber: "",
    dietaryRestrictions: "",
    foodAllergies: "",
  });

  const [isAllergic, setIsAllergic] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/userLogin");
    } else {
      setMember({
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        birthdate: userDetails.birthdate.slice(0, 10),
        emailAddress: userDetails.emailAddress,
        address: userDetails.address.fullAddress,
        contactNumber: userDetails.contactNumber,
        dietaryRestrictions: userDetails.dietaryRestrictions,
        foodAllergies: userDetails.foodAllergies,
      });
    }
  }, [isLoggedIn, userDetails]);

  // Check checkbox if dietary restriction is present using useEffect
  useEffect(() => {
    const updateProfileForm = document.getElementById("updateProfileForm");
    const checkboxes = updateProfileForm.querySelectorAll(
      "input[type=checkbox]"
    );

    checkboxes.forEach((checkbox) => {
      if (member.dietaryRestrictions.includes(checkbox.name)) {
        checkbox.checked = true;
      }

      if (member.foodAllergies?.length > 0) {
        setIsAllergic(true);
      }
    });
  }, [member]);

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
        member.foodAllergies = [];
      }

      // Update the member with the new list of dietary restrictions
      setMember({
        ...member,
        dietaryRestrictions: restrictions,
      });
    } else {
      // For food allergies
      if (name === "foodAllergies") {
        // Get the current list of food allergies
        return setMember({
          ...member,
          foodAllergies: value.split(",").map((item) => item.trim()),
        });
      }

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

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await MemberService.update(member);
    } catch (error) {
      console.log(error);
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
            id="updateProfileForm"
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
                className="w-[30rem] input text-black"
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
                className="w-[30rem] input text-black"
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
                className="w-[30rem] input text-black"
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
                className="w-[30rem] input text-black"
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
                      className="w-[30rem] input text-black"
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
