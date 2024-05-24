import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 20XX</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Engineer"
            subTitle="GlowTouch Technologies. - (2023 - Present)"
            result="Manglore"
            des="I have joined GlowTouch Technologies, Manglore as a Technical Engineer on April 23, 2023."
          />
          <ResumeCard
            title="Freelancer"
            subTitle="Freelance. - (2022 - 2024)"
            result="Remote"
            des="I have been working as a freelancer since October 2022."
          />

        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-14 w-full h-[700px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cyber Security Intern"
            subTitle="CyberSapiens United LLP"
            result="Manglore"
            des="I have done my internship while studing MCA. I got a shot to explore new techs during this internship"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
