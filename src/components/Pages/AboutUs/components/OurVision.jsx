import React from "react";

const OurVision = () => {
  return (
    <section className="flex flex-col gap-8 md:flex-row  ">
      {/* left */}
      <div className="md:w-1/2 flex justify-center">
        <img src="images/AboutUs/Goal.png" alt="mission" />
      </div>

      {/* right */}
      <div className="flex flex-col gap-8 md:w-1/2">
        <h1 className="text-[#003D4D] text-2xl md:text-6xl font-bold ">
          Our Vision
        </h1>
        <p className="md:text-xl xl:text-2xl tracking-wide md:leading-8 ">
          ZealYug's vision is to become the leading online platform for hiring
          and skill-sharing, where job seekers and employers can connect
          seamlessly, build valuable relationships, and find opportunities to
          learn and grow. Through our innovative approach to hiring and
          skill-sharing, we hope to empower individuals and businesses to reach
          their full potential and achieve success.
        </p>
        <p className="md:text-xl xl:text-2xl tracking-wide md:leading-8 ">
          With our platform, employers have access to a large pool of skilled
          and talented candidates, and can hire based on more than just a
          resume. Our goal is to build a strong relationship with our clients,
          where we are not just a service provider, but a partner in their
          success.
        </p>
      </div>
    </section>
  );
};

export default OurVision;
