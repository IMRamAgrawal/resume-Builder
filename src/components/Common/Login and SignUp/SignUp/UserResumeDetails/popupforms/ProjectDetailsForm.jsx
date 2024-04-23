import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addDetail } from "../../../../../../redux/slices/resumeSlice";

const ProjectDetailsForm = ({ closePopup, setShowPopup, ProjectData }) => {
  const dispatch = useDispatch();

  const {
    register,
    reset,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const addProject = () => {
    trigger();
    const data = getValues();
    if (isValid) {
      dispatch(addDetail({ data, details: "Projects" }));
      setShowPopup(false);
      reset();
      toast.success("saved");
    } else {
      toast.error("fill compulsory fields");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div
        className="absolute inset-0 bg-gray-500 opacity-75"
        onClick={closePopup}
      ></div>
      <div className="absolute  left-0 right-0 lg:w-[500px]  bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl z-20">
        <div className="flex justify-between space-x-10 ">
          <h1 className="text-2xl text-[#003d4d] font-bold mx-auto p-1 text-center">
            Projects Details
          </h1>
          <img
            src="\Images\cancel.png"
            alt=""
            onClick={closePopup}
            className="w-10 h-10"
          />
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-left flex">
            <h1>Project Name</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <input
            type="text"
            placeholder="Enter Your Project Name"
            {...register("Project_Name", {
              required: "field required",
            })}
            className="font-normal text-black  border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          />
          <p className="text-red-600  font-normal">
            {errors && errors?.Project_Name?.message}
          </p>
        </div>

        <div className="flex space-x-0 lg:space-x-2 lg:flex-row  flex-col lg:space-y-0 space-y-5">
          <div className="flex flex-col space-y-1 w-full">
            <label className="text-left flex">
              <h1>Start Date</h1>
              <h1 className="text-red-700">*</h1>
            </label>
            <input
              type="date"
              {...register("Start_Date", {
                required: "Select Date",
                valueAsDate: true,
              })}
              className="font-normal text-black border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
            />
            <p className="text-red-600  font-normal">
              {errors && errors?.Start_Date?.message}
            </p>
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <div className="flex flex-col space-y-1 w-full">
              <label className="text-left flex">
                <h1>End Date</h1>
                <h1 className="text-red-700">*</h1>
              </label>
              <input
                type="date"
                {...register("End_Date", {
                  required: "Select Date",
                  valueAsDate: true,
                })}
                className="font-normal text-black border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
              />
              <p className="text-red-600  font-normal">
                {errors && errors?.End_Date?.message}
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-2">
          <div className="flex flex-col space-y-1 w-full">
            <label className="text-left flex">
              <h1>Description</h1>
              <span className="text-red-700">*</span>
            </label>
            <textarea
              type="text"
              placeholder="Short Description of your role and Responsibilities"
              {...register("Description", { required: "field required" })}
              className="font-normal text-black h-[100px] border px-5 pt-1 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
            />
            <p className="text-red-600  font-normal">
              {errors && errors?.Description?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-1 w-full">
          <label className="text-left flex">
            <h1>Project Link</h1>
          </label>
          <input
            type="text"
            placeholder="Enter Project Link"
            {...register("Project_link")}
            className="font-normal text-black  border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          />
        </div>

        <button
          onClick={addProject}
          className="text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsForm;
