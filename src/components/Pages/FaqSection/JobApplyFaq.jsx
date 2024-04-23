import React, {useState} from 'react'

const JobApplyFaq = () => {
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
            <span>How do I apply for a job on ZealYug?</span>
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
            Applying jobs on ZealYug is quick and simple, first, complete your profile and generate your unique QR resume. Then, showcase your skills, talents, and experiences on your feed to build a strong profile. Finally, apply for the jobs that interest you.
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
            <span>Can I track the status of my job application on ZealYug?</span>
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
            Yes, you can track the status of your job application on ZealYug. We have a built-in Application Tracking System (ATS) that can be found in the <button className='text-blue-600'>My Applications</button> section of your account. This allows you to get real-time updates on the jobs you've applied for, including whether you've been selected, are still in consideration, or have been rejected. You can also view the details you've sent to potential employers through our platform.
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
            <span>Can I edit my application after submitting it on ZealYug?</span>
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
            Please note that editing your application after submission will not change the version that has already been sent to the employer. It is always a good practice to carefully review your application and know the job requirements before submitting it.

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
            How can I stand out among other applicants on ZealYug?
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
            To stand out among other applicants on ZealYug, make sure to have a complete and impressive profile with skills/talent or experience/stories shown on the platform. Make sure to tailor your application to the job description and include a short video resume showcasing your personality and skills. Engage with employers by commenting on their posts and participate in event/challenges to showcase your talent.
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
            Is it free to apply for the jobs from ZealYug?
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
            Yes, of course! Applying for jobs on ZealYug is as free as the air we breathe, and we're not planning on charging for oxygen anytime soon 😉
            </p>
          </div>
        </li>
        {/* Add the remaining FAQ items here */}
      </ul>
    </div>
  </div>
  )
}

export default JobApplyFaq