import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Master of Computer Application"
            subTitle="Vivekananda College of Engineering and Technology (2021 - 2023)"
            result="8.6 CGP"
            des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, etc."
          />
          <ResumeCard
            title="Bachelor of Computer Application"
            subTitle="SDM Collee, Ujire (2018 - 2021)"
            result="62%"
            des="Studied programming in c,c++ and java "
          />
          <ResumeCard
            title="Pre-University College"
            subTitle="Vani PU College (2016 - 2018)"
            result="73% "
            des="Studied Accountancy, Economics, Business and Statistics."
          />
            <ResumeCard
            title="Primary & Secondary School Education"
            subTitle="Aladangady government High School (2012 - 2016)"
            result="70% "
            des="I attended this school from primary to tenth grade. SSC subjects are English, Hindi, Kannada, Mathematics, Science, and Social Sciences."
          /> 
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Certified Ethical Hacker (CEH)"
            subTitle="Ec-Council - Pursuing"
            result="View"
            des="Acquired skills in ethical vulnerability assessment, hacking tools, and security implementation."
            certref=''

          />
          <ResumeCard
            title="Introduction to Cyber Security"
            subTitle="Cisco - October-2022"
            result="View"
            des="Studied cybersecurity basics like threat landscapes, security protocols, and best practices for protecting information and networks."
            certref='https://www.credly.com/badges/235d65f2-3cf2-4834-973b-abc6a2ddf195/public_url'
          />
          <ResumeCard
            title="Ethical Hacking Essentials"
            subTitle="Ec-Council - November-2022"
            result="view"
            des="Developed skills in ethical hacking, including penetration testing, vulnerability assessment, and securing IT systems against cyber threats."
            certref="https://codered.eccouncil.org/certificate/c21a9873-1302-4a25-8057-f279f5ef8fb8?logged=false"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education