import React from "react";

const Others = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-center mb-5  md:mb-12 text-[#003D4D] md:text-5xl sm:text-3xl text-2xl font-bold ">
        Our Numbers
      </h1>
      <div className="w-2/3  flex flex-wrap justify-evenly gap-10">
        <NumberCard
          color="#EDF5FF"
          textcolor="#124D9B"
          img="usercheck.png"
          text="Active Users"
          member="0"
        />
        <NumberCard
          color="#FFFDF6"
          textcolor="#9D9D00"
          img="sunrise.png"
          text="Opportunities"
          member="0"
        />
        <NumberCard
          color="#FFF2FD"
          textcolor="#8B3D7E"
          img="airplay.png"
          text="Componies"
          member="0+"
        />
        <NumberCard
          color="#F8FFF6"
          textcolor="#22934A"
          img="flag.png"
          text="Cities"
          member="1+"
        />
      </div>
    </div>
  );
};

export default Others;
