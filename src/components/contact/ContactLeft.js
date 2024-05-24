import React from 'react'
import {  FaLinkedinIn } from "react-icons/fa";
import { SiGithub,SiGmail, SiInstagram } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Sibin Sunny</h3>
        <p className="text-lg font-normal text-gray-400">
        Cyber Security Enthusiastic
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        A Security Analyst with a fusion of cybersecurity knowledge and analytical abilities aimed at bolstering organizational resilience. I am on the lookout for a position where I can utilize practical experience in threat intelligence and vulnerability assessment to achieve top-notch security results."
        </p>
       
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sibinsunny33@gmail.com</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Github: <span className="text-lightText">https://github.com/sibinsunny404</span>
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://github.com/sibinsunny404" target="_blank" rel="noopener noreferrer">
            <SiGithub /></a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.instagram.com/sibin_sunny_404?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
              <SiInstagram /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/sibinsunny404" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft