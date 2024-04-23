import React, { useState } from "react";

const PartnerWithUsFaq = () => {
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
              <span>Who can partner with ZealYug?</span>
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
              ZealYug welcomes partnerships with a wide range of organizations, including companies, start-ups, educational institutions, influencers, small businesses, and many more. If you are passionate about talent acquisition, career development, creating opportunities, and similar context; we would love to explore a partnership with you.
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
              <span>What are the benefits of partnering with ZealYug?</span>
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
              Partnering with ZealYug offers numerous benefits, including access to a diverse talent pool, increased brand visibility, certificate collaborations, opportunity to connect with potential customers or employees and many more. Additionally, partners receive promotional opportunities, collaborative marketing efforts, and exposure to ZealYug's active community.
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
              <span>How can I become a partner with ZealYug?</span>
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
              Becoming a partner with ZealYug is easy! Simply reach out to us through the <button className="text-sky-600">Partner with Us</button> section on our website and simply fill out your details. Our Partnership team will directly get in touch with you. We will be happy to discuss potential collaboration opportunities and explore how we can work together to achieve mutual goals.
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
              What types of partnerships does ZealYug offer?
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
              ZealYug offers various types of partnerships, including strategic alliances, event collaborations, co-marketing initiatives, content partnerships, and many more. We are open to customizing partnerships based on the specific needs and objectives of potential collaborators.
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
              How can partnering with ZealYug help grow my business?
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
              Partnering with ZealYug can significantly contribute to the growth of your business by expanding your reach, accessing a targeted audience, and leveraging our platform's resources. It allows you to tap into a network of skilled professionals and potential customers, enhancing your brand visibility and market presence.
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
              <span>Can I propose a partnership idea to ZealYug?</span>
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
              Absolutely! ZealYug welcomes innovative and creative partnership ideas. If you have a unique collaboration concept or a specific proposal in mind, we encourage you to reach out to us. We are open to exploring new ideas and opportunities that align with our mission and objectives.
              </p>
            </div>
          </li>
          {/* Add the remaining FAQ items here */}
        </ul>
      </div>
    </div>




  );
};

export default PartnerWithUsFaq;
