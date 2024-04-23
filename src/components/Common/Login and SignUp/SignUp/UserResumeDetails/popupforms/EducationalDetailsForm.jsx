import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addDetail } from "../../../../../../redux/slices/resumeSlice";

const EducationalDetailsForm = ({ closePopup, setShowPopup }) => {
  const dispatch = useDispatch();

  const {
    register,
    reset,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });

  const addEducationalDetail = () => {
    trigger();
    if (isValid) {
      const data = getValues();
      console.log(data);
      dispatch(addDetail({ data, details: "Education" }));
      setShowPopup(false);
      reset();
      toast.success("saved");
    } else {
      console.log("here");
      toast.error("Enter all compulsory field");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div
        className="absolute inset-0 bg-gray-500 opacity-75"
        onClick={closePopup}
      ></div>
      <div className="absolute  left-0 right-0  lg:w-[500px]  bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl">
        <div className="flex justify-between space-x-10 ">
          <h1 className="text-2xl text-[#003d4d] font-bold mx-auto p-1 text-center">
            Educational Details
          </h1>
          <img
            src="\Images\cancel.png"
            alt=""
            onClick={closePopup}
            className="w-10 h-10"
          />
        </div>

        <div className="flex flex-col space-y-1 w-full">
          <label className="flex text-left">
            <h1>Degree</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <select
            className="font-normal text-black border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
            {...register("Degree", { required: "Select one" })}
            defaultValue=""
          >
            <option value="" disabled>
              Choose
            </option>
            <option value="B.Tech">B.tech</option>
            <option value="B.Sc">B.Sc</option>
            <option value="B.A">B.A</option>
            <option value="MCA">MCA</option>
            <option value="other">other</option>
          </select>
          <p className="text-red-600  font-normal">
            {errors && errors?.Degree?.message}
          </p>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-left flex">
            <h1>College Name</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <input
            type="text"
            placeholder="Enter Your College Name"
            {...register("College_Name", {
              required: "field required",
            })}
            className="font-normal text-black border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          />
          <p className="text-red-600  font-normal">
            {errors && errors?.College_Name?.message}
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
            <div className="flex space-x-2 text-sm text-gray-700">
              <input
                name="Currently_Study_Here"
                type="checkbox"
                {...register("Currently_Study_Here")}
              />
              <h1>Currently Study Here</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1 w-full">
          <label className="flex text-left">
            <h1>Stream</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <select
            className="font-normal text-black border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
            {...register("stream", {
              required: "Select One",
            })}
            defaultValue=""
          >
            <option value="" disabled>
              Choose
            </option>
            <option value="Computer Science">Computer Science</option>
            <option value="Information Technology ">
              Information Technology
            </option>
            <option value="Mechanical ">Mechanical</option>
            <option value="ECE">ECE</option>
            <option value="other">other</option>
          </select>
          <p className="text-red-600  font-normal">
            {errors && errors?.stream?.message}
          </p>
        </div>

        <div className="flex space-x-0 lg:space-x-2 lg:flex-row  flex-col lg:space-y-0 space-y-5">
          <div className="flex flex-col space-y-1 w-full">
            <label className="flex text-left">
              <h1>Performance Scale</h1>
            </label>
            <select
              name="Performance_Scale"
              className="font-normal text-black border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
              {...register("Performance_Scale")}
              defaultValue=""
            >
              <option value="" disabled>
                Percentage
              </option>
              <option value="0-25">0-25</option>
              <option value="25-50">25-50 </option>
              <option value="50-75 ">50-75</option>
              <option value="75-100">75-100</option>
            </select>
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label className="text-left flex">
              <h1>Performance</h1>
              <span className="text-red-700">*</span>
            </label>
            <input
              placeholder="percentage"
              {...register("Performance", {
                required: "field required",

                pattern: {
                  value: /^100$|^\d{0,2}(\.\d{1,2})?%?$/,
                  message: "Invalid percentage",
                },
              })}
              className="font-normal text-black border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
            />
            <p className="text-red-600  font-normal">
              {errors && errors?.Performance?.message}
            </p>
          </div>
        </div>
        <div className="flex space-x-2">
          <div className="flex flex-col space-y-1 w-full">
            <label className="text-left flex">
              <h1>Description</h1>
            </label>
            <textarea
              type="text"
              placeholder="Short Description of your role and Responsibilities"
              {...register("Description")}
              className="font-normal text-black h-[100px] border px-5 pt-1 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
            />
          </div>
        </div>

        <button
          onClick={addEducationalDetail}
          className="text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EducationalDetailsForm;
