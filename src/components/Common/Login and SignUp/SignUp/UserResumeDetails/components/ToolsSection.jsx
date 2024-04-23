import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDetail,
  deleteDetail,
} from "../../../../../../redux/slices/resumeSlice";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { RiCloseCircleLine } from "react-icons/ri";

const ToolsSection = () => {
  const dispatch = useDispatch();

  const Tools = useSelector((state) => state.resume.Tools);
  const {
    register,
    reset,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });
  const addTool = () => {
    const { Tool } = getValues();
    if (!Tool) {
      toast.error("enter tool");
      return;
    }
    dispatch(addDetail({ data: { Tool }, details: "Tools" }));
    reset();
    toast.success("added");
  };
  const deleteTool = (index, details) => {
    dispatch(deleteDetail({ index, details }));
    toast.success("deleted");
  };
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-left flex">
        <h1>Tools Used</h1>
        <h1 className="text-red-700">*</h1>
      </label>
      <div className="flex gap-2">
        {Tools.map((item, index) => (
          <div
            className="rounded-full  flex items-center gap-2 text-lg bg-[#57A7B326] px-2 py-1"
            key={index}
          >
            {item.Tool}
            <button type="button" onClick={() => deleteTool(index, "Tools")}>
              <RiCloseCircleLine className="text-2xl text-[#57A7B3] font-bold" />
            </button>
          </div>
        ))}
      </div>

      <div className="relative w-full flex justify-between items-center ">
        <input
          type="text"
          placeholder="Enter tools used "
          {...register("Tool")}
          className="w-full font-normal text-black border px-2 sm:px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
        />
        <button
          type="button"
          value="Projects"
          onClick={addTool}
          className="w-[8%] absolute right-0 text-[#003d4d]  text-3xl font-semibold boder border-red-600 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ToolsSection;
