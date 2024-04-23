import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiPhone,
  FiSend,
  FiTwitter,
} from "react-icons/fi";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="flex flex-col gap-8  bg-gradient-to-br from-[#003d4d] to-[#57a7b3] py-10">
        <div className=" grid place-content-between grid-cols-2 lg:grid-cols-4 px-5 md:px-12 lg:px-18 xl:px-24 gap-6 md:gap-10 text-white">
          {/* first */}
          <div className="flex flex-col gap-3 md:gap-8">
            <h3 className="text-2xl max-md:text-black md:text-xl md:font-medium ">
              About Us
            </h3>
            <p className="text-sm md:text-lg tracking-wide md:leading-7">
              ZealYug is India's first innovative hiring platform that connects
              job seekers and employers based on one’s skills, experiences,
              stories and talent more than resume.
            </p>
            <div>
              <img
                src="images/LOGO.png"
                className="h-[80px] max-lg:hidden"
                alt="Logo"
              />
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col gap-3 md:gap-8">
            <h3 className="text-xl max-md:text-black md:text-xl md:font-medium ">
              Important Links
            </h3>
            <ul className="flex flex-col gap-2 md:text-lg font-medium ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/comingsoon">Find Work</a>
              </li>
              <li>
                <a href="/comingsoon">Find Talent</a>
              </li>
              <li>
                <a hrefa="/comingsoon">Post Now</a>
              </li>
            </ul>
          </div>

          {/* third */}
          <div className="flex flex-col gap-3 md:gap-8 ">
            <h3 className="text-2xl max-md:text-black md:text-xl md:font-medium ">
              Contact Info
            </h3>
            <div className="text-sm md:text-lg flex flex-col gap-3">
              <p className="flex items-center gap-1 md:gap-3">
                <HiOutlineLocationMarker className="text-xl md:text-3xl" />{" "}
                Janakpuri Delhi
              </p>
              <p className="flex items-center gap-1 md:gap-3">
                <FiPhone className="text-xl md:text-3xl" />
                +91 9319692389
              </p>
              <p className="flex max-md:text-xs items-center gap-1 md:gap-3">
                <HiOutlineMail className="text-xl break-words md:text-3xl" />
                zealyug.hr@gmail.com
              </p>
            </div>
          </div>
          {/* fourth */}
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-medium max-md:hidden">
              Subscribe to Our Newsletter
            </h3>

            <div className="relative flex w-full max-md:hidden  items-center ">
              <input
                type="email"
                placeholder="Enter your Email here"
                className="w-full  border border-gray-400 rounded-full py-4 px-6"
              />
              <button class="absolute flex gap-2 items-center right-2 top-2 rounded-full shadow-lg shadow-[#57a7b39d]  bg-gradient-to-r from-[#003d4d] to-[#57a7b3] py-2 px-4">
                Send
                <FiSend />
              </button>
            </div>
            <div className="flex max-md:flex-col gap-10 md:gap-4  text-3xl md:text-4xl">
              <span className="max-md:text-2xl max-md:text-black text-xl">
                Social Links{" "}
              </span>{" "}
              <div className="flex gap-3">
                <FiFacebook />
                <FiTwitter />
                <FiLinkedin />
                <FiInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <h3 className="text-xl text-white text-center  md:hidden">
            Subscribe to Our Newsletter
          </h3>
          <div className="relative rounded-full flex w-[90%] mx-auto  md:hidden items-center ">
            <input
              type="email"
              placeholder="Enter your Email here"
              className="w-full  border border-gray-400 rounded-full py-4 px-6"
            />
            <button class="absolute flex gap-2 items-center text-white right-2 top-2 rounded-full shadow-lg shadow-[#57a7b39d]  bg-gradient-to-r from-[#003d4d] to-[#57a7b3] py-2 px-4">
              Send
              <FiSend />
            </button>
          </div>
          <div>
            <img
              src="images/LOGO.png"
              className="h-[80px] lg:hidden"
              alt="Logo"
            />
          </div>
        </div>
      </footer>

      <div className="w-full flex max-sm:text-sm justify-between px-5 md:px-12 lg:px-18 xl:px-24 text-[#ffffff7d] sm:font-medium sm:tracking-widest  text-white bg-[#367e8cd1] py-1">
        <span>Copyright @2023</span>
        <span>All rights reserved by ZealYug</span>{" "}
      </div>
    </>
  );
}

export default Footer;
