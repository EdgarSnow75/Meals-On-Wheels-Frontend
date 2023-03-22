import DownArrow from "images/down-arrow.png";
import MainLogo from "images/Logo.png";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserService from "../services/UserService";
import ToastProps from "./ToastProps";

const Header = (props) => {
  const { isLoggedIn, setIsLoggedIn, userDetails, userType, setToasts } = props;
  const [profileLink, setProfileLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      switch (userType) {
        case "member":
          setProfileLink("/memberProfile");
          break;
        case "caretaker":
          setProfileLink("/caretakerProfile");
          break;
        case "partner":
          setProfileLink("/partnerProfile");
          break;
        case "volunteer":
          setProfileLink("/volunteerProfile");
          break;
        case "admin":
          setProfileLink("/adminDashboard");
          break;
      }
    }
  }, [isLoggedIn]);

  const handleLogout = async () => {
    const response = await UserService.logout();

    setIsLoggedIn(false);
    setToasts((prev) => [...prev, new ToastProps({ message: response.msg })]);

    navigate("/userLogin");
  };

  const linkHandler = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar bg-base-100 shadow-xl rounded-md w-full font-sans sticky top-0 z-20">
      <div className="navbar-start ml-3 flex-1">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={() => navigate("/userRegister")}>Get Meals</a>
            </li>
            <li>
              <a onClick={() => navigate("/nearby")}>Nearby Partners</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Get Involved
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100 shadow menu menu-compact ring-[0.5px] ring-[rgba(0,0,0,0.2)]">
                <li>
                  <a onClick={() => navigate("/volunteerPromotion")}>
                    How to Volunteer?
                  </a>
                </li>
                <li>
                  <a>How to become a partner?</a>
                </li>
              </ul>
            </li>
            <li>
              <a onClick={() => navigate("/aboutUs")}>About Us</a>
            </li>
            <li>
              <a onClick={() => navigate("/contactUs")}>Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <a
            className="flex items-center cursor-pointer hover:text-primary normal-case text-xl"
            onClick={() => linkHandler("/")}
          >
            <img src={MainLogo} alt="Logo" className="w-28 h-16 mr-2" />
            Meals On Wheels
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => navigate("/userRegister")}>Get Meals</a>
          </li>
          <li>
            <a onClick={() => navigate("/nearby")}>Nearby Partners</a>
          </li>
          <li tabIndex={0}>
            <a className="justify-between">
              Get Involved
              <img src={DownArrow} className="w-4 h-4" />
            </a>
            <ul className="p-2 bg-base-100 shadow menu menu-compact ring-[0.5px] ring-[rgba(0,0,0,0.2)]">
              <li>
                <a onClick={() => navigate("/volunteerPromotion")}>
                  How to Volunteer?
                </a>
              </li>
              <li>
                <a>How to become a partner?</a>
              </li>
            </ul>
          </li>
          <li>
            <a onClick={() => navigate("/aboutUs")}>About Us</a>
          </li>
          <li>
            <a onClick={() => navigate("/contactUs")}>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-6 max-w-[37rem]">
        <div className="mr-6">
          <button
            className="btn btn-primary font-bold pt-1"
            onClick={() => navigate("/donate")}
          >
            Donate
          </button>
        </div>
        <div className={`${isLoggedIn ? "hidden" : ""}`}>
          <button
            className="btn btn-outline btn-secondary mr-2 font-bold pt-1"
            onClick={() => linkHandler("/userLogin")}
          >
            Login
          </button>
          <button
            className="btn btn-secondary font-bold pt-1"
            onClick={() => linkHandler("/userRegister")}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className={`dropdown dropdown-end ${!isLoggedIn ? "hidden" : ""}`}>
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="/src/images/user.png" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box"
        >
          <li className="pointer-events-none rounded-xl px-4 py-1.5 mb-2 text-white bg-primary drop-shadow-sm">
            <span className="m-0 p-0">Logged in as:</span>
            <span className="italic font-bold m-0 p-0">
              {userDetails.emailAddress}
            </span>
          </li>
          <li>
            <a
              className="justify-between"
              onClick={() => navigate(profileLink)}
            >
              {userType === "admin" ? "Admin dashboard" : "Profile"}
            </a>
          </li>
          <li>
            <a onClick={handleLogout}>Log out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
