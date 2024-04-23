import React from "react";
import { useNavigate } from "react-router-dom";
// import Card from "../../AboutUs/components/Card";
import BlogCard from "./BlogCard";

const BlogTemplates = () => {
  const navigate = useNavigate();
    function goToBlog() {
        navigate("/Blog");
      }
  return (
    <div className=" w-full flex place-content-center p-10 justify-center">
      <div className="rounded-xl flex flex-col justify-center w-fit bg-white">
      <div className=" w-fit sm:w-fit lg:w-fit flex flex-row flex-wrap justify-center pt-12">
            <div className="w-fit m-5">
              <BlogCard />
            </div>
            <div className="w-fit m-5">
              <BlogCard />
            </div>
            <div className="w-fit m-5">
              <BlogCard />
            </div>
        </div>
        <div className="flex justify-center">
        <button onClick={goToBlog} className="md:text-1xl my-5 font-semibold mx-10 px-8 py-2 rounded-full border-2 border-gray-800 hover:bg-[#003d4d] hover:text-white transition-all hover:ease-in-out duration-300">
          View More....
        </button>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplates;
