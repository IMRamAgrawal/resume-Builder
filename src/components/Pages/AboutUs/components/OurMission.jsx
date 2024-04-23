import React from "react";

const OurMission = () => {
  return (
    <section className="flex flex-col-reverse gap-8 md:flex-row  ">
      {/* left */}
      <div className="flex flex-col gap-8 md:w-1/2">
        <h1 className="text-[#003D4D] text-2xl md:text-6xl font-bold ">
          Our Mission
        </h1>
        <p className="md:text-xl xl:text-2xl tracking-wide md:leading-8 ">
          ZealYug is on a mission to revolutionize the hiring process by
          building an online community where individuals can share, learn, and
          teach skills, while also earning from it. Our platform is designed to
          be more than just a place to find a job, but also a hub for personal
          and professional growth. We believe in hiring not just based on
          resumes, but on a person's skills, experience, stories, and talents.
        </p>
        <p className="md:text-xl xl:text-2xl tracking-wide md:leading-8 ">
          Our core values of authenticity, integrity, and efficiency guide us in
          ensuring that both job seekers and employers have a positive and
          rewarding experience. With ZealYug, We aim to empower individuals and
          businesses to achieve their goals and dreams. Time is cost and cost is
          what we save for you and your business.
        </p>
      </div>
      {/* right */}
      <div className="md:w-1/2 flex justify-center">
        <img src="images/AboutUs/mission.png" alt="mission" />
      </div>
    </section>
  );
};

export default OurMission;
