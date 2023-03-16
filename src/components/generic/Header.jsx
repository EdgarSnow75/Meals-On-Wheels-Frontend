import DownArrow from "images/down-arrow.png";
import MainLogo from "images/Logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const linkHandler = (path) => {
    navigate(path);
  };
  return (
    <div className="navbar bg-base-100 shadow-xl rounded-md w-full font-sans sticky top-0 z-10">
      <div className="navbar-start ml-3">
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
              <a>Get Meals</a>
            </li>
            <li>
              <a>Nearby Partners</a>
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
                  <a>How to Volunteer?</a>
                </li>
                <li>
                  <a>How to become a partner?</a>
                </li>
              </ul>
            </li>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <a className="btn btn-ghost normal-case text-xl">
            <img src={MainLogo} alt="Logo" className="w-28 h-16 mr-2" />
            Meals On Wheels
          </a>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Get Meals</a>
          </li>
          <li>
            <a>Nearby Partners</a>
          </li>
          <li tabIndex={0}>
            <a className="justify-between">
              Get Involved
              <img src={DownArrow} className="w-4 h-4" />
            </a>
            <ul className="p-2 bg-base-100 shadow menu menu-compact ring-[0.5px] ring-[rgba(0,0,0,0.2)]">
              <li>
                <a>How to Volunteer?</a>
              </li>
              <li>
                <a>How to become a partner?</a>
              </li>
            </ul>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-6">
        <div className="mr-6">
          <button className="btn btn-primary font-bold pt-1">Donate</button>
        </div>
        <div className="">
          <button
            className="btn btn-outline btn-secondary mr-2 font-bold pt-1"
            onClick={() => linkHandler("/userLogin")}
          >
            Login
          </button>
          <button
            className="btn btn-secondary font-bold pt-1"
            onClick={() => linkHandler("/userSignUp")}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
