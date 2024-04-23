import React from "react";
import { Link } from "react-router-dom";

function Coro() {
  return (
    <section className="flex flex-col md:flex-row justify-center p-4 md:p-10 gap-8 md:mt-10 ">
      <div className="flex justify-center">
        <img
          className="w-2/3 md:w-3/4"
          src="images/PartnerWithUs/subodh.png"
          alt="success stories"
        />
      </div>
      <div className="flex flex-col justify-between gap-4 md:gap-10 md:w-1/2 ">
        <span className="text-xl md:text-4xl">Name of Person</span>
        <p className="w-full h-full text-[#4D4D4D] md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.{" "}
        </p>
        <Link className="w-full lg:w-2/5 xl:w-1/4" to="/login">
          <button className="w-full box-border  py-3 px-6 rounded-full text-white text-base lg:text-lg  border-2 border-gray-800 bg-[#003d4d] hover:bg-white  hover:text-black transition-all hover:ease-in-out duration-300  ">
            Read More
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Coro;
