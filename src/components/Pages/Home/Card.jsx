import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col m-2 w-[240px] gap-5 md:w-[300px] shadow shadow-gray-400 justify-center items-center p-4 md:p-8 bg-[#ffffff] rounded-xl">
      <div className="w-20 rounded-full">
        <img
          src="images/aboutus/person.png"
          className="rounded-full w-full"
          alt="profileImg"
        />
      </div>

      <h2 className="text-lg font-semibold mb-1">Sachin Tendulkar</h2>
      <div className="">
        <p className="break-all max-md:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco lore
        </p>
      </div>
    </div>
  );
};

export default Card;
