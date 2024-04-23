import React, { useState } from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Teams = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [showAll, setShowAll] = useState(false);

  const toggleCards = () => {
    setShowAll(!showAll);
  };
  return (
    <section className="flex flex-col gap-8 ">
      <h1 className="text-[#003D4D] text-center text-2xl md:text-6xl font-bold ">
        Our Leading, Strong And Creative Team
      </h1>
      <div className=" grid gap-10 justify-items-center items-center grid-cols-4 max-lg:hidden">
      
      
        <Card
          imageSrc="Images/TeamMembers/subhod.jpg"
          name="Subhod Pandit"
          role="Founder"
          description="Your enjoyment is our Motivation. I am always open for your feedbacks"
        />
      
    
        <Card 
        imageSrc="Images/TeamMembers/surveer.jpg"
        name="Surveer Singh"
        role="Co-Founder"
        description="We are working for a vision to bring opportunities and hiring ease"
        />
         <Card 
             imageSrc="Images/TeamMembers/benezeer.jpg"
             name="Benazeer Suhaila"
             role="Senior HR"
             description="I'm so delighted to be a part of this wonderful company, I can feel my career growth with this startup and Amazing Founder's and co-Founder's."
            />
        <Card 
          imageSrc="Images/TeamMembers/shayan.jpg"
          name="Shayan Giri"
          role="Frontend Developer"
          description="Never Give up. Today is hard and tomorrow will be Worse, but the day after Tomorrow will be Sunshine. Feel great full to be part of ZealYug family."
        />
       
        {showAll && (
          <>
           <Card 
        imageSrc="Images/TeamMembers/sourav mete.jpg"
        name="Sourav Mete"
        role="Frontend Developer"
        description="Never Give up. Today is hard and tomorrow will be Worse, but the day after Tomorrow will be Sunshine. Feel great full to be part of ZealYug family."
        />
            <Card 
            imageSrc="Images/TeamMembers/ram.jpg"
            name="Ram Agarwal"
            role="Full-Stack Developer"
            description="A great platform to work with and feel privileged to be part of Zealyug team."
            />
            <Card 
            imageSrc="Images/TeamMembers/ishaan Sarawat.jpg"
            name="Ishaan Saraswat"
            role="Full-Stack Developer"
            description="Productive working comes with the positive vision."
            />
            <Card 
            imageSrc="Images/TeamMembers/krishna.png"
            name="Krishna kant Verma"
            role="Full-Stack Developer"
            description="Zealyug is good platform and have a great mentor and leader to guide us on right path  to make the best version of yourself"
            />
            <Card 
            imageSrc="Images/TeamMembers/yugal.jpg"
            name="Yugal Neware"
            role="UI/UX Designer"
            description="Working with ZealYug brings me an opportunity advance myself in every other aspect. And the work environment is just next to excellent."
            />
            <Card 
            imageSrc="Images/TeamMembers/aarohi .jpg"
            name="Aarohi Mishra"
            role="HR"
            description="ZealYug is a company that values its employees and has a strong sense of community.It's a great work environment where you can grow professionally.It feels fantastic to work with the team that are highly productive and visionary."
            />
            <Card 
            imageSrc="Images/TeamMembers/surabhi.jpg"
            name="Surabhi Barat"
            role="HR"
            description="ZealYug is an amazing startup. I have wide experience with ZealYug. After joining ZealYug, I learned many things and enhanced my skills. I am glad to work with such a wonderful organization and wonderful team members"
            />
            <Card 
            imageSrc="Images/TeamMembers/Sakshi.jpg"
            name="Sakshi Sharma"
            role="HR"
            description="Zealyug is great place to work I can  confidently say  that   it  was an amazing  experience, The company culture is extremely welcoming and  supportive"
            />
          </>
        )}
      </div>
      <div className="lg:hidden w-full">
        <Slider centerMode={true} adaptiveHeight={true} {...settings}>
          <div>
            <Card 
            imageSrc="Images/TeamMembers/subhod.jpg"
            name="Subhod Pandit"
            role="Founder"
            description="Your enjoyment is our Motivation. I am always open for your feedbacks"/>
          </div>
          <div>
            <Card
            imageSrc="Images/TeamMembers/surveer.jpg"
            name="Surveer Singh"
            role="Co-Founder"
            description="We are working for a vision to bring opportunities and hiring ease" />
          </div>
          <div>
            <Card
            imageSrc="Images/TeamMembers/benezeer.jpg"
            name="Benazeer Suhaila"
            role="Senior HR"
            description="I'm so delighted to be a part of this wonderful company, I can feel my career growth with this startup and Amazing Founder's and co-Founder's." />
          </div>
          <div>
            <Card 
             imageSrc="Images/TeamMembers/shayan.jpg"
             name="Shayan Giri"
             role="Frontend Developer"
             description="Never Give up. Today is hard and tomorrow will be Worse, but the day after Tomorrow will be Sunshine. Feel great full to be part of ZealYug family."/>
          </div>
          <div>
            <Card
             imageSrc="Images/TeamMembers/sourav mete.jpg"
             name="Sourav Mete"
             role="Frontend Developer"
             description="Never Give up. Today is hard and tomorrow will be Worse, but the day after Tomorrow will be Sunshine. Feel great full to be part of ZealYug family." />
          </div>
        </Slider>
      </div>
      <Link className="xl:w-1/6 mx-auto mb-8">
        <button
          onClick={toggleCards}
          className="w-full box-border bg-white text-black  text-base lg:text-lg font-semibold py-1 md:py-3 px-6 rounded-full border-2 border-gray-800 hover:bg-[#003d4d] hover:text-white transition-all hover:ease-in-out duration-300"
        >
          {showAll ? "Hide All" : "View All"}
        </button>
      </Link>
    </section>
  );
};

export default Teams;
