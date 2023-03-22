import ProfilePic from "images/user.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CaretakerProfile = (props) => {
  const { isLoggedIn, setIsLoggedIn, userDetails } = props;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/userLogin");
    }
    if (Object.keys(userDetails).length === 0) {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn, userDetails]);

  const handleEditProfileButton = () => {
    navigate("/updateCaretakerProfile");
  };

  console.log(userDetails);

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="avatar">
          <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-10 mb-6">
            <img src={ProfilePic} />
          </div>
        </div>
        <div className="bg-accent shadow-md rounded-lg p-10 flex flex-col items-center text-white">
          <div className="bg-neutral rounded-md p-6 mb-8">
            <h2 className="text-center mb-4 text-2xl">
              Caretaker's Information
            </h2>
            <h3 className="mb-1">First Name:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">{userDetails.firstName}</h3>
            </div>
            <h3 className="mb-1">Last Name:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">{userDetails.lastName}</h3>
            </div>
            <h3 className="mb-1">Email Address:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">{userDetails.emailAddress}</h3>
            </div>
            <h3 className="mb-1">Address:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">
                {userDetails.address?.fullAddress}
              </h3>
            </div>
            <h3 className="mb-1">Contact Number:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">{userDetails.contactNumber}</h3>
            </div>
            <h3 className="mb-1">Relationship with dependent member:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">
                {userDetails.relationshipToMember}
              </h3>
            </div>
          </div>
          <div className="border-b-4 w-full mb-6"></div>
          <div className="bg-primary rounded-md p-6 mb-6">
            <h2 className="text-center mb-4 text-2xl">
              Dependent Member's Personal Information
            </h2>
            <h3 className="mb-1">First name:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">
                {userDetails.dependentMember.firstName}
              </h3>
            </div>
            <h3 className="mb-1">Last name:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">
                {userDetails.dependentMember.lastName}
              </h3>
            </div>
            <h3 className="mb-1">Email address:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">
                {userDetails.dependentMember.emailAddress}
              </h3>
            </div>
            <h3 className="mb-1">Address:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">
                {userDetails.dependentMember.address?.fullAddress}
              </h3>
            </div>
            <h3 className="mb-1">Contact number:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">
                {userDetails.dependentMember.contactNumber}
              </h3>
            </div>
            <h3 className="mb-1">Birthday:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">
                {userDetails.dependentMember.birthdate?.slice(0, 10)}
              </h3>
            </div>
          </div>
          <div className="bg-secondary rounded-md p-6 mb-6">
            <h2 className="text-center mb-4 text-2xl">Medical Information</h2>
            <h3 className="mb-1">Dietary Restrictions:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">
                {userDetails.dependentMember.dietaryRestrictions?.join(", ")}
              </h3>
            </div>
            <h3 className="mb-1">Food allergies:</h3>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-1 text-xl">
                {userDetails.dependentMember.foodAllergies?.join(", ")}
              </h3>
            </div>
          </div>
          <div>
            <button
              className="btn btn-primary text-lg pt-1"
              onClick={handleEditProfileButton}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaretakerProfile;
