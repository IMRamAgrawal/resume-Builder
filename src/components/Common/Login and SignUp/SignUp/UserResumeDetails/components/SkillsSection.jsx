import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDetail,
  deleteDetail,
} from "../../../../../../redux/slices/resumeSlice";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { RiCloseCircleLine } from "react-icons/ri";

const SkillsSection = () => {
  const dispatch = useDispatch();
  const Skills = useSelector((state) => state.resume.Skills);

  const {
    register,
    reset,
    getValues,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });
  const data = getValues();
  const addSkill = () => {
    trigger();
    const { Skill } = getValues();
    if (!Skill) {
      toast.error("enter skill");
      return;
    }
    dispatch(addDetail({ data: { Skill }, details: "Skills" }));
    reset();
    toast.success("Added");
  };

  const deleteSkill = (index, details) => {
    dispatch(deleteDetail({ index, details }));
    toast.success("deleted");
  };
  return (
    <div className="flex flex-col space-y-1">
      <label className="text-left flex">
        <h1>Skills</h1>
        <h1 className="text-red-700">*</h1>
      </label>
      <div className="flex gap-2">
        {Skills.map((item, index) => (
          <div
            className="rounded-full  flex items-center gap-2 text-lg bg-[#57A7B326] px-2 py-1"
            key={index}
          >
            {item.Skill}
            <button type="button" onClick={() => deleteSkill(index, "Skills")}>
              <RiCloseCircleLine className="text-2xl text-[#57A7B3] font-bold" />
            </button>
          </div>
        ))}
      </div>

      <div className="relative w-full flex justify-between items-center ">
        <input
          type="text"
          placeholder="Enter your skills "
          {...register("Skill")}
          className="w-full font-normal text-black border px-2 sm:px-5 py-2 rounded-lg text-[#003d4d]/70 border-[#003d4d]/40"
        />
        <button
          type="button"
          onClick={addSkill}
          className="w-[8%] absolute right-0 text-[#003d4d]  text-3xl font-semibold boder border-red-600 rounded-lg"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;
