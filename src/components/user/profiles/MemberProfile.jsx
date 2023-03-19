import ProfilePic from "images/user.png";

const MemberProfile = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="avatar">
          <div className="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mt-10 mb-6">
            <img src={ProfilePic} />
          </div>
        </div>
        <div className="bg-accent shadow-md rounded-lg p-10 flex flex-col items-center text-white">
          <div className="bg-primary rounded-md p-6 mb-6">
            <h2 className="text-center mb-4 text-2xl">Member's Information</h2>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-10 text-xl">First Name</h3>
            </div>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-10 text-xl">Last Name</h3>
            </div>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-10 text-xl">Email</h3>
            </div>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-10 text-xl">Full Address</h3>
            </div>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-10 text-xl">Contact Number</h3>
            </div>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-10 text-xl">Birthday</h3>
            </div>
          </div>
          <div className="bg-secondary rounded-md p-6 mb-6">
            <h2 className="text-center mb-4 text-2xl">Medical Information</h2>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-10 text-xl">Dietary Restrictions</h3>
            </div>
            <div className="rounded-box w-[40rem] bg-base-100 ring-4 ring-black text-black p-2 mb-5">
              <h3 className="pl-10 text-xl">Food Allergies</h3>
            </div>
          </div>
          <div>
            <button className="btn btn-primary text-lg pt-1">
              Update Profile
            </button>
          </div>
        </div>
        <div>
          <button className="btn btn-outline btn-error text-lg pt-1 mt-4">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default MemberProfile;
