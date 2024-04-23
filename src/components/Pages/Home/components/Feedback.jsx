import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Feedback = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {
    // Create the email service parameters
    const serviceParams = {
      service_id: "SERVICE_ID",
      template_id: "Template_ID",
      user_id: "PUBLIC_KEY",
      template_params: {
        name: data.name,
        email: data.email,
        message: data.yourMessage,
        phoneNumber: data.phoneNumber,
      },
    };

    emailjs
      .send(
        "default_service",
        serviceParams.template_id,
        serviceParams.template_params,
        serviceParams.user_id
      )
      .then(() => {
        toast.success("Email sent successfully!");
        reset();
      })
      .catch((error) => {
        toast.error("Error sending email:", error);
      });
  };
  return (
    <div className="w-full box-border  flex justify-center items-center flex-col xl:flex-row p-3 md:p-10 lg:p-20 ">
      <div className="box-border rounded-xl flex justify-evenly items-center w-full bg-[#E1E9FF] py-3 pl-2 md:p-10 lg:p-20">
        {/* Left Side */}
        <div className="w-full flex flex-col items-center justify-center gap-5 sm:gap-20">
          <div className="w-full text-center">
            <span className="max-md:mb-10 text-[#003D4D] md:text-5xl sm:text-3xl text-2xl font-bold">
              Any Feedback For Us?
            </span>

            {/*<div className="w-full text-center bg-white"> */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex justify-center mt-3 md:mt-10  bg-white items-center flex-col gap-5 p-3 md:p-6 lg:p-10 rounded-xl"
            >
              <div className=" md:[87%] lg:w-[80%] grid gap-3 md:gap-8">
                <div className="flex flex-col items-start">
                  <input
                    type="text"
                    className="w-full border-[#003D4D4D] border p-2 md:p-5 text-base rounded-xl"
                    placeholder="Your Name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <span className="text-red-600">{errors.name.message}</span>
                  )}
                </div>

                <div className="w-full flex gap-2 md:gap-5 justify-between">
                  <div className="w-1/2 flex flex-col items-start">
                    <input
                      type="number"
                      className="w-full p-2 md:p-5 text-base border-[#003D4D4D] border rounded-xl"
                      placeholder="Your Number"
                      {...register("phoneNumber", {
                        required: "Number is required",
                        pattern: {
                          value: /^\d{10}$/,
                          message: "Invalid phone number",
                        },
                      })}
                    />
                    {errors.phoneNumber && (
                      <span className="text-red-600">
                        {errors.phoneNumber.message}
                      </span>
                    )}
                  </div>
                  <div className=" w-1/2 flex flex-col items-start">
                    <input
                      type="email"
                      className="w-full p-2 md:p-5 text-base border-[#003D4D4D] border rounded-xl"
                      placeholder="Your Email"
                      {...register("email", {
                        required: "email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />

                    {errors.email && (
                      <span className="text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <textarea
                    type="text"
                    className="w-full border-[#003D4D4D] h-24 border p-2 md:p-5 text-base rounded-xl"
                    placeholder="Your Mesage"
                    rows="8"
                    {...register("yourMessage", {
                      required: "Message is required",
                    })}
                  />
                  {errors.yourMessage && (
                    <span className="text-red-600">
                      {errors.yourMessage.message}
                    </span>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className=" shadow-xl bg-gradient-to-br md:mt-12 from-[#003d4d] to-[#57a7b3] text-1xl text-white font-semibold px-8 py-2 rounded-full border-2 border-gray-800 hover:bg-[#003d4d] hover: transition-all hover:ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Right Side */}
        <div className="max-sm:w-1/3 w-1/2 max-sm:h-[45vh]">
          <img
            src="images/home/feedback.png"
            className="w-full h-full"
            alt="feedbackImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
