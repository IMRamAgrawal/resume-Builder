import React from "react";

import Header from "./components/Header";
import DreamJob from "./components/DreamJob";
import OurNumbers from "./components/OurNumbers";
import Testimonials from "./components/Testimonials";
import BlogTemplates from "./components/BlogTemplates";
import Feedback from "./components/Feedback";

function Home() {
  return (
    <div>
      <div className="w-[100%] h-fit overflow-x-clip">
        {/* <Header /> */}

        {/*first section */}
        <Header />

        {/*second section */}
        <DreamJob />

        {/* third section */}
        <OurNumbers />

        {/* fourth section */}
        <Testimonials />

        {/* five section */}
        <BlogTemplates />

        {/* six Section */}
        <Feedback />

        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
