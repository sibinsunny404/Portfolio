import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="AI ChatBot"
          des="An artificial intelligence (AI)-powered chatbot is a software programme that imitates human interaction making use of text messages. It adopts machine learning and artificial intelligence to manage responses from the users, understand it, and also to respond accordingly."
          src={projectOne}
          githubLink="https://github.com/sibinsunny404/AI_Chatbot"

        />
        <ProjectsCard
          title="Bank-Customer-Data-Analysis"
          des="Leveraging artificial intelligence and machine learning to analyze customer data, uncovering insights to enhance personalized banking services and improve fraud detection. This innovative approach optimizes decision-making and boosts overall customer satisfaction."
          src={projectTwo}
          githubLink="https://github.com/sibinsunny404/Bank-Custmoer-Data-Analysis"
        />
        <ProjectsCard
          title="Attendance_Management"
          des="A web portal with individual dashboards for students and teachers, where students track attendance and personal information, while teachers manage student details and attendance efficiently."
          src={projectThree}
          githubLink="https://github.com/sibinsunny404/Attendance_Management"
        />
        <ProjectsCard
          title="IOT Health Care"
          des="This IoT project uses a MAX30102 sensor and Raspberry Pi 4 to measure and monitor heart rate and oxygen saturation, transmitting data for real-time analysis and alerts. Designed for various settings, it enhances patient care and healthcare efficiency through remote monitoring."
          src={projectFour}
          githubLink="https://github.com/sibinsunny404/IOT_Health-Care"
          
        />
        <ProjectsCard
          title="Co Care"
          des="A replica of the CoWIN government website, Co Care offers an improved user interface and additional features while maintaining all the functionalities of the original platform."
          src={projectFive}
          githubLink="https://github.com/sibinsunny404/Co-Care"
          // websiteLink="https://templesevamanagement.netlify.app/"
        />
        <ProjectsCard
          title="Check my Github profile"
          des="See my Github page for more details about the projects."
          src={projectSix}
          githubLink="https://github.com/sibinsunny404"
      
        />
      </div>
    </section>
  );
}

export default Projects