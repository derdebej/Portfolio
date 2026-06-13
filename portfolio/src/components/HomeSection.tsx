import avatar from "../assets/ee2115e5-1fa1-4500-9078-5067804191f7.png";
import {
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPhone,
} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { IoDocumentTextOutline } from "react-icons/io5";
import CopyToClipboard from "./CopyToClipboard";
import { useLanguage } from "../context/LanguageContext";
import { t } from "../i18n/translations";

const HomeSection = () => {
  const { lang } = useLanguage();
  const tr = t[lang].home;
  const cvFile = lang === "fr" ? "/cv_fr.pdf" : "/cv_en.pdf";

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 md:gap-25 px-6 py-20 md:py-0">

      <img
        src={avatar}
        alt="Nader Ben Salah"
        className="rounded-full w-40 h-40 md:w-[400px] md:h-[400px] object-cover shrink-0
                 hover:shadow-[0_0_40px_gray] transition-shadow duration-300
                 border-2 border-neutral-700"
      />

      <div className="text-white text-center md:text-left">
        <h1 className="text-4xl md:text-7xl">{tr.greeting}</h1>
        <p className="text-6xl md:text-9xl font-bold">Nader</p>
        <p className="text-base md:text-2xl mt-1">{tr.role}</p>
        <p className="text-base md:text-2xl flex items-center justify-center md:justify-start gap-1 mt-2">
          <FaLocationDot size={16} /> {tr.location}
        </p>

        <div className="flex mt-4 gap-3 md:gap-4 items-center flex-wrap justify-center md:justify-start">
          <CopyToClipboard
            value="+216 94 066 700"
            icon={<FaPhone size={20} />}
            copiedText={tr.phoneCopied}
          />
          <CopyToClipboard
            value="nader.ben.salah.78@gmail.com"
            icon={<BiLogoGmail size={28} />}
            copiedText={tr.emailCopied}
          />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/derdebej">
            <FaGithub className="hover:text-gray-300 transition-all duration-300" size={28} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/nader-ben-salah-256692328/">
            <FaLinkedin className="hover:text-gray-300 transition-all duration-300" size={28} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/nader.ben.salah.1312">
            <FaFacebook className="hover:text-gray-300 transition-all duration-300" size={28} />
          </a>
         
          <a
            href={cvFile}
            download
            className="flex items-center gap-1.5 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-300 transition-all duration-300 text-sm md:text-base"
          >
            <IoDocumentTextOutline size={18} />
            <span className="hidden sm:inline">{tr.downloadCV}</span>
            <span className="sm:hidden">CV</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
