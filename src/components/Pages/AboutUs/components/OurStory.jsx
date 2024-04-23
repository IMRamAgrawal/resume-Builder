import React from "react";

const Card = ({ no, heading, paragraph }) => {
  return (
    <div
      className={`${
        no === "03"
          ? "bg-[#FFFFE9]"
          : no === "01"
          ? "bg-[#DCEBFF]"
          : "bg-[#FBECFF]"
      }   w-full  lg:w-[85%]  shadow-xl hover:shadow-2xl box-border py-4 px-3 rounded-lg  relative  sm:hover:h-[130px] max-sm:hover:w-[105%] hover:w-[95%]  transition-all hover:ease-in-out duration-300`}
    >
      <span className="font-bold text-2xl absolute -top-5">{no}</span>
      <div className="w-full">
        <p className="w-full text-black font-semibold sm:text-2xl">{heading}</p>
        <p className="w-full text-xs sm:text-lg ">{paragraph}</p>
      </div>
    </div>
  );
};

const OurStory = () => {
  return (
    <section className="max-lg:gap-20 flex max-lg:flex-col justify-evenly">
      {/* left */}
      <div className="lg:w-1/2 flex flex-col gap-10 md:gap-20 ">
        <p className="text-[#003D4D] font-semibold text-lg md:text-3xl">
          ZealYug is building a bridge between employers and job seekers, where
          skills and talents are celebrated and rewarded, challenges are tackled
          with creativity and innovation, and opportunities are found and seized
          with ease and excitement.
        </p>
        <div className="flex gap-10 items-center">
          <img
            src="images/aboutus/face.png"
            className="w-12 md:w-24"
            alt="face"
          />
          <span className="text-md md:text-3xl">
            You are the main chapter of our Story!
          </span>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-col justify-center lg:w-1/2  items-center gap-7 md:gap-10 mb-10">
        {/*01 */}
        <Card
          no="01"
          heading="Small Steps to the Journey"
          paragraph="ZealYug was founded by a group of passionate individuals to create a
          community-driven platform that would enable job seekers to showcase
          their unique abilities and enable employers to discover the best
          talent for their needs."
        />
        {/* 02 */}
        <Card
          no="02"
          heading="Hardwork and Dedication to Serve"
          paragraph="The team at ZealYug worked tirelessly to create a platform that
              would meet these needs, and the result is a vibrant online
              community that connects employers and job seekers in new and
              exciting ways."
        />

        {/* 03 */}
        <Card
          no="03"
          heading="We always care for you"
          paragraph="Everyday, ZealYug continues to evolve and improve, always staying true to its core values and commitment to creating a better, more inclusive hiring process for all."
        />
      </div>
    </section>
  );
};

export default OurStory;
