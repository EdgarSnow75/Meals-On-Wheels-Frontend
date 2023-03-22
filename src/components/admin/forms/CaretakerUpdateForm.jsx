import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../../generic/BackButton";
import CaregiverService from "../../services/CaregiverService";
import ToastProps from "../../generic/ToastProps";
import AdminService from "../../services/AdminService";

const CaretakerUpdateForm = (props) => {
  const { setToasts } = props;
  const { id } = useParams();
  const [caretaker, setCaretaker] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    address: "",
    contactNumber: "",
    relationshipToMember: "",
  });

  const [isAllergic, setIsAllergic] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const userData = await AdminService.getUser(id);

      setCaretaker({
        ...userData,
      });
    }
    fetchUser();
  }, [id]);

  const inputCaretakerChangeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setCaretaker({
      ...caretaker,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await AdminService.updateUser(caretaker, id);
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
          <form onSubmit={submitHandler} id="updateProfileForm">
            <div className="mt-8 max-w-md grid grid-cols-1 gap-6">
              <h2 className="font-bold text-xl text-primary pb-2 border-b-4 border-primary w-[30rem]">
                Caretaker's Details
              </h2>
              <div className="flex flex-col">
                <label className="mr-4">Your First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-[30rem] input text-black"
                  placeholder="First Name"
                  value={caretaker.firstName}
                  onChange={inputCaretakerChangeHandler}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mr0-4">Your Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-[30rem] input text-black"
                  placeholder="Last Name"
                  value={caretaker.lastName}
                  onChange={inputCaretakerChangeHandler}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mr-4">Your Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  className="w-[30rem] input text-black"
                  placeholder="Email"
                  value={caretaker.emailAddress}
                  onChange={inputCaretakerChangeHandler}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mr-4">Your Full Address</label>
                <input
                  type="text"
                  name="address"
                  className="w-[30rem] input text-black"
                  placeholder="Address:"
                  value={caretaker.address?.fullAddress}
                  onChange={inputCaretakerChangeHandler}
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mr-4">Your Contact Number</label>
                <input
                  type="text"
                  name="contactNumber"
                  className="w-[30rem] input text-black"
                  placeholder="Contact"
                  value={caretaker.contactNumber}
                  onChange={inputCaretakerChangeHandler}
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
                  value={caretaker.relationshipToMember}
                  onChange={inputCaretakerChangeHandler}
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

              <div className="flex justify-center items-center">
                <BackButton />
                <button type="submit" className="btn ml-10 w-40 btn-primary">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default CaretakerUpdateForm;
