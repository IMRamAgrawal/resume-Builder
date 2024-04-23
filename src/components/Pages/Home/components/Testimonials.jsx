import React from "react";
import Card from "../Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex justify-evenly max-md:flex-col items-center mt-10 md:mt-20 bg-gradient-to-b from-[#ffffff] via-[#E2FAFE] to-white">
      <img
        src="images/home/testimonials.png"
        alt="displayImg"
        className="w-2/3 md:w-[30%] "
      />

      <div className=" md:w-3/4 flex flex-col gap:3 md:gap-10 items-center">
        <h1 className="max-md:mb-10 text-[#003D4D] lg:text-5xl sm:text-3xl text-2xl font-bold ">
          Hear What people are saying?
        </h1>
        <div className="w-full sm:w-3/4">
          <Slider
            variableWidth={true}
            centerMode={true}
            adaptiveHeight={true}
            swipe={true}
            {...settings}
          >
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
            <div>
              <Card />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
