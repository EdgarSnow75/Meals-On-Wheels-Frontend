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
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
