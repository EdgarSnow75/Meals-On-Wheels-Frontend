import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/generic/Header";
import WebFont from "webfontloader";
import Footer from "./components/generic/Footer";
import Home from "./components/mainContents/Home";
import PathError from "./components/misc/PathError";
import UserLogin from "./components/user/UserLogin";
import UserRegister from "./components/user/UserRegister";
import AdminDashBoard from "./components/admin/adminDashboard";
import MemberCreateFrom from "./components/admin/forms/MemberCreateForm";
import CareTakerForm from "./components/user/CareTakerForm";
import CaretakerCreateForm from "./components/admin/forms/CaretakerCreateForm";
import PartnerCreateForm from "./components/admin/forms/PartnerCreateForm";
import VolunteerCreateForm from "./components/admin/forms/VolunteerCreateForm";
import MemberProfile from "./components/user/profiles/MemberProfile";
import CaretakerProfile from "./components/user/profiles/CaretakerProfile";
import PartnerProfile from "./components/user/profiles/PartnerProfile";
import VolunteerProfile from "./components/user/profiles/VolunteerProfile";
import Volunteer from "./components/mainContents/Volunteer";
import AboutUs from "./components/misc/AboutUs";
import ContactUs from "./components/misc/ContactUs";
import Privacy from "./components/misc/Privacy";
import Donate from "./components/Donate/Donate";
import PaymentDetails from "./components/Donate/PaymentDetails";
import MemberProfileUpdate from "./components/user/profiles/MemberProfileUpdate";
import UserService from "./components/services/UserService";
import NearbyPartners from "./components/mainContents/NearbyPartners";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    WebFont.load({ google: { families: ["Josefin Sans"] } });

    UserService.getUserDetails().then((response) => {
      if (response) {
        setIsLoggedIn(true);
        setUserDetails(response);
        setUserType(response.userType);
      }
    });
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      setUserType("");
      setUserDetails({});
    }
  }, [isLoggedIn]);

  return (
    <div className="App" data-theme="violetta">
      <Router>
        <Header
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          userDetails={userDetails}
          userType={userType}
        />
        <div className="px-2 my-4 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PathError />} />
            <Route
              path="/userRegister"
              element={
                <UserRegister isLoggedIn={isLoggedIn} userType={userType} />
              }
            />
            <Route
              path="/userLogin"
              element={
                <UserLogin
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  setUserType={setUserType}
                  setUserDetails={setUserDetails}
                  userType={userType}
                />
              }
            ></Route>
            <Route
              path="/adminDashboard"
              element={
                <AdminDashBoard
                  isLoggedIn={isLoggedIn}
                  userDetails={userDetails}
                />
              }
            ></Route>
            <Route
              path="/memberProfile"
              element={
                <MemberProfile
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  userDetails={userDetails}
                />
              }
            ></Route>
            <Route
              path="/updateMemberProfile"
              element={
                <MemberProfileUpdate
                  isLoggedIn={isLoggedIn}
                  userDetails={userDetails}
                />
              }
            ></Route>
            <Route
              path="/partnerProfile"
              element={
                <PartnerProfile
                  isLoggedIn={isLoggedIn}
                  userDetails={userDetails}
                />
              }
            ></Route>
            <Route
              path="/volunteerProfile"
              element={
                <VolunteerProfile
                  isLoggedIn={isLoggedIn}
                  userDetails={userDetails}
                />
              }
            ></Route>
            <Route
              path="/caretakerProfile"
              element={
                <CaretakerProfile
                  isLoggedIn={isLoggedIn}
                  userDetails={userDetails}
                />
              }
            ></Route>
            <Route
              path="/adminDashboard/memberCreate"
              element={<MemberCreateFrom />}
            ></Route>
            <Route
              path="/adminDashboard/caretakerCreate"
              element={<CaretakerCreateForm />}
            ></Route>
            <Route
              path="/adminDashboard/partnerCreate"
              element={<PartnerCreateForm />}
            ></Route>
            <Route
              path="/adminDashboard/volunteerCreate"
              element={<VolunteerCreateForm />}
            ></Route>
            <Route path="/volunteerPromotion" element={<Volunteer />}></Route>
            <Route path="/aboutUs" element={<AboutUs />}></Route>
            <Route path="/contactUs" element={<ContactUs />}></Route>
            <Route path="/privacyPolicy" element={<Privacy />}></Route>
            <Route path="/donate" element={<Donate />}></Route>
            <Route path="/paymentDetails" element={<PaymentDetails />}></Route>
            <Route path="/nearby" element={<NearbyPartners />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
