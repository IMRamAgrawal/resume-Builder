import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="max-w-full max-h-full">
      <div
        class="bg-cover bg-center w-full h-full"
        style={{ backgroundImage: "url(images/home/curlsBackground.png)" }}
      >
        <div className="w-full  flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10 justify-center p-5 lg:p-10 xl:p-20">
            <span className="text-3xl sm:text-4xl md:text-5xl max-md:text-center  text-[#003D4D] font-bold">
              Skills, Experience, Story, Talent - Based Hiring over Resume
            </span>
            <p className="text-base lg:text-xl xl:text-2xl max-md:text-center font-semibold">
              Get hired without the boring resume. Show off your skills,
              talents, and experiences on ZealYug and join the coolest team in
              town!
            </p>

            <Link className="w-full lg:w-3/4 xl:w-1/2" to="/comingsoon">
              <button className="w-full flex justify-center gap-2 items-center py-3 px-6 rounded-full text-white text-base lg:text-lg xl:text-xl bg-gradient-to-r from-[#003D4D] to-[#55A4B0] hover:bg-[#ffffff]">
                Create Company Page
                <FiArrowUpRight className="text-xl lg:text-3xl xl:text-4xl" />
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2 flex items-end justify-end">
            <img className="w-full " src="images/home/group.png" alt="group" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
