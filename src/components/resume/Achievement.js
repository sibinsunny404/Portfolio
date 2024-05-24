import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Secured first place at district level (Dakshina Kannada)."
            subTitle="Cyseck (2023)"
            result="Remote"
            des="Secured first place in introduction to cybersecurity, which CySecK runs through NASSCOM and Cisco Platforms. At district level (Dakshina Kannada)."
          />
          <ResumeCard
            title="First Prize in web development"
            subTitle="Joshiana National level IT fest, Mangalore (2022)"
            result="Mangluru"
            des="I earned first place in web design at the Joshiana National Level IT Fest 2022, held by St. Joseph Engineering College in Mangalore."
          />
        </div>
      </div>
      {/* <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="English Competency Analytical Test (ECAT)"
            subTitle="5th NELTAS ECAT GRAND FINALE (2015 - 2016)"
            result="80.5%"
            des="Certificate awarded for meritorious performance in the exam."
          />
          <ResumeCard
            title="The Bharat Scouts And Guides"
            subTitle=" Course during 9th and 10th Std (2016 - 2018)"
            result="A"
            des="Awarded 'A' grade certificate for successfully completing the course exams."
          />
          <ResumeCard
            title="Scholarship Exam"
            subTitle="4th Std Scholarship Exam conducted by Government of Maharashtra (2012)"
            result="230/300"
            des="Passed with good marks in the exam but not received scholarship. (all passed students are not given scholarship)."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
