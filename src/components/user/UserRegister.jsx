import { useState } from "react";
import CareTakerForm from "./CareTakerForm";
import MemberRegisterFrom from "./MemberRegisterForm";
import PartnerForm from "./PartnerForm";
import VolunteerForm from "./VolunteerForm";

const UserRegister = () => {
  const [form, setForm] = useState("Member");

  const onChangeHandler = (event) => {
    const target = event.target;
    setForm(target.value);
    console.log(form);
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-6xl my-4">Sign Up</h2>
        <div className="flex flex-col">
          <label className="mb-2">Select how you want to sign up as</label>
          <select onChange={onChangeHandler}>
            <option value="" disabled></option>
            <option value="Member" selected>
              Member
            </option>
            <option value="Caretaker">Caretaker</option>
            <option value="Partner">Partner</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
        {form === "Member" && <MemberRegisterFrom />}
        {form === "Caretaker" && <CareTakerForm />}
        {form === "Partner" && <PartnerForm />}
        {form === "Volunteer" && <VolunteerForm />}
      </div>
    </div>
  );
};

export default UserRegister;
