import React from "react";
import CreateValue from "./components/CreateValue";
import OurMission from "./components/OurMission";
import OurVision from "./components/OurVision";
import OurStory from "./components/OurStory";
import Header from "./components/Header";
import Teams from "./components/Teams";

function AboutUs() {
  return (
    <div>
      {/* first section */}
      <Header />

      <span className="text-[#0EF54E] font-semibold text-3xl  ml-4 md:ml-14 ">
        Our Story
      </span>

      {/* second section */}
      <section className="w-full flex flex-col gap-10 sm:gap-20  p-4 md:p-14 bg-gradient-to-b from-[#fff] via-[#E2FAFE] to-white">
        {/* first  */}
        <OurStory />

        {/* second */}
        <OurVision />

        {/* third */}
        <OurMission />

        {/* fourth */}
        <CreateValue />
      </section>
      {/* third section */}
      <Teams />
    </div>
  );
}

export default AboutUs;
