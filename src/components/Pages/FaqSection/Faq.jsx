import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Faq = () => {
  const navigate = useNavigate();
  function goToGeneralFaq() {
    navigate("/GeneralFaq");
  }
  function goToJobPostingFaq() {
    navigate("/JobPostingFaq");
  }

  function goToJobApplyFaq() {
    navigate("/JobApplyFaq");
  }

  function goToSkillsFaq() {
    navigate("/SkillsFaq");
  }

  function goToStoriesFaq() {
    navigate("/StoriesFaq");
  }

  function goToResumeFaq() {
    navigate("/ResumeFaq");
  }

  function goToUserProfileFaq() {
    navigate("/UserProfileFaq");
  }

  function goToSuppotersFaq() {
    navigate("/SupportersFaq");
  }

  function goToCandidatesFaq() {
    navigate("/CandidatesFaq");
  }

  function goToCompanyProfileFaq() {
    navigate("/CompanyProfileFaq");
  }

  function goToEmployersFaq() {
    navigate("/EmployersFaq");
  }

  function goToPartnerWithUsFaq() {
    navigate("/PartnerWithUsFaq");
  }

  const [changeDivFlag, SetchangeDivFlag] = useState({
    General: true,
    Job: false,
    Profile: false,
    Company: false,
  });

  function GeneralQuestion() {
    SetchangeDivFlag({
      General: true,
      Job: false,
      Profile: false,
      Company: false,
    });
  }

  function JobRelated() {
    SetchangeDivFlag({
      General: false,
      Job: true,
      Profile: false,
      Company: false,
    });
  }
  function ProfileRelated() {
    SetchangeDivFlag({
      General: false,
      Job: false,
      Profile: true,
      Company: false,
    });
  }
  function CompanyRelated() {
    SetchangeDivFlag({
      General: false,
      Job: false,
      Profile: false,
      Company: true,
    });
  }
  return (
    <div className="pt-10">
      <div className="flex flex-col sm:flex-row items-center justify-between pb-10 mx-20">
  <p className="flex mb-4 sm:mb-0 text-cyan-950 text-2xl sm:text-3xl font-bold">
    Frequently Asked Questions (FAQs)
  </p>
  <input
    type="search"
    name="search"
    placeholder="Search"
    className="bg-white h-10 w-max px-4 sm:px-6 rounded-xl text-md focus:outline-slate-400 sm:w-64 outline mt-4 sm:mt-0"
  />
</div>
      <div className=" bg-slate-200 w-full max-[430px]:w-fit text-gray-500 text-xl font-semibold flex justify-evenly items-center">
        <div
          className={` cursor-pointer p-5 ${
            changeDivFlag.General
              ? "text-cyan-950  border-b-4 border-b-[#003d4d]"
              : null
          }`}
          onClick={GeneralQuestion}
        >
          <p className="mr-1" id="General Question">
            General Questions
          </p>
        </div>

        <div
          className={` cursor-pointer p-5  ${
            changeDivFlag.Job
              ? "text-cyan-950 border-b-4 border-b-[#003d4d]"
              : null
          }`}
          onClick={JobRelated}
        >
          <p className="mr-1" id="Job Related">
            Job Related Questions
          </p>
        </div>
        <div
          className={`cursor-pointer p-5  ${
            changeDivFlag.Profile
              ? "text-cyan-950  border-b-4 border-b-[#003d4d]"
              : null
          }`}
          onClick={ProfileRelated}
        >
          <p className="mr-1" id="Profile Related">
            Profile Related Questions
          </p>
        </div>
        <div
          className={`cursor-pointer p-5 ${
            changeDivFlag.Company
              ? "text-cyan-950 border-b-4 border-b-[#003d4d]"
              : null
          }`}
          onClick={CompanyRelated}
        >
          <p className="mr-1" id="Post Related">
            Company Related Questions
          </p>
        </div>
      </div>
      {/* <div className="flex justify-evenly"> */}
      {/* General questions  */}
      <div
        className={`flex flex-col mt-10 ml-10 ${
          changeDivFlag.General ? "visible" : "invisible absolute"
        }`}
      >
        <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
          <span className="flex justify-center mt-10">
            <svg
              className="bg-indigo-400 bg-opacity-20 rounded"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="mdi:question-network">
                <rect
                  className=""
                  width="46"
                  height="46"
                  rx="5"
                  fill="#717FFC"
                  fill-opacity="0.2"
                />
                <path
                  id="Vector"
                  d="M31.5 7C32.4017 7 33.2665 7.34768 33.9042 7.96655C34.5418 8.58542 34.9 9.42479 34.9 10.3V26.8C34.9 27.6752 34.5418 28.5146 33.9042 29.1335C33.2665 29.7523 32.4017 30.1 31.5 30.1H24.7V33.4H26.4C26.8509 33.4 27.2833 33.5738 27.6021 33.8833C27.9209 34.1927 28.1 34.6124 28.1 35.05H40V38.35H28.1C28.1 38.7876 27.9209 39.2073 27.6021 39.5167C27.2833 39.8262 26.8509 40 26.4 40H19.6C19.1491 40 18.7167 39.8262 18.3979 39.5167C18.0791 39.2073 17.9 38.7876 17.9 38.35H6V35.05H17.9C17.9 34.6124 18.0791 34.1927 18.3979 33.8833C18.7167 33.5738 19.1491 33.4 19.6 33.4H21.3V30.1H14.5C13.5983 30.1 12.7335 29.7523 12.0958 29.1335C11.4582 28.5146 11.1 27.6752 11.1 26.8V10.3C11.1 9.42479 11.4582 8.58542 12.0958 7.96655C12.7335 7.34768 13.5983 7 14.5 7H31.5ZM23.323 10.3C21.844 10.3 20.654 10.63 19.736 11.2735C18.852 11.95 18.41 12.8905 18.427 14.194L18.444 14.2435H21.725C21.742 13.7485 21.895 13.369 22.201 13.105C22.5158 12.8516 22.9141 12.7169 23.323 12.7255C23.85 12.7255 24.292 12.8905 24.598 13.1875C24.904 13.501 25.04 13.93 25.04 14.425C25.04 14.953 24.921 15.3985 24.649 15.778C24.411 16.1575 24.054 16.4875 23.612 16.7515C22.745 17.3125 22.15 17.8075 21.827 18.253C21.487 18.682 21.3 19.375 21.3 20.2H24.7C24.7 19.6885 24.768 19.276 24.921 18.979C25.074 18.6655 25.363 18.385 25.788 18.121C26.553 17.725 27.182 17.2465 27.675 16.5865C28.168 15.9265 28.423 15.25 28.423 14.425C28.423 13.171 27.964 12.1645 27.046 11.422C26.145 10.6795 24.904 10.3 23.323 10.3ZM21.3 21.85V25.15H24.7V21.85H21.3Z"
                  fill="#717FFC"
                />
              </g>
            </svg>
          </span>
          <span className="flex justify-center mt-10">
            <p className="text-cyan-950 text-xl">FAQs General Section</p>
          </span>
          <span className="flex justify-center mt-10">
            <button
              onClick={goToGeneralFaq}
              className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
            >
              <p className="text-neutral-600 text-xl">View</p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="material-symbols:arrow-back">
                  <path
                    id="Vector"
                    d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                    fill="#545454"
                  />
                </g>
              </svg>
            </button>
          </span>
        </div>
      </div>
      {/* job related question */}
      <div
        className={`flex flex-col ml-10 ${
          changeDivFlag.Job ? "visible" : "invisible absolute"
        }`}
      >
        <div className="flex flex-wrap gap-3 mt-10">
          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                className="bg-indigo-400 bg-opacity-20 rounded"
                width="46"
                height="46"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="m-4" id="mdi:folder-question">
                  <rect
                    className=""
                    width="46"
                    height="46"
                    rx="5"
                    fill="#717FFC"
                    fill-opacity="0.2"
                  />
                  <path
                    id="Vector"
                    d="M21.6667 6.5026H13L10.8334 4.33594H4.33335C3.14169 4.33594 2.16669 5.31094 2.16669 6.5026V19.5026C2.16669 20.6943 3.14169 21.6693 4.33335 21.6693H21.6667C22.8584 21.6693 23.8334 20.6943 23.8334 19.5026V8.66927C23.8334 7.4776 22.8584 6.5026 21.6667 6.5026ZM18.2 19.5026H16.575V17.8776H18.2V19.5026ZM18.2 17.1193H16.575C16.575 14.5193 18.9584 14.6276 18.9584 13.0026C18.9584 12.1359 18.2 11.3776 17.3334 11.3776C16.4667 11.3776 15.7084 12.1359 15.7084 13.0026H14.0834C14.0834 11.1609 15.4917 9.7526 17.3334 9.7526C19.175 9.7526 20.5834 11.1609 20.5834 13.0026C20.5834 15.0609 18.2 15.2776 18.2 17.1193Z"
                    fill="#A139D3"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">FAQs for Job Posting</p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToJobPostingFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>

          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                className="bg-indigo-400 bg-opacity-20 rounded"
                width="46"
                height="46"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:file-question">
                  <path
                    id="Vector"
                    d="M6.49998 2.16406C5.29748 2.16406 4.33331 3.12823 4.33331 4.33073V21.6641C4.33331 22.2387 4.56159 22.7898 4.96791 23.1961C5.37424 23.6025 5.92534 23.8307 6.49998 23.8307H19.5C20.0746 23.8307 20.6257 23.6025 21.032 23.1961C21.4384 22.7898 21.6666 22.2387 21.6666 21.6641V8.66406L15.1666 2.16406H6.49998ZM14.0833 3.78906L20.0416 9.7474H14.0833V3.78906ZM13 11.9141C13.8619 11.9141 14.6886 12.2565 15.2981 12.866C15.9076 13.4755 16.25 14.3021 16.25 15.1641C16.25 17.2007 13.8125 17.3957 13.8125 19.2266H12.1875C12.1875 16.5832 14.625 16.7891 14.625 15.1641C14.625 14.7331 14.4538 14.3198 14.149 14.015C13.8443 13.7103 13.431 13.5391 13 13.5391C12.569 13.5391 12.1557 13.7103 11.8509 14.015C11.5462 14.3198 11.375 14.7331 11.375 15.1641H9.74998C9.74998 14.3021 10.0924 13.4755 10.7019 12.866C11.3114 12.2565 12.138 11.9141 13 11.9141ZM12.1875 20.0391H13.8125V21.6641H12.1875V20.0391Z"
                    fill="#FFA622"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">FAQs for Job Apply</p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToJobApplyFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* Profile Related Question */}
      <div
        className={`flex ml-10 h-[500px] overflow-y-scroll no-scrollbar ${
          changeDivFlag.Profile ? "visible" : "invisible absolute"
        }`}
      >
        <div className="flex flex-wrap justify-start gap-3 max-[1024px]:justify-center mt-10">
          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                className="bg-indigo-400 bg-opacity-20 rounded"
                width="46"
                height="46"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:lightbulb-question">
                  <path
                    id="Vector"
                    d="M10 2.5C5.125 2.5 1.25 6.375 1.25 11.25C1.25 14.25 2.75 16.875 5 18.375V21.25C5 22 5.5 22.5 6.25 22.5H13.75C14.5 22.5 15 22 15 21.25V18.375C17.25 16.75 18.75 14.125 18.75 11.25C18.75 6.375 14.875 2.5 10 2.5ZM6.25 26.25C6.25 27 6.75 27.5 7.5 27.5H12.5C13.25 27.5 13.75 27 13.75 26.25V25H6.25V26.25ZM25.625 18.125V20H23.75V18.125H25.625ZM23.125 11.875H21.25V11.25C21.25 9.125 22.875 7.5 25 7.5C27.125 7.5 28.75 9.125 28.75 11.25C28.75 12.5 28.125 13.625 27.125 14.25L26.75 14.5C26 15 25.625 15.75 25.625 16.625V16.875H23.75V16.625C23.75 15.125 24.5 13.75 25.75 13L26.125 12.75C26.625 12.375 26.875 11.875 26.875 11.25C26.875 10.25 26 9.375 25 9.375C24 9.375 23.125 10.25 23.125 11.25V11.875Z"
                    fill="#AE1F1F"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">FAQs for Skills/ Talents</p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToSkillsFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>

          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                className="bg-indigo-400 bg-opacity-20 rounded"
                width="46"
                height="46"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:head-question">
                  <path
                    id="Vector"
                    d="M16.2499 3.75C11.5374 3.75 7.73739 7.4375 7.49989 12.075L5.09989 15.2375C4.79989 15.625 5.09989 16.25 5.62489 16.25H7.49989V20C7.49989 21.3875 8.61239 22.5 9.99989 22.5H11.2499V26.25H19.9999V20.3875C22.9624 18.9875 24.9999 16 24.9999 12.5C24.9999 7.675 21.0999 3.75 16.2499 3.75ZM17.4999 17.5H14.9999V15H17.4999V17.5ZM19.6874 11.0125C19.3249 11.5125 18.8624 11.875 18.2999 12.175C17.9874 12.375 17.7749 12.5875 17.6624 12.825C17.5499 13.05 17.4999 13.3625 17.4999 13.75H14.9999C14.9999 13.125 15.1374 12.6 15.3874 12.275C15.6249 11.9375 16.0624 11.5625 16.6999 11.1375C17.0249 10.9375 17.2874 10.6875 17.4624 10.4C17.6624 10.1125 17.7499 9.775 17.7499 9.375C17.7499 9 17.6499 8.675 17.4249 8.4375C17.1999 8.2125 16.8749 8.0875 16.4874 8.0875C16.1868 8.08098 15.8939 8.18305 15.6624 8.375C15.4374 8.575 15.3249 8.8625 15.3124 9.2375H12.8999L12.8874 9.2C12.8749 8.2125 13.1999 7.5 13.8499 6.9875C14.5249 6.5 15.3999 6.25 16.4874 6.25C17.6499 6.25 18.5624 6.5375 19.2249 7.1C19.8999 7.6625 20.2374 8.425 20.2374 9.375C20.2374 10 20.0499 10.5125 19.6874 11.0125Z"
                    fill="#801212"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">
                FAQs for Stories, Experiences
              </p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToStoriesFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>

          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                className="bg-indigo-400 bg-opacity-20 rounded"
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:beaker-question">
                  <path
                    id="Vector"
                    d="M0 3H18V5C16.9 5 16 5.9 16 7V19C16 20.1 15.1 21 14 21H4C2.9 21 2 20.1 2 19V7C2 5.9 1.1 5 0 5V3ZM4 9V10H7V9H4ZM4 11V12H7V11H4ZM7 16V15H4V16H7ZM9 14V13H4V14H9ZM9 8V7H4V8H9ZM21.5 15.5V17H20V15.5H21.5ZM19.5 10.5H18V10C18 8.34 19.34 7 21 7C22.66 7 24 8.34 24 10C24 10.97 23.5 11.88 22.71 12.41L22.41 12.6C21.84 13 21.5 13.62 21.5 14.3V14.5H20V14.3C20 13.11 20.6 12 21.59 11.35L21.88 11.16C22.27 10.9 22.5 10.47 22.5 10C22.5 9.18 21.83 8.5 21 8.5C20.17 8.5 19.5 9.17 19.5 10V10.5Z"
                    fill="#009376"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">FAQs for Resume Builder</p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToResumeFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>

          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                className="bg-indigo-400 bg-opacity-20 rounded"
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:lock-question">
                  <path
                    id="Vector"
                    d="M12 1C10.6739 1 9.40215 1.52678 8.46447 2.46447C7.52678 3.40215 7 4.67392 7 6V8H6C5.46957 8 4.96086 8.21071 4.58579 8.58579C4.21071 8.96086 4 9.46957 4 10V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V10C20 9.46957 19.7893 8.96086 19.4142 8.58579C19.0391 8.21071 18.5304 8 18 8H17V6C17 5.34339 16.8707 4.69321 16.6194 4.08658C16.3681 3.47995 15.9998 2.92876 15.5355 2.46447C15.0712 2.00017 14.52 1.63188 13.9134 1.3806C13.3068 1.12933 12.6566 1 12 1ZM12 2.9C13.71 2.9 15.1 4.29 15.1 6V8H8.9V6C8.9 4.29 10.29 2.9 12 2.9ZM12.19 10.5C13.13 10.5 13.88 10.71 14.42 11.12C14.96 11.54 15.23 12.1 15.23 12.8C15.23 13.24 15.08 13.63 14.79 14C14.5 14.36 14.12 14.64 13.66 14.85C13.4 15 13.23 15.15 13.14 15.32C13.05 15.5 13 15.72 13 16H11C11 15.5 11.1 15.16 11.29 14.92C11.5 14.68 11.84 14.4 12.36 14.08C12.62 13.94 12.83 13.76 13 13.54C13.14 13.33 13.22 13.08 13.22 12.8C13.22 12.5 13.13 12.28 12.95 12.11C12.77 11.93 12.5 11.85 12.19 11.85C11.92 11.85 11.7 11.92 11.5 12.06C11.34 12.2 11.24 12.41 11.24 12.69H9.27C9.22 12 9.5 11.4 10.05 11.04C10.59 10.68 11.3 10.5 12.19 10.5ZM11 17H13V19H11V17Z"
                    fill="#DB09AD"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">FAQs for User Profile</p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToUserProfileFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>

          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:question-network">
                  <rect
                    width="46"
                    height="46"
                    rx="5"
                    fill="#F06292"
                    fill-opacity="0.15"
                  />
                  <path
                    id="Vector"
                    d="M30.5 9C31.2956 9 32.0587 9.30553 32.6213 9.84939C33.1839 10.3932 33.5 11.1309 33.5 11.9V26.4C33.5 27.1691 33.1839 27.9068 32.6213 28.4506C32.0587 28.9945 31.2956 29.3 30.5 29.3H24.5V32.2H26C26.3978 32.2 26.7794 32.3528 27.0607 32.6247C27.342 32.8966 27.5 33.2654 27.5 33.65H38V36.55H27.5C27.5 36.9346 27.342 37.3034 27.0607 37.5753C26.7794 37.8472 26.3978 38 26 38H20C19.6022 38 19.2206 37.8472 18.9393 37.5753C18.658 37.3034 18.5 36.9346 18.5 36.55H8V33.65H18.5C18.5 33.2654 18.658 32.8966 18.9393 32.6247C19.2206 32.3528 19.6022 32.2 20 32.2H21.5V29.3H15.5C14.7044 29.3 13.9413 28.9945 13.3787 28.4506C12.8161 27.9068 12.5 27.1691 12.5 26.4V11.9C12.5 11.1309 12.8161 10.3932 13.3787 9.84939C13.9413 9.30553 14.7044 9 15.5 9H30.5ZM23.285 11.9C21.98 11.9 20.93 12.19 20.12 12.7555C19.34 13.35 18.95 14.1765 18.965 15.322L18.98 15.3655H21.875C21.89 14.9305 22.025 14.597 22.295 14.365C22.5728 14.1423 22.9242 14.0239 23.285 14.0315C23.75 14.0315 24.14 14.1765 24.41 14.4375C24.68 14.713 24.8 15.09 24.8 15.525C24.8 15.989 24.695 16.3805 24.455 16.714C24.245 17.0475 23.93 17.3375 23.54 17.5695C22.775 18.0625 22.25 18.4975 21.965 18.889C21.665 19.266 21.5 19.875 21.5 20.6H24.5C24.5 20.1505 24.56 19.788 24.695 19.527C24.83 19.2515 25.085 19.005 25.46 18.773C26.135 18.425 26.69 18.0045 27.125 17.4245C27.56 16.8445 27.785 16.25 27.785 15.525C27.785 14.423 27.38 13.5385 26.57 12.886C25.775 12.2335 24.68 11.9 23.285 11.9ZM21.5 22.05V24.95H24.5V22.05H21.5Z"
                    fill="#F06292"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">FAQs for Supporters</p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToSuppotersFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>

          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                className="bg-indigo-400 bg-opacity-20 rounded"
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:chat-question">
                  <path
                    id="Vector"
                    d="M12 3C6.5 3 2 6.6 2 11C2 13.1 3 15.1 4.8 16.5C4.8 17.1 4.4 18.7 2 21C2 21 5.5 21 8.5 18.5C9.6 18.8 10.8 19 12 19C17.5 19 22 15.4 22 11C22 6.6 17.5 3 12 3ZM13 15H11V13H13V15ZM14.8 10C14.5 10.4 14.1 10.6 13.7 10.8C13.4 11 13.3 11.1 13.2 11.3C13 11.5 13 11.7 13 12H11C11 11.5 11.1 11.2 11.3 10.9C11.5 10.7 11.9 10.4 12.4 10.1C12.7 10 12.9 9.8 13 9.6C13.1 9.4 13.2 9.1 13.2 8.9C13.2 8.6 13.1 8.4 12.9 8.2C12.7 8 12.4 7.9 12.1 7.9C11.8 7.9 11.6 8 11.4 8.1C11.2 8.2 11.1 8.4 11.1 8.7H9.1C9.2 8 9.5 7.4 10 7C10.5 6.6 11.2 6.5 12.1 6.5C13 6.5 13.8 6.7 14.3 7.1C14.8 7.5 15.1 8.1 15.1 8.8C15.2 9.2 15.1 9.6 14.8 10Z"
                    fill="#2F86E7"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">
                FAQs for Candidates Referral
              </p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToCandidatesFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
      {/* Company Related Question */}
      <div
        className={`flex flex-col ml-10 ${
          changeDivFlag.Company ? "visible" : "invisible absolute"
        }`}
      >
        <div className="flex flex-wrap gap-3 max-[1024px]:justify-center mt-10">
          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                className="bg-indigo-400 bg-opacity-20 rounded"
                width="46"
                height="46"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:comment-question">
                  <path
                    id="Vector"
                    d="M4.5 2.25H22.5C23.0967 2.25 23.669 2.48705 24.091 2.90901C24.5129 3.33097 24.75 3.90326 24.75 4.5V18C24.75 18.5967 24.5129 19.169 24.091 19.591C23.669 20.0129 23.0967 20.25 22.5 20.25H15.6375L11.475 24.4237C11.25 24.6375 10.9688 24.75 10.6875 24.75H10.125C9.82663 24.75 9.54048 24.6315 9.3295 24.4205C9.11853 24.2095 9 23.9234 9 23.625V20.25H4.5C3.90326 20.25 3.33097 20.0129 2.90901 19.591C2.48705 19.169 2.25 18.5967 2.25 18V4.5C2.25 3.90326 2.48705 3.33097 2.90901 2.90901C3.33097 2.48705 3.90326 2.25 4.5 2.25ZM13.7137 6.1875C12.7125 6.1875 11.9138 6.39 11.3063 6.795C10.6875 7.2 10.3725 7.875 10.4288 8.65125H12.645C12.645 8.33625 12.7575 8.1 12.9375 7.9425C13.1625 7.785 13.41 7.70625 13.7137 7.70625C14.0625 7.70625 14.3663 7.79625 14.5687 7.99875C14.7712 8.19 14.8725 8.4375 14.8725 8.775C14.8725 9.09 14.7825 9.37125 14.625 9.6075C14.4338 9.855 14.1975 10.0575 13.905 10.215C13.32 10.575 12.9375 10.89 12.7013 11.16C12.4875 11.43 12.375 11.8125 12.375 12.375H14.625C14.625 12.06 14.6813 11.8125 14.7825 11.61C14.8837 11.4187 15.075 11.25 15.3675 11.0813C15.885 10.845 16.3125 10.53 16.6388 10.125C16.965 9.70875 17.1337 9.27 17.1337 8.775C17.1337 7.9875 16.83 7.3575 16.2225 6.885C15.615 6.42375 14.7712 6.1875 13.7137 6.1875ZM12.375 13.5V15.75H14.625V13.5H12.375Z"
                    fill="#735DF6"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">FAQs for Company Profile</p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToCompanyProfileFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>

          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                className="bg-indigo-400 bg-opacity-20 rounded"
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:cloud-question">
                  <path
                    id="Vector"
                    d="M21.86 12.5C21.1369 11.6485 20.1116 11.1107 19 11C19 9.05 18.32 7.4 16.96 6.04C15.6 4.68 13.95 4 12 4C10.42 4 9 4.47 7.75 5.43C6.5 6.39 5.67 7.62 5.25 9.15C4 9.43 2.96 10.08 2.17 11.1C1.38 12.12 1 13.28 1 14.58C1 16.09 1.54 17.38 2.61 18.43C3.69 19.5 5 20 6.5 20H18.5C19.75 20 20.81 19.56 21.69 18.69C22.56 17.81 23 16.75 23 15.5C23 14.35 22.62 13.35 21.86 12.5ZM13 17H11V15H13V17ZM14.8 11.82C14.5 12.21 14.13 12.5 13.67 12.75C13.41 12.91 13.24 13.07 13.15 13.26C13.0452 13.4923 12.9939 13.7452 13 14H11C11 13.45 11.11 13.08 11.3 12.82C11.5 12.56 11.85 12.25 12.37 11.91C12.63 11.75 12.84 11.56 13 11.32C13.15 11.09 13.23 10.81 13.23 10.5C13.23 10.18 13.14 9.94 12.96 9.76C12.78 9.56 12.5 9.47 12.2 9.47C11.93 9.47 11.71 9.55 11.5 9.7C11.35 9.85 11.25 10.08 11.25 10.39H9.28C9.23 9.64 9.5 9 10.06 8.59C10.6 8.2 11.31 8 12.2 8C13.14 8 13.89 8.23 14.43 8.68C14.97 9.13 15.24 9.75 15.24 10.5C15.24 11 15.09 11.41 14.8 11.82Z"
                    fill="#F16622"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">
                FAQs for Employers Referral
              </p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToEmployersFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>

          <div className="w-80 h-72 bg-white border-2 rounded-2xl shadow">
            <span className="flex justify-center mt-10">
              <svg
                className="bg-indigo-400 bg-opacity-20 rounded"
                width="46"
                height="46"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:calendar-question">
                  <path
                    id="Vector"
                    d="M7.25 1.21094V3.6276H6.04167C5.40073 3.6276 4.78604 3.88222 4.33283 4.33543C3.87961 4.78864 3.625 5.40333 3.625 6.04427V22.9609C3.625 23.6019 3.87961 24.2166 4.33283 24.6698C4.78604 25.123 5.40073 25.3776 6.04167 25.3776H22.9583C23.5993 25.3776 24.214 25.123 24.6672 24.6698C25.1204 24.2166 25.375 23.6019 25.375 22.9609V6.04427C25.375 5.40333 25.1204 4.78864 24.6672 4.33543C24.214 3.88222 23.5993 3.6276 22.9583 3.6276H21.75V1.21094H19.3333V3.6276H9.66667V1.21094H7.25ZM6.04167 9.66927H22.9583V22.9609H6.04167V9.66927ZM14.7296 10.8776C13.6783 10.8776 12.8325 11.1193 12.18 11.5905C11.5517 12.0859 11.2375 12.7747 11.2496 13.7293L11.2617 13.7655H13.5938C13.6058 13.403 13.7146 13.1251 13.9321 12.9318C14.1558 12.7462 14.439 12.6476 14.7296 12.6539C15.1042 12.6539 15.4183 12.7747 15.6358 12.9922C15.8533 13.2218 15.95 13.5359 15.95 13.8984C15.95 14.2851 15.8654 14.6114 15.6721 14.8893C15.5029 15.1672 15.2492 15.4089 14.935 15.6022C14.3188 16.013 13.8958 16.3755 13.6663 16.7018C13.4246 17.0159 13.2917 17.5234 13.2917 18.1276H15.7083C15.7083 17.753 15.7567 17.4509 15.8654 17.2334C15.9742 17.0159 16.1796 16.7984 16.4817 16.6051C17.0254 16.3151 17.4725 15.9647 17.8229 15.4814C18.1733 14.998 18.3546 14.5026 18.3546 13.8984C18.3546 12.9801 18.0283 12.243 17.3758 11.6993C16.7354 11.1555 15.8533 10.8776 14.7296 10.8776ZM13.2917 19.3359V21.7526H15.7083V19.3359H13.2917Z"
                    fill="#127916"
                  />
                </g>
              </svg>
            </span>
            <span className="flex justify-center mt-10">
              <p className="text-cyan-950 text-xl">FAQs for Partner With Us</p>
            </span>
            <span className="flex justify-center mt-10">
              <button
                onClick={goToPartnerWithUsFaq}
                className="flex justify-evenly w-28 h-10 p-1 bg-white rounded-lg border border-stone-300"
              >
                <p className="text-neutral-600 text-xl">View</p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="material-symbols:arrow-back">
                    <path
                      id="Vector"
                      d="M12 20L20 12L12 4L10.575 5.4L16.175 11H4V13H16.175L10.575 18.6L12 20Z"
                      fill="#545454"
                    />
                  </g>
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/3 h-56 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto my-4 p-4 md:p-6 mt-36 opacity-70 bg-gradient-to-b from-emerald-100 via-teal-100 to-teal-100 rounded-lg flex flex-col justify-center items-center gap-5">
  <p className="text-center text-cyan-950 text-2xl font-bold">Ask your FAQ’s directly with us</p>
  <input
    type="search"
    placeholder="Enter your question here"
    className="bg-white h-20 px-5 pr-10 pl-16 rounded-xl text-md focus:outline-slate-400 w-full md:w-80"
  />
  <button className=" h-10 w-28 bg-gradient-to-b from-cyan-950 to-slate-100 rounded-3xl shadow">
    <p className="text-xs p-2">Send your query</p>
    </button>
</div>

    </div>
  );
};

export default Faq;
