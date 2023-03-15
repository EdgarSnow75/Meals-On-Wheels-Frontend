import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/generic/Header";
import WebFont from "webfontloader";

const App = () => {
  useEffect(() => {
    WebFont.load({ google: { families: ["Josefin Sans"] } });
  }, []);

  return (
    <div className="App" data-theme="violetta">
      <Header />
      <div className="px-2"></div>
    </div>
  );
};

export default App;
