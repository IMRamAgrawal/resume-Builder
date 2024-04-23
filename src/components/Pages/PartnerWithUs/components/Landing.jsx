import React from "react";

import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

function Landing() {
  return (
    <section className="w-[100vw] md:h-[100vh] mb-10">
      {/*first section */}

      <div
        class="bg-cover bg-center w-full md:h-full"
        style={{ backgroundImage: "url(images/home/curlsBackground.png)" }}
      >
        <div className="w-full md:h-full  flex flex-col lg:flex-row justify-between">
          <div className="w-full lg:w-1/2 flex flex-col tg gap-5 lg:gap-10 justify-center p-5 lg:p-10 xl:p-20">
            <span className="text-3xl sm:text-4xl lg:text-8xl   text-[#003D4D] font-bold">
              Partner With Us
            </span>
            <div className="flex flex-col gap-5">
              <p className="text-[#003D4D] md:text-3xl">
                Looking for a partner to take your business to the next level?
                Look no further than ZealYug!
              </p>
              <p className="text-[#003D4D] md:text-3xl">
                Not only do we offer free challenges and shadowing, but we also
                reach out to potential candidates and highlight your openings,
                offers and business like we're part of the team (because we
                are!)
              </p>
            </div>

            <div className="flex gap-6 md:gap-10">
              <Link
                className="w-full lg:w-3/4 xl:w-1/2 shadow-lg rounded-full"
                to="/login"
              >
                <button className="w-full flex justify-center gap-2 items-center py-3 px-6 rounded-full text-white text-base lg:text-lg xl:text-xl bg-gradient-to-r from-[#003D4D] to-[#55A4B0] hover:bg-[#ffffff]">
                  Let Us Know
                  <FiArrowUpRight className="text-xl lg:text-3xl xl:text-4xl" />
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full  lg:w-1/2 flex items-center justify-center">
            <img
              className=" w-2/4 lg:w-4/5"
              src="images/PartnerWithUs/Partner.png"
              alt="group"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
