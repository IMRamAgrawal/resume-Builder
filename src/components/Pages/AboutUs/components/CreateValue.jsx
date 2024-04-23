import React from "react";
import ReactPlayer from "react-player";

const CreateValue = () => {
  return (
    <section className="flex flex-col gap-8">
      <h1 className=" text-center text-[#003D4D] text-2xl md:text-6xl font-bold ">
        How we create value to you
      </h1>
      <div>
        <ReactPlayer
          url="https://youtu.be/P9GevlH9JwU"
          width="100%"
          height="50vh"
          controls={true}
        />
      </div>
    </section>
  );
};

export default CreateValue;
