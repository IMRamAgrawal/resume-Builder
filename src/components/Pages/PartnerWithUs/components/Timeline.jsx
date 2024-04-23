import React from "react";

function Timeline() {
  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <section className="flex flex-col justify-center items-center p-4 md:gap-8 md:flex-row  ">
        {/* left */}
        <div className="flex flex-col gap-8 md:w-1/3">
          <p className="sm:text-2xl md:text-3xl xl:text-5xl font-bold  tracking-wide md:leading-10 text-[#4D4D4D] ">
            We help your opportunities reach out
            <span className="text-[#003D4D]"> thousands </span> and
            <span className="text-[#003D4D]"> thousands </span> of individual’s
          </p>
        </div>
        {/* right */}
        <div className="md:w-1/2 flex justify-center">
          <img src="images/PartnerWithUs/timeline1.png" alt="Timeline" />
        </div>
      </section>

      <section className="flex flex-col-reverse justify-center items-center p-4 gap-5 md:gap-8 md:flex-row  ">
        {/* left */}
        <div className="w-2/3 md:w-1/2 flex justify-center">
          <img
            src="images/PartnerWithUs/CertificateOfExperience.png"
            alt="Timeline"
          />
        </div>

        {/* right */}
        <div className="flex flex-col gap-8 md:w-1/3">
          <p className="sm:text-2xl md:text-3xl xl:text-5xl font-bold  tracking-wide md:leading-10 text-[#4D4D4D] ">
            We collaborate with you to provide
            <span className="text-[#003D4D]"> certificates </span>
            to the participants for your opportunity
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center gap-8 p-4 md:flex-row  ">
        {/* left */}
        <div className="flex flex-col gap-8 md:w-1/3">
          <p className="sm:text-2xl md:text-3xl xl:text-5xl font-bold tracking-wide md:leading-10 text-[#4D4D4D] ">
            ZealYug offers
            <span className="text-[#003D4D]"> personalised service </span> ,
            working closely with you to understand your needs and preferences
            and tailor solutions accordingly
          </p>
        </div>
        {/* right */}
        <div className="w-2/3 md:w-1/2 flex justify-center">
          <img
            src="images/PartnerWithUs/PersonalizeService.png"
            alt="Timeline"
          />
        </div>
      </section>

      <section className="flex flex-col-reverse justify-center items-center p-4 gap-5 md:gap-8 md:flex-row  ">
        {/* left */}
        <div className="w-2/3 md:w-1/2 flex justify-center">
          <img src="images/PartnerWithUs/database.png" alt="Timeline" />
        </div>

        {/* right */}
        <div className="flex flex-col gap-8 md:w-1/3">
          <p className="sm:text-2xl md:text-3xl xl:text-5xl font-bold  tracking-wide md:leading-10 text-[#4D4D4D] ">
            Gain access to our vast
            <span className="text-[#003D4D]">
              {" "}
              database of resumes and CVs,{" "}
            </span>
            where you can search and discover the perfect candidates for your
            company
          </p>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
