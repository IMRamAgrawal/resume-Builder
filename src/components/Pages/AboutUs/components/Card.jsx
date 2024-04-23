import React from "react";

const Card = (props) => {
  const {imageSrc, name, role, description} = props;
  return (
    <div className="shadow-lg w-3/4 gap-2 md:gap-5 p-3 rounded-xl flex flex-col items-center">
      <img className="w-11/12" src={imageSrc} alt=""/>
      <h2 className="text-lg md:text-2xl font-bold">{name}</h2>
      <p className="md:text-lg font-mono">{role}</p>
      <p className=" text-xs md:text-base md:font-medium text-center">
        {description}
      </p>
    </div>
  );
};

export default Card;
