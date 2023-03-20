import userService from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const UserLogin = (props) => {
  const { isLoggedIn, setIsLoggedIn, setUserType, setUserDetails, userType } =
    props;

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      switch (userType) {
        case "member":
          navigate("/memberProfile");
          break;
        case "caretaker":
          navigate("/caretakerProfile");
          break;
        case "partner":
          navigate("/partnerProfile");
          break;
        case "volunteer":
          navigate("/volunteerProfile");
          break;
        case "admin":
          navigate("/adminDashboard");
          break;
      }
    }
  }, [isLoggedIn]);

  async function handleLogin(e) {
    e.preventDefault();

    const emailAddress = e.target.emailAddress?.value;
    const password = e.target.password?.value;

    const credentials = {
      emailAddress,
      password,
    };

    const { userType } = await userService.login(credentials);

    setUserType(userType);

    const userDetails = await userService.getUserDetails();

    setUserDetails(userDetails);
    setIsLoggedIn(true);
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-6xl my-4">Login In</h2>
        </div>
        <div className="rounded-md w-[30rem] shadow-md p-10 pt-6 my-4 ring-[0.5px] ring-[rgba(0,0,0,0.2) bg-accent text-white">
          <h3 className="text-center mb-4 text-xl">
            Login using your existing account
          </h3>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col mb-4">
              <label className="mr-4">Your Email</label>
              <input
                type="email"
                name="emailAddress"
                className="w-90 input text-black"
                placeholder="Email address"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mr-4">Password</label>
              <input
                type="password"
                name="password"
                className="w-90 input text-black"
                placeholder="Password"
                required
              />
            </div>
            <div className="flex justify-center items-center">
              <button type="submit" className="btn w-32 btn-primary mt-6 mb-2">
                Login
              </button>
            </div>
            <div>
              <a
                onClick={() => handleLink("/forgetPassword")}
                className="link link-primary ml-1"
              >
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
