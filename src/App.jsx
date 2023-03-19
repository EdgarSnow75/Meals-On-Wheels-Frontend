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
import Volunteer from "./components/volunteer/Volunteer";
import AboutUs from "./components/about/AboutUs"
import ContactUs from "./components/contactus/ContactUs";
import Privacy from "./components/privacy/Privacy";
import Donate from "./components/Donate/Donate";
import PaymentDetails from "./components/paymentDetails/PaymentDetails";

const App = () => {
  useEffect(() => {
    WebFont.load({ google: { families: ["Josefin Sans"] } });
  }, []);

  return (
    <div className="App" data-theme="violetta">
      <Router>
        <Header />
        <div className="px-2 my-4 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<PathError />} />
            <Route path="/userRegister" element={<UserRegister />} />
            <Route path="/userLogin" element={<UserLogin />}></Route>
            <Route path="/adminDashboard" element={<AdminDashBoard />}></Route>
            <Route path="/memberProfile" element={<MemberProfile />}></Route>
            <Route path="/partnerProfile" element={<PartnerProfile />}></Route>
            <Route
              path="/volunteerProfile"
              element={<VolunteerProfile />}
            ></Route>
            <Route
              path="/caretakerProfile"
              element={<CaretakerProfile />}
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
            <Route path="/volunteer" element={<Volunteer />}></Route>
            <Route path="/about" element={<AboutUs />}></Route>
            <Route path="/contact" element= {<ContactUs />}></Route>
            <Route path="/privacy" element= {<Privacy />}></Route>
            <Route path="/donate" element= {<Donate />}></Route>
            <Route path="/payment" element= {<PaymentDetails />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
