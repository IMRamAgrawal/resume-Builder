import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useUserResumeDetailsMutation } from "../../../../../redux/api/signup";
import { options } from "./expertiseOptions.js";
import EducationalDetailsForm from "./popupforms/EducationalDetailsForm";
import JobsDetailsForm from "./popupforms/JobsDetailsForm";
import InternshipDetailsForm from "./popupforms/InternshipDetailsForm";
import TrainingDetailsForm from "./popupforms/TrainingDetailsForm";
import ProjectDetailsForm from "./popupforms/ProjectDetailsForm";

import { RiCloseCircleLine } from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { deleteDetail } from "../../../../../redux/slices/resumeSlice";
import SkillsSection from "./components/SkillsSection";
import ToolsSection from "./components/ToolsSection";
const UserResumeDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // handling popup
  const [showPopup, setShowPopup] = useState(null);
  const openPopup = (e) => {
    reset();
    setShowPopup(e.target.value);
  };

  const closePopup = () => {
    setShowPopup(null);
  };

  //  use form hook
  const {
    register,
    reset,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const [userResumeDetails, { error }] = useUserResumeDetailsMutation();

  //   Details
  const { Education } = useSelector((state) => state.resume);
  const Jobs = useSelector((state) => state.resume.Jobs);
  const Internships = useSelector((state) => state.resume.Internships);
  const Projects = useSelector((state) => state.resume.Projects);
  const Trainings = useSelector((state) => state.resume.Trainings);
  const Skills = useSelector((state) => state.resume.Skills);
  const Tools = useSelector((state) => state.resume.Tools);
  console.log(Education.length);
  // deleting details
  const deleteItem = (index, details) => {
    dispatch(deleteDetail({ index, details }));
    toast.success("deleted");
  };

  // handling some field data
  const [formData, setFormData] = useState({});

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const {
    Impact_You_Create,
    your_expertise,
    your_address,
    Extra_Curricular_Activities,
    Profile_Links,
  } = getValues();

  // submitting resume
  const submmitResume = async () => {
    trigger();
    if (
      isValid &&
      (Education.length &&
        Jobs.length &&
        Internships.length &&
        Trainings.length &&
        Projects.length &&
        Skills.length &&
        Tools.length) > 0
    ) {
      const resumeData = {
        userid: id,
        Impact_You_Create,
        your_expertise,
        your_address,
        Education,
        Jobs,
        Internships,
        Trainings,
        Projects,
        Skills,
        Tools,
        Profile_Links,
        Extra_Curricular_Activities,
      };

      try {
        await userResumeDetails(resumeData).unwrap();
        toast.success("Send successfully");
      } catch (error) {
        toast.error(error.data.message);
      }
    } else {
      toast.error("fill all compulsory fields");
    }
  };

  return (
    <div className=" relative bg-gray-100 h-full justify-center items-center text-left p-5 sm:p-10 font-semibold ">
      <img
        className="absolute top-0 left-0 w-[1600px] xl:w-[100vw] h-full z-0"
        src="/Images/backgroundImg.png"
        alt="background"
      />
      <div className="relative z-10">
        <div className="text-4xl text-[#003d4d] font-bold mx-auto p-10 text-center">
          Your QR Resume is waiting for Next Step
        </div>
        <div className="relative ">
          <div>
            <form
              className={`flex flex-col lg:w-[800px]  rounded-2xl border-2 mx-auto bg-white shadow-2xl p-5 sm:p-10 space-y-5 mb-20 `}
            >
              {/* impact you create */}
              <div className="flex flex-col space-y-1">
                <label className="text-left flex">
                  <h1>Impact You Create</h1>
                  <h1 className="text-red-700">*</h1>
                </label>
                <textarea
                  type="text"
                  placeholder="Write your Introduction, about your interests ,anything your want to add in Your Resume (Max 100 Words)"
                  className="font-normal text-black border px-5 py-0 h-[150px]  rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
                  {...register("Impact_You_Create", {
                    required: "field required",
                  })}
                  name="Impact_You_Create"
                  value={formData.Impact_You_Create || ""}
                  onChange={handleFieldChange}
                />
                <p className="text-red-600  font-normal">
                  {errors && errors?.Impact_You_Create?.message}
                </p>
              </div>
              {/* your expertise */}
              <div className="flex flex-col space-y-1 w-full">
                <label className="flex text-left">
                  <h1>Your Expertise</h1>
                  <h1 className="text-red-700">*</h1>
                </label>
                <select
                  className="font-normal text-black border px-5 py-2 h-[40px] rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
                  placeholder="People will love to know Your Expertise"
                  {...register("your_expertise", { required: "select one" })}
                  name="your_expertise"
                  value={formData.your_expertise || ""}
                  onChange={handleFieldChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose
                  </option>
                  {options.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <p className="text-red-600  font-normal">
                  {errors && errors?.your_expertise?.message}
                </p>
              </div>
              {/* your address */}
              <div className="flex flex-col space-y-1">
                <label className="text-left flex">
                  <h1>Your Address</h1>
                  <h1 className="text-red-700">*</h1>
                </label>
                <input
                  type="text"
                  placeholder="Write Complete Address "
                  className="font-normal text-black border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
                  {...register("your_address", { required: "field required" })}
                  name="your_address"
                  value={formData.your_address || ""}
                  onChange={handleFieldChange}
                />
                <p className="text-red-600  font-normal">
                  {errors && errors?.your_address?.message}
                </p>
              </div>

              {/* Education Details */}
              <div className="flex flex-col gap-3">
                <label className="text-left flex">
                  <h1>Education</h1>
                  <span className="text-red-700">*</span>
                </label>
                {Education.length > 0 && (
                  <div className="flex flex-col gap-2">
                    {Education.map((education, index) => (
                      <div
                        className="bg-[#57A7B312] flex items-center px-3 py-2 justify-between shadow-inner rounded-xl"
                        key={index}
                      >
                        <div className="w-full flex text-sm from-neutral-950 gap-2 flex-col">
                          <p>
                            {education.Degree}{" "}
                            <span className="font-bold text-xl"> | </span>{" "}
                            {education.College_Name}{" "}
                            <span className="font-bold text-xl"> | </span>
                            {education.Start_Date.toDateString()} -{" "}
                            {education.End_Date.toDateString()}{" "}
                            <span className="font-bold text-xl"> | </span>{" "}
                            Performance:
                            {education.Performance}
                          </p>
                          {education.Description && (
                            <p className="flex items-center font-light text-[#454545] gap-1">
                              <TbPointFilled /> {education.Description}
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          className="text-[#003d4d] text-3xl font-semibold rounded-lg"
                          onClick={() => deleteItem(index, "Education")}
                        >
                          <RiCloseCircleLine />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="font-normal flex gap-1 items-center w-full text-black flex-1 border px-2 sm:px-5 py-1  rounded-lg  text-[#003d4d]/70 border-[#003d4d]/40 ">
                  <div className="w-full text-[#868383bd]">
                    Include all your Previous Education
                  </div>
                  <button
                    type="button"
                    name="Education"
                    value="Education"
                    onClick={openPopup}
                    className="text-[#003d4d]  text-3xl font-semibold boder border-red-600 rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* jobs */}
              <div className="flex flex-col gap-3">
                <label className="text-left flex">
                  <h1>Jobs</h1>
                  <h1 className="text-red-700">*</h1>
                </label>
                {Jobs.map((job, index) => (
                  <div
                    className="bg-[#57A7B312] flex items-center px-3 py-2 justify-between shadow-inner rounded-xl"
                    key={index}
                  >
                    <div className="w-full flex text-sm from-neutral-950 gap-2 flex-col">
                      <p>
                        {job.Job_Profile}{" "}
                        <span className="font-bold text-xl"> | </span>{" "}
                        {job.Organization}{" "}
                        <span className="font-bold text-xl"> | </span>
                        {job.Start_Date.toDateString()} -{" "}
                        {job.End_Date.toDateString()}{" "}
                        {job.Location && (
                          <span>
                            <span className="font-bold text-xl"> | </span>
                            Location:
                            {job.Location}
                          </span>
                        )}
                      </p>
                      {job.Description && (
                        <p className="flex items-center font-light text-[#454545] gap-1">
                          <TbPointFilled /> {job.Description}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      className="text-[#003d4d] text-3xl font-semibold rounded-lg"
                      onClick={() => deleteItem(index, "Education")}
                    >
                      <RiCloseCircleLine />
                    </button>
                  </div>
                ))}
                <div className="font-normal flex gap-1 items-center w-full text-black flex-1 border px-2 sm:px-5 py-1  rounded-lg  text-[#003d4d]/70 border-[#003d4d]/40 ">
                  <div className="w-full text-[#868383bd]">
                    Include all your Previous jobs
                  </div>
                  <button
                    type="button"
                    value="Jobs"
                    onClick={openPopup}
                    className="text-[#003d4d]  text-3xl font-semibold boder border-red-600 rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* internshipDetails */}
              <div className="flex flex-col gap-3">
                <label className="text-left flex">
                  <h1>Internships</h1>
                  <h1 className="text-red-700">*</h1>
                </label>
                {Internships.map((intern, index) => (
                  <div
                    className="bg-[#57A7B312] flex items-center px-3 py-2 justify-between shadow-inner rounded-xl"
                    key={index}
                  >
                    <div className="w-full flex text-sm from-neutral-950 gap-2 flex-col">
                      <p>
                        {intern.Internship_Profile}{" "}
                        <span className="font-bold text-xl"> | </span>{" "}
                        {intern.Type}
                        <span className="font-bold text-xl"> | </span>{" "}
                        {intern.Organization}{" "}
                        <span className="font-bold text-xl"> | </span>
                        {intern.Start_Date.toDateString()} -{" "}
                        {intern.End_Date.toDateString()}{" "}
                        {intern.Location && (
                          <span>
                            <span className="font-bold text-xl"> | </span>
                            Location:
                            {intern.Location}
                          </span>
                        )}
                      </p>
                      {intern.Description && (
                        <p className="flex items-center font-light text-[#454545] gap-1">
                          <TbPointFilled /> {intern.Description}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      className="text-[#003d4d] text-3xl font-semibold rounded-lg"
                      onClick={() => deleteItem(index, "Internships")}
                    >
                      <RiCloseCircleLine />
                    </button>
                  </div>
                ))}
                <div className="font-normal flex gap-1 items-center w-full text-black flex-1 border px-2 sm:px-5 py-1  rounded-lg  text-[#003d4d]/70 border-[#003d4d]/40 ">
                  <div className="w-full text-[#868383bd]">
                    Include all your Previous Interships
                  </div>
                  <button
                    type="button"
                    value="Interships"
                    onClick={openPopup}
                    className="text-[#003d4d]  text-3xl font-semibold boder border-red-600 rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* training and courses */}
              <div className="flex flex-col space-y-1">
                <label className="text-left flex">
                  <h1>Training and Courses</h1>
                  <h1 className="text-red-700">*</h1>
                </label>
                {Trainings.map((training, index) => (
                  <div
                    className="bg-[#57A7B312] flex items-center px-3 py-2 justify-between shadow-inner rounded-xl"
                    key={index}
                  >
                    <div className="w-full flex text-sm from-neutral-950 gap-2 flex-col">
                      <p>
                        {training.Training_Name}{" "}
                        <span className="font-bold text-xl"> | </span>{" "}
                        {training.Organization}{" "}
                        <span className="font-bold text-xl"> | </span>
                        {training.Start_Date.toDateString()} -{" "}
                        {training.End_Date.toDateString()}{" "}
                        {training.Location && (
                          <span>
                            <span className="font-bold text-xl"> | </span>
                            Location:
                            {training.Location}
                          </span>
                        )}
                      </p>
                      {training.Description && (
                        <p className="flex items-center font-light text-[#454545] gap-1">
                          <TbPointFilled /> {training.Description}
                        </p>
                      )}
                    </div>

                    <button
                      type="button"
                      className="text-[#003d4d] text-3xl font-semibold rounded-lg"
                      onClick={() => deleteItem(index, "Tranings")}
                    >
                      <RiCloseCircleLine />
                    </button>
                  </div>
                ))}
                <div className="font-normal flex gap-1 items-center w-full text-black flex-1 border px-2 sm:px-5 py-1  rounded-lg  text-[#003d4d]/70 border-[#003d4d]/40 ">
                  <div className="w-full text-[#868383bd]">
                    Add your certification and Courses You have done
                  </div>
                  <button
                    type="button"
                    value="Training"
                    onClick={openPopup}
                    className="text-[#003d4d]  text-3xl font-semibold boder border-red-600 rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* projects */}
              <div className="flex flex-col space-y-1">
                <label className="text-left flex">
                  <h1>Projects</h1>
                  <h1 className="text-red-700">*</h1>
                </label>
                {Projects.map((project, index) => (
                  <div
                    className="bg-[#57A7B312] flex items-center px-3 py-2 justify-between shadow-inner rounded-xl"
                    key={index}
                  >
                    <div className="w-full flex text-sm from-neutral-950 gap-2 flex-col">
                      <p>
                        {project.Project_Name}{" "}
                        <span className="font-bold text-xl"> | </span>{" "}
                        {project.Start_Date.toDateString()} -{" "}
                        {project.End_Date.toDateString()}{" "}
                      </p>
                      <p className="flex items-center font-light text-[#454545] gap-1">
                        <TbPointFilled /> {project.Description}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-[#003d4d] text-3xl font-semibold rounded-lg"
                      onClick={() => deleteItem(index, "Projects")}
                    >
                      <RiCloseCircleLine />
                    </button>
                  </div>
                ))}

                <div className="font-normal flex gap-1 items-center w-full text-black flex-1 border px-2 sm:px-5 py-1  rounded-lg  text-[#003d4d]/70 border-[#003d4d]/40 ">
                  <div className="w-full text-[#868383bd]">
                    Add Your Projects
                  </div>
                  <button
                    type="button"
                    value="Projects"
                    onClick={openPopup}
                    className="text-[#003d4d]  text-3xl font-semibold boder border-red-600 rounded-lg"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* skills */}
              <SkillsSection />
              {/* tools used */}
              <ToolsSection />
              {/* profilelinks */}
              <div className="flex flex-col space-y-1">
                <label className="text-left flex">
                  <h1>Profile Links</h1>
                  <h1 className="text-red-700">*</h1>
                </label>
                <input
                  type="text"
                  placeholder="Links "
                  {...register("Profile_Links", { required: "field required" })}
                  name="Profile_Links"
                  value={formData.Profile_Links || ""}
                  onChange={handleFieldChange}
                  className="font-normal text-black border px-2 sm:px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
                />
                <p className="text-red-600 text-sm">
                  {errors?.Profile_Links?.message}
                </p>
              </div>

              {/* extra curricullar activities */}
              <div className="flex flex-col space-y-1">
                <label className="text-left flex">
                  <h1>Extra Curricular Activities and achievements</h1>
                  <h1 className="text-red-700">*</h1>
                </label>
                <input
                  type="text"
                  placeholder="Add your Achievements except educational  "
                  {...register("Extra_Curricular_Activities", {
                    required: "field required",
                  })}
                  name="Extra_Curricular_Activities"
                  value={formData.Extra_Curricular_Activities || ""}
                  onChange={handleFieldChange}
                  className="font-normal text-black border px-2 sm:px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
                />
                <p className="text-red-600 text-sm">
                  {errors?.Extra_Curricular_Activities?.message}
                </p>
              </div>
              <div className="flex  justify-between py-10">
                <button
                  type="button"
                  onClick={submmitResume}
                  className="text-2xl lg:w-[200px] bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-1 sm:py-3 px-4 lg:px-10 rounded-full  "
                >
                  {" "}
                  Next →
                </button>
                <Link to={"/skillsPosting"}>
                  <button className="text-2xl  text-[#003d4d]/80 font-bold py-2 lg:py-3 px-4 sm:px-10 rounded-full">
                    {" "}
                    Skip For Now
                  </button>
                </Link>
              </div>
            </form>
          </div>

          {/* Education Pop Up   */}
          {showPopup === "Education" && (
            <EducationalDetailsForm
              closePopup={closePopup}
              setShowPopup={setShowPopup}
            />
          )}

          {/* Job Pop Up  */}
          {showPopup === "Jobs" && (
            <JobsDetailsForm
              closePopup={closePopup}
              setShowPopup={setShowPopup}
            />
          )}

          {/* Internships Pop Up  */}
          {showPopup === "Interships" && (
            <InternshipDetailsForm
              closePopup={closePopup}
              setShowPopup={setShowPopup}
            />
          )}

          {/* Training and Courses Pop Up  */}
          {showPopup === "Training" && (
            <TrainingDetailsForm
              closePopup={closePopup}
              setShowPopup={setShowPopup}
            />
          )}

          {/* Projects Pop Up */}
          {showPopup === "Projects" && (
            <ProjectDetailsForm
              closePopup={closePopup}
              setShowPopup={setShowPopup}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserResumeDetails;
