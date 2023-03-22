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
import MemberUpdateForm from "./components/admin/forms/MemberUpdateForm";
import CaretakerProfile from "./components/user/profiles/CaretakerProfile";
import PartnerProfile from "./components/user/profiles/PartnerProfile";
import VolunteerProfile from "./components/user/profiles/VolunteerProfile";
import VolunteerUpdateForm from "./components/admin/forms/VolunteerUpdateForm";
import Volunteer from "./components/mainContents/Volunteer";
import AboutUs from "./components/misc/AboutUs";
import ContactUs from "./components/misc/ContactUs";
import Privacy from "./components/misc/Privacy";
import Donate from "./components/Donate/Donate";
import PaymentDetails from "./components/Donate/PaymentDetails";
import MemberProfileUpdate from "./components/user/profiles/MemberProfileUpdate";
import UserService from "./components/services/UserService";
import NearbyPartners from "./components/mainContents/NearbyPartners";
import ToastContainer from "./components/generic/ToastContainer";
import VolunteerProfileUpdate from "./components/user/profiles/VolunteerProfileUpdate";
import PartnerProfileUpdate from "./components/user/profiles/PartnerProfileUpdate";
import PartnerUpdateForm from "./components/admin/forms/PartnerUpdateForm";
import CaretakerProfileUpdate from "./components/user/profiles/CaretakerProfileUpdate";
import CaretakerUpdateForm from "./components/admin/forms/CaretakerUpdateForm";
import Thankyou from "./components/misc/Thankyou";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [toasts, setToasts] = useState([]);

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
          setToasts={setToasts}
        />
        <div className="px-2 my-4 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PathError />} />
            <Route
              path="/userRegister"
              element={
                <UserRegister
                  isLoggedIn={isLoggedIn}
                  userType={userType}
                  setToasts={setToasts}
                />
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
                  setToasts={setToasts}
                />
              }
            ></Route>
            <Route
              path="/adminDashboard"
              element={
                <AdminDashBoard
                  isLoggedIn={isLoggedIn}
                  userDetails={userDetails}
                  setToasts={setToasts}
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
                  setToasts={setToasts}
                />
              }
            ></Route>
            <Route
              path="/admin/memberUpdate/:id"
              element={<MemberUpdateForm setToasts={setToasts} />}
            ></Route>
            <Route
              path="/partnerProfile"
              element={
                <PartnerProfile
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  userDetails={userDetails}
                />
              }
            ></Route>
            <Route
              path="/updatePartnerProfile"
              element={
                <PartnerProfileUpdate
                  isLoggedIn={isLoggedIn}
                  userDetails={userDetails}
                  setToasts={setToasts}
                />
              }
            ></Route>
            <Route
              path="/admin/partnerUpdate/:id"
              element={<PartnerUpdateForm setToasts={setToasts} />}
            ></Route>
            <Route
              path="/volunteerProfile"
              element={
                <VolunteerProfile
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  userDetails={userDetails}
                />
              }
            ></Route>
            <Route
              path="/updateVolunterProfile"
              element={
                <VolunteerProfileUpdate
                  isLoggedIn={isLoggedIn}
                  userDetails={userDetails}
                  setToasts={setToasts}
                />
              }
            ></Route>
            <Route
              path="/admin/volunteerUpdate/:id"
              element={<VolunteerUpdateForm setToasts={setToasts} />}
            ></Route>
            <Route
              path="/caretakerProfile"
              element={
                <CaretakerProfile
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                  userDetails={userDetails}
                />
              }
            ></Route>
            <Route
              path="/updateCaretakerProfile"
              element={
                <CaretakerProfileUpdate
                  isLoggedIn={isLoggedIn}
                  userDetails={userDetails}
                  setToasts={setToasts}
                />
              }
            ></Route>
            <Route
              path="/admin/caretakerUpdate/:id"
              element={<CaretakerUpdateForm setToasts={setToasts} />}
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
            <Route
              path="/paymentDetails"
              element={<PaymentDetails setToasts={setToasts} />}
            ></Route>
            <Route path="/nearby" element={<NearbyPartners />}></Route>
            <Route path="/thankyou" element={<Thankyou />}></Route>
          </Routes>
          <ToastContainer toasts={toasts} />
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
