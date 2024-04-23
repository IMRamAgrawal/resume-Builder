import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="w-[100vw] md:h-[100vh] mb-10">
      {/*first section */}

      <div
        class="bg-cover bg-center w-full md:h-full"
        style={{ backgroundImage: "url(images/home/curlsBackground.png)" }}
      >
        <div className="w-full md:h-full  flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-10 justify-center p-5 lg:p-10 xl:p-20">
            <span className="text-3xl sm:text-4xl md:text-5xl text-center  text-[#003D4D] font-bold">
              We’re changing the whole Hiring and Job Finding game.
            </span>
            <div className="flex gap-6 md:gap-10">
              <Link className="w-full lg:w-3/4 xl:w-1/2" to="/login">
                <button className="w-full box-border  py-3 px-6 rounded-full text-white text-base lg:text-lg  border-2 border-gray-800 bg-[#003d4d] hover:bg-white  hover:text-black transition-all hover:ease-in-out duration-300  ">
                  Get Started
                </button>
              </Link>
              <Link className="w-full lg:w-3/4 xl:w-1/2" to="/login">
                <button className="w-full box-border bg-white text-black  text-base lg:text-lg font-semibold  py-3 px-6 rounded-full border-2 border-gray-800 hover:bg-[#003d4d] hover:text-white transition-all hover:ease-in-out duration-300">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full  lg:w-1/2 flex items-center justify-center">
            <img
              className=" w-3/5 lg:w-4/5"
              src="images/AboutUs/About us.png"
              alt="group"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
