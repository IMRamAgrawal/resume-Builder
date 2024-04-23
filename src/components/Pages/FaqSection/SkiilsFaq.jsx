import React, { useState } from "react";

const SkillsFaq = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleClick = (idx) => {
    setActiveTab(activeTab === idx ? null : idx);
  };

  const handleRotate = (idx) => {
    return activeTab === idx ? "rotate-180" : "";
  };

  const handleToggle = (idx) => {
    return activeTab === idx ? `max-h-full` : "max-h-0";
  };

  return (
    <div className="flex justify-center items-center pt-20">
      <div className="w-9/12 flex-row border-2 rounded-2xl p-10 bg-white h-full">
        <h2 className="flex justify-center text-4xl pb-7 font-semibold text-cyan-950 mb-2">
          Frequently asked questions
        </h2>
        <ul className="flex flex-col">
          <li className="bg-white my-2 shadow-lg">
            <h2
              onClick={() => handleClick(1)}
              className="flex flex-row justify-between items-center hover:bg-slate-200 font-semibold p-3 cursor-pointer"
            >
              <span>What is the Skills and Talent Showing feature on ZealYug?</span>
              <svg
                className={`fill-current text-cyan-950 h-6 w-6 transform transition-transform duration-500 ${handleRotate(
                  1
                )}`}
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </h2>
            <div
              className={`bg-slate-200 border-cyan-950 overflow-hidden duration-500 transition-all ${handleToggle(
                1
              )}`}
            >
              <p className="p-3 text-gray-900">
              The Skills and Talent Showing feature on ZealYug is a platform where you can showcase your unique skills, talents or projects. It provides an opportunity to highlight your expertise and stand out to potential employers and collaborators. 
              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
        <ul className="flex flex-col">
          <li className="bg-white my-2 shadow-lg">
            <h2
              onClick={() => handleClick(2)}
              className="flex flex-row justify-between items-center hover:bg-slate-200 font-semibold p-3 cursor-pointer"
            >
              <span> How can I showcase my skills and talents on ZealYug?</span>
              <svg
                className={`fill-current text-cyan-950 h-6 w-6 transform transition-transform duration-500 ${handleRotate(
                  2
                )}`}
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </h2>
            <div
              className={`bg-slate-200 text-cyan-950 overflow-hidden duration-500 transition-all ${handleToggle(
                2
              )}`}
            >
              <p className="p-3 text-gray-900">
              Click on <button className="text-sky-600">Show Your Skills/ Talent</button> where you can showcase your unique skills, talents or projects. It provides an opportunity to highlight your expertise and stand out to potential employers and collaborators. 
              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
        <ul className="flex flex-col">
          <li className="bg-white my-2 shadow-lg">
            <h2
              onClick={() => handleClick(3)}
              className="flex flex-row justify-between items-center hover:bg-slate-200 font-semibold p-3 cursor-pointer"
            >
              <span>What are the benefits of showcasing my skills and talents on ZealYug?</span>
              <svg
                className={`fill-current text-cyan-950 h-6 w-6 transform transition-transform duration-500 ${handleRotate(
                  3
                )}`}
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </h2>
            <div
              className={`bg-slate-200 text-cyan-950 overflow-hidden duration-500 transition-all ${handleToggle(
                3
              )}`}
            >
              <p className="p-3 text-gray-900">
              Showcasing your skills and talents on ZealYug boosts your professional profile, increases visibility to potential employers, and opens doors to relevant opportunities. Plus, after creating 10 posts and earning the content creator badge, you can unlock the opportunity to earn.
              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
        <ul className="flex flex-col">
          <li className="bg-white my-2 shadow-lg">
            <h2
              onClick={() => handleClick(4)}
              className="flex flex-row justify-between items-center hover:bg-slate-200 font-semibold p-3 cursor-pointer"
            >
              <span>
              How can showcasing my skills and talents benefit my career?
              </span>
              <svg
                className={`fill-current text-cyan-950 h-6 w-6 transform transition-transform duration-500 ${handleRotate(
                  4
                )}`}
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </h2>
            <div
              className={`border-l-2 bg-slate-200 text-cyan-950 overflow-hidden duration-500 transition-all ${handleToggle(
                4
              )}`}
            >
              <p className="p-3 text-gray-900">
              ZealYug can open doors to various career opportunities when you share your skills and talents. It can attract potential employers, clients, and collaborators who are specifically interested in your unique abilities. It also helps you build a strong professional brand and network within your industry.
              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
        <ul className="flex flex-col">
          <li className="bg-white my-2 shadow-lg">
            <h2
              onClick={() => handleClick(5)}
              className="flex flex-row justify-between items-center hover:bg-slate-200 font-semibold p-3 cursor-pointer"
            >
              <span>
              How do I share my projects on ZealYug?
              </span>
              <svg
                className={`fill-current text-cyan-950 h-6 w-6 transform transition-transform duration-500 ${handleRotate(
                  5
                )}`}
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </h2>
            <div
              className={`border-l-2 bg-slate-200 text-cyan-950 overflow-hidden duration-500 transition-all ${handleToggle(
                5
              )}`}
            >
              <p className="p-3 text-gray-900">
              Sharing your projects on ZealYug is super easy. Simply navigate to your profile and find the option to share your project. Provide relevant details, such as project description, objectives, outcomes, and any supporting materials. You can also add images or videos to enhance your project showcase.
              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
        <ul className="flex flex-col">
          <li className="bg-white my-2 shadow-lg">
            <h2
              onClick={() => handleClick(6)}
              className="flex flex-row justify-between items-center hover:bg-slate-200 font-semibold p-3 cursor-pointer"
            >
              <span> What should I do if my content is under review on ZealYug?</span>
              <svg
                className={`fill-current text-cyan-950 h-6 w-6 transform transition-transform duration-500 ${handleRotate(
                  6
                )}`}
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </h2>
            <div
              className={`border-l-2 bg-slate-200 text-cyan-950 overflow-hidden duration-500 transition-all ${handleToggle(
                6
              )}`}
            >
              <p className="p-3 text-gray-900">
              If your content is under review on ZealYug, don't worry! Our dedicated team is diligently reviewing the content to ensure it aligns with our platform's guidelines and policies. While the review process takes place, we recommend being patient and allowing our team sufficient time to complete the assessment.
              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
        <ul className="flex flex-col">
          <li className="bg-white my-2 shadow-lg">
            <h2
              onClick={() => handleClick(7)}
              className="flex flex-row justify-between items-center hover:bg-slate-200 font-semibold p-3 cursor-pointer"
            >
              <span>What if my content doesn't meet the platform's guidelines?</span>
              <svg
                className={`fill-current text-cyan-950 h-6 w-6 transform transition-transform duration-500 ${handleRotate(
                  7
                )}`}
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </h2>
            <div
              className={`border-l-2 bg-slate-200 text-cyan-950 overflow-hidden duration-500 transition-all ${handleToggle(
                7
              )}`}
            >
              <p className="p-3 text-gray-900">
              If your content doesn't meet our platform's guidelines, our team will provide you with the necessary feedback and recommendations for improvement. We encourage you to review the feedback and make the necessary adjustments to ensure compliance with our guidelines. You can resubmit the updated content for review once the modifications are made.
              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
      </div>
    </div>




  );
};

export default SkillsFaq;
