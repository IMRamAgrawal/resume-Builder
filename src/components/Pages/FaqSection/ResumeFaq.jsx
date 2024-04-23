import React, {useState} from 'react'

const ResumeFaq = () => {
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
            <span>What is ZealYug's Resume Builder?</span>
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
            ZealYug's Resume Builder is a powerful online tool that allows you to create professional resumes with ease. It provides a user-friendly interface and advanced features to help you craft impactful resumes that stand out.
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
            <span>Is ZealYug's Resume Builder free to use?</span>
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
            Yes, ZealYug's Resume Builder is completely free to use. You can create, edit, and download your resumes without any cost.
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
            <span>Can I import my existing resume into ZealYug's Resume Builder?</span>
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
            Unfortunately, ZealYug's Resume Builder does not currently support the import of existing resumes. However, you can upload your current resume with ease. But we suggest you to recreate your resume and take advantage of its advanced features.

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
            Can I download my resume as a PDF or Word document?
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
            Absolutely! Once you have completed your resume using ZealYug's Resume Builder, you can easily download it as a high-quality PDF or Word document.
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
            Is my personal information and resume data secure on ZealYug's Resume Builder?
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
            ZealYug takes data privacy and security seriously. Your personal information and resume data are protected using industry-standard security measures. ZealYug follows strict privacy policies to ensure the confidentiality and safety of your information.
            </p>
          </div>
        </li>
        {/* Add the remaining FAQ items here */}
      </ul>
    </div>
  </div>
  )
}

export default ResumeFaq