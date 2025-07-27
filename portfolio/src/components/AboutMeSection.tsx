// @ts-ignore
import React from "react";
import avatar from "../assets/ee2115e5-1fa1-4500-9078-5067804191f7.png";
import CopyToClipboard from "./CopyToClipboard";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const AboutMeSection = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-10">
        <div className="backdrop-blur-sm border-2 rounded-xl h-170 w-107 border-neutral-700 flex  flex-col justify-between items-center p-8">
          <div className="border-b border-b-neutral-700 pb-5">
            <img
              src={avatar}
              className="rounded-xl w-90 border-neutral-700 border-2"
            />
          </div>
          <div className="text-5xl text-neutral-300 w-full text-left flex flex-col">
            Nader Ben Salah{" "}
            <span className="text-2xl text-neutral-400">
              Software Engineering Student
            </span>
          </div>
          <div className="flex items-center w-full justify-between px-5">
            <CopyToClipboard
              value="+216 94066700"
              icon={<FaPhone size={22} />}
              copiedText="Phone number copied!"
            />
            <CopyToClipboard
              value="nader@example.com"
              icon={<BiLogoGmail size={30} />}
              copiedText="Email copied!"
            />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/derdebej"
            >
              <FaGithub
                className="hover:text-gray-300 transition-all duration-300"
                size={30}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nader-bensalah-256692328/"
            >
              <FaLinkedin
                className="hover:text-gray-300 transition-all duration-300"
                size={30}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/nader.ben.salah.1312"
            >
              <FaFacebook
                className="hover:text-gray-300 transition-all duration-300"
                size={30}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/nader__bs/"
            >
              <FaInstagram
                className="hover:text-gray-300 transition-all duration-300"
                size={30}
              />
            </a>
          </div>
        </div>
        <div className="p-8 backdrop-blur-sm border-2 rounded-xl h-170 w-180 border-neutral-700 text-2xl">
          <h1 className="font-bold text-5xl pb-6">About Me</h1>
          I’m a computer engineering student fueled by curiosity and a
          relentless drive to learn, listen, and bring ideas to life. Whether
          strategizing on a chessboard, chasing victory on the football field,
          or immersing myself in gaming, I thrive on challenges that push me to
          grow. I’m passionate about collaborating with others, soaking up
          knowledge, and applying it creatively to solve problems. I’m eager to
          seize opportunities where I can shine, crafting innovative solutions
          and making a lasting impact through teamwork and dedication.
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
