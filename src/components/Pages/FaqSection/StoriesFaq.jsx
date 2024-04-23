import React, {useState} from 'react'

const StoriesFaq = () => {
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
            <span>What can I share on ZealYug in the Stories, Ideas, Articles, Experiences section?</span>
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
            You can share your stories, ideas, articles, and experiences related to your field of expertise or personal journey. You can share insights, lessons learned, industry trends, success stories, and more.
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
            <span>Can I edit or delete my shared content on ZealYug?</span>
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
            Yes, you have the flexibility to edit or delete your shared content on ZealYug. Simply access your post, click on the appropriate options, and make the desired changes or delete the content.
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
            <span>Can I earn from sharing content on ZealYug?</span>
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
            ZealYug offers the opportunity to earn after posting a certain number of contents. Once you meet the specified criteria, you become eligible to earn. Stay tuned for more details and updates on the earning program.

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
            Can I benefit from the content shared by others on ZealYug?
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
            Absolutely! ZealYug fosters a community of knowledge sharing and learning. You can explore the stories, ideas, articles, and experiences shared by other users, gain insights, and broaden your understanding of various subjects and industries.
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
            Is there a limit to the length of the content I can share on ZealYug?
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
            ZealYug encourages concise and engaging content. While there is specific word limit of 3000, we recommend keeping your content focused and easily consumable. Aim for a length that captures the essence of your message and maintains reader interest.
            </p>
          </div>
        </li>
        {/* Add the remaining FAQ items here */}
      </ul>
    </div>
  </div>
  )
}

export default StoriesFaq