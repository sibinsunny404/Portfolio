import React from 'react'
import { FaLinkedinIn,FaNodeJs } from "react-icons/fa";
import { SiWireshark,SiGithub,SiGmail,SiInstagram,SiKalilinux,SiParrotsecurity} from "react-icons/si";
import { GrVmware } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from "react-icons/md";



const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            SECURITY utilities
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://www.wireshark.org/" target="_blank" rel="noopener noreferrer">
              <SiWireshark /> </a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.vmware.com/" target="_blank" rel="noopener noreferrer">
              <GrVmware /> </a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.kali.org/" target="_blank" rel="noopener noreferrer">
              <SiKalilinux size={40} style={{ fill: 'white' }}/> </a>
            </span>
            <span className="bannerIcon">
            <a href="https://nmap.org/" target="_blank" rel="noopener noreferrer">
              <MdOutlineRemoveRedEye size={25} /> </a>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media