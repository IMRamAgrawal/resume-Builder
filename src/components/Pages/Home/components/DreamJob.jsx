import React from "react";
import { Link } from "react-router-dom";

const DreamJob = () => {
  return (
    <div className="w-full flex flex-col gap-10 sm:gap-20 md:gap-40 pt-10 md:pt-20 px-4 bg-gradient-to-b from-[#fff] via-[#E2FAFE] to-white">
      {/*first part */}
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl max-lg:text-center mb-10 xl:ml-[6rem]  text-[#003D4D] font-bold">
          It’s Easy to Find Your
          <br /> Dream Job Now
        </h1>
        <div className="flex max-lg:flex-col-reverse justify-around gap-10">
          {/* left */}
          <div className=" flex flex-col justify-center items-center gap-10">
            <div className="flex gap-5">
              <img
                src="images/home/pencil zy 1.png"
                className="w-1/2  "
                alt="pencil"
              />
              <img
                src="images/home/jobs zy 1.png "
                className="w-1/2"
                alt="seach job"
              />
            </div>

            <Link to="/login">
              <button className="text-1xl my-5 bg-white text-black font-semibold mx-10 px-8 py-2 rounded-full border-2 border-gray-800 hover:bg-[#003d4d] hover:text-white transition-all hover:ease-in-out duration-300">
                Get Started
              </button>
            </Link>
          </div>
          {/* right */}
          <div className="flex flex-col justify-center items-center lg:-mt-[10rem] gap-10 mb-10">
            {/*01 */}
            <div className="w-full md:w-[85%] shadow-xl hover:shadow-2xl gap-3 py-4 px-1 my-4 rounded-lg bg-[#DCEBFF] relative sm:h-[120px] sm:hover:h-[130px] md:hover:w-[92%] hover:w-[105%]  transition-all hover:ease-in-out duration-300">
              <span className="font-bold text-2xl absolute -top-5">01</span>
              <div className="shadow-xl rounded-lg py-6 bg-white sm:w-[100px] w-[80px] absolute">
                <img
                  src="images/home/membership 1.png"
                  className=" mx-auto h-[50px] sm:h-[80px]"
                  alt="member"
                />
              </div>
              <div className="sm:ml-[160px] ml-[100px]">
                <h2 className=" text-black font-semibold sm:text-2xl">
                  Register your account
                </h2>
                <p className="col-span-2 text-sm md:text-lg ">
                  Complete your profile and get your QR resume.
                </p>
              </div>
            </div>
            {/* 02 */}
            <div className="w-full md:w-[85%] shadow-xl hover:shadow-2xl gap-3 py-4 px-1 my-4 rounded-lg bg-[#FBECFF] relative sm:h-[120px] sm:hover:h-[130px] md:hover:w-[92%] hover:w-[105%]  transition-all hover:ease-in-out duration-300">
              {" "}
              <span className="font-bold text-2xl absolute -top-5">02</span>
              <div className=" shadow-xl rounded-lg py-6 bg-white sm:w-[100px] w-[80px] absolute">
                <img
                  src="images/home/cv 1.png"
                  className=" mx-auto h-[50px] sm:h-[80px]"
                  alt="member"
                />
              </div>
              <div className="sm:ml-[160px] ml-[100px]">
                <h2 className=" text-black font-semibold  sm:text-xl">
                  Present Your Personality
                </h2>
                <p className="col-span-2 text-sm md:text-lg ">
                  Share your skills and talents to Earn, Learn and Stand out
                  from the rest of candidates.
                </p>
              </div>
            </div>
            {/* 03 */}
            <div className="w-full md:w-[85%] shadow-xl hover:shadow-2xl gap-3 py-4 px-1 my-4 rounded-lg bg-[#FFFFE9] relative sm:h-[120px] sm:hover:h-[130px] md:hover:w-[92%] hover:w-[105%]  transition-all hover:ease-in-out duration-300">
              {" "}
              <span className="font-bold text-2xl absolute -top-5">03</span>
              <div className=" shadow-xl rounded-lg py-6 bg-white sm:w-[100px] w-[80px] absolute">
                <img
                  src="images/home/job-offer 1.png"
                  className=" mx-auto h-[50px] sm:h-[80px]"
                  alt="member"
                />
              </div>
              <div className="sm:ml-[160px] ml-[100px]">
                <h2 className=" text-black font-semibold sm:text-2xl">
                  Ready for Dream Job
                </h2>
                <p className="col-span-2 text-sm md:text-lg ">
                  Hiring opportunities will get in touch with you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second part */}

      <div>
        <h1 className="text-center lg:text-right text-[#003D4D] md:text-5xl sm:text-3xl text-2xl font-bold py-2 lg:mr[6rem] xl:mr-[10rem] max-sm:mb-10">
          Get Right Talent for Your
          <br /> Company with ZealYug
        </h1>
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-5 ">
          {/* Left side */}
          <div className="flex flex-col justify-center items-center gap-8 ">
            {/*01 */}
            <div className="w-full md:w-[85%] shadow-xl hover:shadow-2xl gap-3 py-4 px-1 my-4 rounded-lg bg-[#DCEBFF] relative sm:h-[120px] sm:hover:h-[130px] md:hover:w-[92%] hover:w-[105%]  transition-all hover:ease-in-out duration-300">
              <span className="font-bold text-2xl absolute -top-5">01</span>
              <div className=" shadow-xl rounded-lg py-6 bg-white sm:w-[100px] w-[80px] absolute">
                <img
                  src="images/home/website 2.png"
                  className=" mx-auto h-[50px] sm:h-[80px]"
                  alt="member"
                />
              </div>
              <div className="sm:ml-[160px] ml-[100px]">
                <h2 className=" text-black font-semibold sm:text-2xl">
                  Complete Hiring Profile
                </h2>
                <p className="col-span-2 text-1xl ">
                  You need to register account as a hiring profile to get
                  Talents for free.
                </p>
              </div>
            </div>

            {/*02 */}
            <div className="w-full md:w-[85%] shadow-xl hover:shadow-2xl gap-3 py-4 px-1 my-4 rounded-lg bg-[#FBECFF] relative sm:h-[120px] sm:hover:h-[130px] md:hover:w-[92%] hover:w-[105%]  transition-all hover:ease-in-out duration-300">
              <span className="font-bold text-2xl absolute -top-5">02</span>

              <div className=" shadow-xl rounded-lg py-6 bg-white sm:w-[100px] w-[80px] absolute">
                <img
                  src="images/home/task-list 2.png"
                  className=" mx-auto h-[50px] sm:h-[80px]"
                  alt="member"
                />
              </div>

              <div className="sm:ml-[160px] ml-[100px]">
                <h2 className="text-black font-semibold sm:text-2xl">
                  Post your Requirements
                </h2>
                <p className="col-span-2 text-1xl ">
                  Mention the skills required for the job then post it to
                  ZealYug.{" "}
                </p>
              </div>
            </div>

            {/*03 */}
            <div className="w-full md:w-[85%] shadow-xl hover:shadow-2xl gap-3 py-4 px-1 my-4 rounded-lg bg-[#FFFFE9] relative sm:h-[120px] sm:hover:h-[130px] md:hover:w-[92%] hover:w-[105%]  transition-all hover:ease-in-out duration-300">
              <span className="font-bold text-2xl absolute -top-5">03</span>
              <div className=" shadow-xl rounded-lg py-6 bg-white sm:w-[100px] w-[80px] absolute">
                <img
                  src="images/home/qr and note.png"
                  className=" mx-auto h-[50px] sm:h-[80px]"
                  alt="member"
                />
              </div>
              <div className="sm:ml-[160px] ml-[100px]">
                <h2 className=" text-black font-semibold sm:text-2xl">
                  Save time and cost
                </h2>
                <p className="col-span-2 text-lg ">
                  Get resume of cadidates with matching skills with the help of
                  QR.
                </p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col gap-5 items-center">
            <img src="images/home/hiring.png" className="" alt="search" />
            <Link to="/login">
              <button className="text-1xl my-5 bg-white shadow-xl text-black font-semibold mx-10 px-8 py-2 rounded-full border-2 border-gray-800 hover:bg-[#003d4d] hover:text-white transition-all hover:ease-in-out duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* third part */}
      <div className="w-full">
        <h1 className="text-center mb-5  md:mb-12 text-[#003D4D] md:text-5xl sm:text-3xl text-2xl font-bold  ">
          How ZealYug is different <br />
          from others?
        </h1>
        <div className="grid  lg:justify-center items-center md:px-20 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* 01 */}
          <div className="w-full shadow-md flex flex-col items-center  my-4 rounded-3xl relative h-[360px] pt-5 hover:w-[101%] hover:h-[363px] hover:shadow-2xl shadow-gray-400 hover:ease-in-out transition-all duration-300">
            <p className="text-center z-10 font-normal text-sm text-[#395376]">
              WE PROVIDE
            </p>
            <h2 className="text-3xl text-[#395376] font-bold text-center z-10">
              Instant jobs
            </h2>
            <img
              src="images/blue rectangle.png"
              className="absolute object-cover  rounded-t-3xl rounded-r-3xl h-full w-full top-0 left-0"
              alt="search"
            />
            <img
              src="images/home/Instant-job.png"
              className="absolute bottom-0 left-50"
              alt="search"
            />
          </div>

          {/**02 */}
          <div className="w-full shadow-md flex flex-col items-center my-4 rounded-3xl relative h-[360px] pt-5 hover:w-[101%] hover:h-[363px] hover:shadow-2xl shadow-gray-400 hover:ease-in-out transition-all duration-300">
            <p className="text-center z-10 font-normal text-sm text-[#8B3D7E]">
              WE PROVIDE
            </p>
            <h2 className="text-2xl sm:text-3xl text-[#8B3D7E] font-bold text-center z-10">
              Hire by Skills and Talent
            </h2>
            <img
              src="images/Purple rectangle.png"
              className="absolute object-cover  rounded-t-3xl rounded-r-3xl h-full w-full top-0 left-0"
              alt="search"
            />
            <img
              src="images/home/skills.png"
              className="absolute bottom-0 left-50"
              alt="search"
            />
          </div>

          {/**03 */}
          <div className="w-full shadow-md flex flex-col items-center  my-4 rounded-3xl relative h-[360px] pt-5 hover:w-[101%] hover:h-[363px] hover:shadow-2xl shadow-gray-400 hover:ease-in-out transition-all duration-300">
            <p className="text-center z-10 font-normal text-sm text-[#7C7C53]">
              WE PROVIDE
            </p>
            <h2 className="text-3xl text-[#7C7C53] font-bold text-center z-10">
              Certificate of experience
            </h2>
            <img
              src="images/Yellow rectangle.png"
              className="absolute object-cover  rounded-t-3xl rounded-r-3xl h-full w-full top-0 left-0"
              alt="search"
            />
            <img
              src="images/home/opportunity.png"
              className="absolute bottom-0 left-50"
              alt="search"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
