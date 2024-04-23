import React from "react";
// import Navbar from "../Navbar and Footer/Header.jsx";
import Landing from "./components/Landing";
import Timeline from "./components/Timeline";
import Sucesscarousel from "./components/Sucesscarousel.jsx";
import Helpform from "./components/Helpform.jsx";

// import Footer from "../Navbar and Footer/Footer";

function Partner() {
  return (
    <div className="flex flex-col justify-start ">
      <div className="sticky top-0 z-50">{/* <Navbar /> */}</div>

      <Landing />
      <Timeline />
      <Sucesscarousel />
      <Helpform />

      {/* <Footer /> */}
    </div>
  );
}

export default Partner;
