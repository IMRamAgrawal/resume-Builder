import React, { useState } from "react";

const GeneralFaq = () => {
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
              <span>What is ZealYug?</span>
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
                We are a cutting-edge hiring platform that connects job seekers
                with employers based on their skills, talents, experience, and
                stories they share on our platform, providing a personalized and
                efficient hiring experience for both employers and candidates.
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
              <span>How does ZealYug work?</span>
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
                We assists employers in finding the best match for their
                organisation based on a candidate's skills, talents, and
                distinctive background. Employers can interact with top talent
                in a more intimate and meaningful way with us by going beyond
                the limitations of traditional resumes. It is a place where job
                applicants may exhibit their entire potential and stand out for
                more than just their resume.
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
              <span>What type of jobs are available on ZealYug?</span>
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
                ZealYug offers a variety of job opportunities such as full-time
                jobs, part-time jobs, remote work, freelancing, internships,
                instant jobs, shadowing, and more.
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
                How can I increase my chances of getting hired through ZealYug?
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
                To increase your chances of getting hired through ZealYug,
                Submit the Challenges given by the employer, complete your
                profile, showcase your skills, talent, stories and experiences,
                apply to relevant job opportunities, sharing introductory video
                on your profile, participate in different challenges and
                shadowing programs.
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
                How can employers search for potential candidates on ZealYug?
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
                Employers can search for potential candidates on ZealYug by
                browsing through the profiles of candidates who match their job
                requirements and have shared their skills, talent, experience,
                stories, and projects on the platform. With the added feature of
                short video, you can also get a better understanding of a
                candidate's personality and communication skills before
                initiating the hiring process.
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
              <span>Is ZealYug Real or Fake?</span>
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
                ZealYug is a real and legitimate platform. It is a reliable and
                trusted platform for connecting job seekers with employers and
                providing opportunities for career growth. ZealYug is committed
                to maintaining the authenticity and integrity of its services,
                ensuring a transparent and trustworthy environment for users.
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
              <span>What are the common reasons for account restrictions on ZealYug?</span>
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
              Account restrictions on ZealYug may occur due to violations of our platform's terms of service or community guidelines. This can include engaging in inappropriate behavior, spamming, posting fraudulent content, or any other activities that are deemed to be in violation of our policies. Our team will provide you with specific details regarding the reason for the restriction.
              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
        <ul className="flex flex-col">
          <li className="bg-white my-2 shadow-lg">
            <h2
              onClick={() => handleClick(8)}
              className="flex flex-row justify-between items-center hover:bg-slate-200 font-semibold p-3 cursor-pointer"
            >
              <span>Can I appeal the account restriction decision?</span>
              <svg
                className={`fill-current text-cyan-950 h-6 w-6 transform transition-transform duration-500 ${handleRotate(
                  8
                )}`}
                viewBox="0 0 20 20"
              >
                <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
              </svg>
            </h2>
            <div
              className={`border-l-2 bg-slate-200 text-cyan-950 overflow-hidden duration-500 transition-all ${handleToggle(
                8
              )}`}
            >
              <p className="p-3 text-gray-900">
              Yes, you can appeal the account restriction decision by contacting our support team. They will review your appeal and assess whether the restriction can be lifted based on the information provided. Please note that not all appeals may result in the removal of the account restriction, as the decision will be based on the specific circumstances and compliance with our policies              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
      </div>
    </div>




  );
};

export default GeneralFaq;
