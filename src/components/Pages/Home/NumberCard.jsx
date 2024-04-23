import React from "react";

const NumberCard = ({ color, textcolor, img, text, member }) => {
  return (
    <div
      style={{ background: `${color}` }}
      className={`relative rounded-2xl bg- w-52 h-44  p-5`}
    >
      <span style={{ color: `${textcolor}` }} className="font-bold text-5xl">
        {member}
      </span>
      <p className="mt-1 text-sm font-semibold">{text}</p>
      <img
        src={`images/home/${img}`}
        alt="card"
        className="absolute right-5 bottom-5"
      />
    </div>
  );
};

export default NumberCard;
