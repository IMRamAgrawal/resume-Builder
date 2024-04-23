import React, { useState } from "react";

const CompanyProfileFaq = () => {
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
              <span>What is a Company Profile on ZealYug?</span>
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
              A Company Profile on ZealYug is a comprehensive and detailed representation of your organization's information, values, culture, and job opportunities. It serves as a virtual introduction to your company for potential candidates.
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
              <span>How can I create a Company Profile on ZealYug?</span>
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
              You can Create a standout Company Profile on ZealYug in just a few clicks! Start from the homepage or "Hire Talent" page, Fill in the necessary details, such as your company name, description, industry, location, logo, etc. You can also add information about your team, mission, values, and any additional sections that showcase your company's unique aspects.
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
              <span>Can I add job postings to my Company Profile on ZealYug?</span>
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
              Absolutely! You can include job postings within your Company Profile to attract and engage potential candidates. Simply navigate to the "Job Postings" section and provide the relevant details for each job opening.
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
              How can I make my Company Profile stand out on ZealYug?
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
              To make your Company Profile stand out, ensure that you provide detailed and compelling information about your company, its values, work environment, and unique selling points. Include high-quality images and videos that reflect your company culture. Regularly update your profile with new job opportunities and engaging content.
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
              Is there a specific reason why I am unable to create my company profile?
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
              There may be various reasons why you are facing difficulties in creating your company profile on ZealYug. It could be technical issues, incorrect information provided, or any other factors. If the issue persists, reach out to our support team at <a className="text-sky-600" href="support@zealyug.com">support@zealyug.com</a> for assistance.
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
              <span>Can I still engage with potential hires if I don't have a company profile?</span>
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
              Yes, even without a company profile, you can engage with potential hires on ZealYug. You can explore their profiles, communicate with them through the platform's messaging system, and evaluate their suitability for your job openings. However, having a company profile enhances your credibility and visibility, which can positively impact your interactions with candidates and find the best fit for your role in a time-saving manner.
              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
      </div>
    </div>




  );
};

export default CompanyProfileFaq;
