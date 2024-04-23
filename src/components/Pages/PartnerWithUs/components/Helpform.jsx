import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

function Helpform() {
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
    const {
      fullName,
      email,
      contact,
      Organization,
      event_name,
      AboutYourEvent,
      mind,
    } = data;
    const serviceParams = {
      service_id: "SERVICE_ID",
      template_id: "Template_ID",
      user_id: "PUBLIC_KEY",
      template_params: {
        fullName,
        email,
        contact,
        Organization,
        event_name,
        AboutYourEvent,
        mind,
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
    <div className=" w-full  flex flex-col items-center mb-10">
      {/* header */}
      <div className="h-full w-[90%] flex flex-col items-center justify-center ">
        <h1 className="text-2xl md:text-4xl font-bold text-[#003d4d]">
          Need Help?
        </h1>
        <p className="mt-3">
          <span className="text-xl md:text-4xl font-bold text-[#003d4d]">
            Let us rush toward you
          </span>
        </p>
      </div>
      {/* form */}
      <div className="w-11/12 shadow-xl drop-shadow-md shadow-[#003D4D4D] rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="flex flex-col md:flex-row px-4 md:px-12 py-6 md:py-16">
            {/* left */}
            <div className="md:w-1/2 flex flex-col justify-between gap-5 md:gap-10">
              <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col gap-2 md:gap-4 justify-center">
                <label className="md:text-xl font-semibold text-[#000000C9]">
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full py-1 md:py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="Jhon Doe"
                  {...register("fullName", { required: "Field required" })}
                />
                <p className="text-red-600">{errors.fullName?.message}</p>
              </div>

              <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col gap-2 md:gap-4 justify-center">
                <label className="md:text-xl font-semibold text-[#000000C9]">
                  Contact <span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full py-1 md:py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="1992982979"
                  {...register("contact", {
                    required: "Number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Invalid Number",
                    },
                  })}
                />
                <p className="text-red-600">{errors.contact?.message}</p>
              </div>

              <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col gap-2 md:gap-4 justify-center">
                <label className="md:text-xl font-semibold text-[#000000C9]">
                  Email<span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full py-1 md:py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="JhonDoe@gmail.com"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                <p className="text-red-600">{errors.email?.message}</p>
              </div>

              <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col gap-2 md:gap-4 justify-center">
                <label className="md:text-xl font-semibold text-[#000000C9]">
                  Organization <span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full py-1 md:py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="Organization"
                  {...register("organization", { required: "Field required" })}
                />
                <p className="text-red-600">{errors.organization?.message}</p>
              </div>
            </div>
            {/* right */}
            <div className="md:w-1/2 flex flex-col items-end gap-5 md:gap-10">
              <div className="w-full  lg:w-2/3 flex flex-col gap-2 md:gap-4 justify-center">
                <label className="md:text-xl font-semibold text-[#000000C9]">
                  Event Name <span className="text-red-600">*</span>
                </label>
                <input
                  className="w-full py-1 md:py-2 rounded-md border border-[#003d4d] px-5"
                  placeholder="event name"
                  {...register("event_name")}
                />
              </div>

              <div className="w-full  lg:w-2/3 flex flex-col gap-2 md:gap-4 justify-center">
                <label className="md:text-xl font-semibold text-[#000000C9]">
                  About Your Event
                </label>
                <textarea
                  className="w-full py-1 md:py-2 rounded-md border border-[#003d4d] px-5"
                  rows="5"
                  placeholder="About Your Event"
                  {...register("AboutYourEvent")}
                />
              </div>

              <div className="w-full  lg:w-2/3 flex flex-col gap-2 md:gap-4 justify-center">
                <label className="md:text-xl font-semibold text-[#000000C9]">
                  What's on your mind? <span className="text-red-600">*</span>
                </label>
                <textarea
                  className="w-full py-1 md:py-2 rounded-md border border-[#003d4d] px-5"
                  rows="5"
                  placeholder=" What's on your mind?"
                  {...register("mind", {
                    required: "field required",
                  })}
                />
                <p className="text-red-600 text-lg  tracking-widest">
                  {errors.mind?.message}
                </p>
              </div>
            </div>
          </section>
          <div className="text-center -mt-4 md:-mt-10 mb-4 md:mb-10">
            <button
              type="submit"
              className="w-1/3 md:w-1/6 p-1 md:p-3  text-xl   md:text-3xl bg-gradient-to-r from-[#003d4d] to-[#57a7b3] text-white rounded-full"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Helpform;
