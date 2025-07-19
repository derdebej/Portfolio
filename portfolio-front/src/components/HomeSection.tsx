import React, { useState } from "react";
// @ts-ignore
import avatar from "../assets/ee2115e5-1fa1-4500-9078-5067804191f7.png";
import {
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhone,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";

const CopyToClipboard = ({ value, icon, copiedText = "Copied!" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      title={copied ? copiedText : "Copy to clipboard"}
      className="hover:text-gray-300 transition-all duration-300 cursor-pointer"
    >
      {!copied && icon}
      {copied && (
        <span className=" bg-white p-2 text-sm text-black rounded-lg">
          {copiedText}
        </span>
      )}
    </button>
  );
};

const HomeSection = () => {
  return (
    <div className="relative flex justify-center items-center h-screen ">
      <img
        src={avatar}
        alt="Nader Ben Salah"
        className="rounded-full w-[400px] h-[400px] object-cover 
                   hover:shadow-[0_0_40px_white] 
                   transition-shadow duration-300 
                   border border-gray-400"
      />
      <div className="ml-25 text-white text-left">
        <h1 className="text-7xl">Hello! I'm</h1>
        <p className="text-9xl font-bold">Nader</p>
        <p className="text-2xl">I'm a Software Engineering Student at ENSI</p>
        <p className="text-2xl flex items-center gap-1 mt-2">
          <FaLocationDot size={20} /> Located in Tunisia
        </p>

        <div className="flex mt-4 gap-4 items-center ">
          <CopyToClipboard
            value="+216 94066700"
            icon={<FaPhone size={25} />}
            copiedText="Phone number copied!"
          />
          <CopyToClipboard
            value="nader@example.com"
            icon={<BiLogoGmail size={35} />}
            copiedText="Email copied!"
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/derdebej"
          >
            <FaGithub className="hover:text-gray-300 transition-all duration-300" size={35} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/nader-bensalah-256692328/"
          >
            <FaLinkedin className="hover:text-gray-300 transition-all duration-300" size={35} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/nader.ben.salah.1312"
          >
            <FaFacebook className="hover:text-gray-300 transition-all duration-300" size={35} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/nader__bs/"
          >
            <FaInstagram className="hover:text-gray-300 transition-all duration-300" size={35} />
          </a>
          <a
            href="/cv 2.pdf"
            download
            className="flex items-center gap-1 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition-all duration-300"
          >
            <IoDocumentTextOutline size={20}/> Download My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
