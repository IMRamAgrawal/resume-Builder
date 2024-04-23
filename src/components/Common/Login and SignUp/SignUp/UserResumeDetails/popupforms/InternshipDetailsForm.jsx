import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addDetail } from "../../../../../../redux/slices/resumeSlice";

const InternshipDetailsForm = ({ closePopup, setShowPopup }) => {
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

  const addNewInternship = () => {
    trigger();
    if (isValid) {
      const data = getValues();
      dispatch(addDetail({ data, details: "Internships" }));
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
      <div className="absolute left-0 right-0 lg:w-[500px]  bg-white p-10 pb-20 space-y-5 mx-auto shadow-2xl rounded-2xl z-20">
        <div className="flex justify-between space-x-10 ">
          <h1 className="text-2xl text-[#003d4d] font-bold mx-auto p-1 text-center">
            Internship Details
          </h1>
          <img
            src="\Images\cancel.png"
            alt=""
            onClick={closePopup}
            className="w-10 h-10"
          />
        </div>

        <div className="flex space-x-0 lg:space-x-2 lg:flex-row  flex-col lg:space-y-0 space-y-5">
          <div className="flex flex-col space-y-1 w-full">
            <label className="flex text-left">
              <h1>Internship Profile</h1>
              <h1 className="text-red-700">*</h1>
            </label>
            <select
              className="font-normal text-black border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
              {...register("Internship_Profile", {
                required: "select one",
              })}
              defaultValue=""
            >
              <option value="" disabled>
                Choose
              </option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Java Developer">Java Developer</option>
              <option value="ReactJs Dveloper">ReactJs Dveloper</option>
              <option value="other">other</option>
            </select>
            <p className="text-red-600  font-normal">
              {errors && errors?.Internship_Profile?.message}
            </p>
          </div>
          <div className="flex flex-col space-y-1 w-full">
            <label className="flex text-left">
              <h1>Type</h1>
              <h1 className="text-red-700">*</h1>
            </label>
            <select
              className="font-normal text-black  border px-5 py-2 rounded-lg border-[#003d4d]/40  text-[#003d4d]/70 bg-white"
              {...register("Type", { required: "select one" })}
              defaultValue=""
            >
              <option value="" disabled>
                Choose
              </option>
              <option value="Part-Time">Part-Time</option>
              <option value="Full-Time">Full-Time</option>
              <option value="other">other</option>
            </select>
            <p className="text-red-600  font-normal">
              {errors && errors?.Type?.message}
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <label className="text-left flex">
            <h1>Organization</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <input
            type="text"
            placeholder="Enter Your Organization Name"
            {...register("Organization", {
              required: "field required",
            })}
            className="font-normal text-black border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          />
          <p className="text-red-600  font-normal">
            {errors && errors?.Organization?.message}
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
                required: "field required",
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
                  required: "field required",
                  valueAsDate: true,
                })}
                className="font-normal text-black border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
              />
              <p className="text-red-600  font-normal">
                {errors && errors?.End_Date?.message}
              </p>
            </div>

            <div className="flex space-x-2 text-sm text-gray-700">
              <input type="checkbox" {...register("Currently_Work_Here")} />
              <h1>Currently Work Here</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1 w-full">
          <label className="flex text-left">
            <h1>Location</h1>
            <h1 className="text-red-700">*</h1>
          </label>
          <input
            type="text"
            placeholder="Enter Your Location"
            {...register("Location")}
            className="font-normal text-black border px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
          />
        </div>

        <div className="flex space-x-2">
          <div className="flex flex-col space-y-1 w-full">
            <label className="text-left flex">
              <h1>Description</h1>
              <h1 className="text-red-700">*</h1>
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
          onClick={addNewInternship}
          className="text-2xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white py-3 px-10 rounded-full"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default InternshipDetailsForm;
