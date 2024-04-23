import React from "react";
import "./List/Sucesscarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Coro from "./List/Coro";
function Sucesscarousel() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" w-[100vw] bg-white flex flex-col items-center mb-5 md:mb-10 gap-4 md:gap-5 ">
      <h1 className=" text-[#003D4D] md:text-[4rem]  text-[2rem] font-bold mt-10 md:mt-16">
        Sucess Stories
      </h1>
      <div className="w-3/4">
        <Slider centerMode={false} adaptiveHeight={true} {...settings}>
          <div>
            <Coro />{" "}
          </div>
          <div>
            <Coro />{" "}
          </div>
          <div>
            <Coro />{" "}
          </div>
          <div>
            <Coro />{" "}
          </div>
          <div>
            <Coro />{" "}
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Sucesscarousel;
