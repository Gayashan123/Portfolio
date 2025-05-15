import Image from "../../src/assets/image2.jpg";
import MyCv from "../assets/Gayashan(new).pdf";
import { Typewriter } from "react-simple-typewriter";
import { Link as ScrollLink } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

function AboutMe() {
  return (
    <div
      className="flex border-b-2 border-amber-100 items-center justify-center bg-gradient-to-tr from-[#0f0f0f] via-[#1f1f1f] to-[#151515] px-4 py-16"
      id="about"
    >
      <div className="bg-[#1c1c1c] rounded-3xl shadow-green-200 shadow-md flex flex-col md:flex-row items-center p-8 md:p-12 max-w-6xl w-full border border-white/10">
        {/* Left - Image and Social Icons */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <div className="relative w-72 h-72 md:w-96 md:h-[26rem] rounded-[2rem] overflow-hidden shadow-lg border-4 border-white/10">
            <img
              src={Image}
              alt="Hero"
              className="w-full h-full object-cover scale-110 hover:scale-125 transition duration-700"
              draggable={false}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/40 backdrop-blur-md rounded-xl shadow-md px-6 py-2 flex space-x-4">
              <a
                href="https://web.facebook.com/kasungayashan.maduwantha.9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition"
              >
                <FaFacebook size={22} />
              </a>

              <a href="#" className="text-white hover:text-pink-500 transition">
                <FaInstagram size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/gayashan-maduwantha-152710253"
                className="text-white hover:text-blue-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 px-2 md:px-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
            <Typewriter
              words={["I am a Web Developer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            I build responsive, fast, and modern websites using the latest tech.
            Let’s create something amazing together.
          </p>

          {/* Buttons: Always in same row */}
          <div className="flex flex-nowrap gap-x-4 overflow-x-auto justify-center md:justify-start">
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="shrink-0 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl font-medium transition duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              My Projects
            </ScrollLink>

            <a
              href={MyCv}
              download
              className="shrink-0 bg-white/10 hover:bg-purple-600 text-white border border-purple-600 px-6 py-3 rounded-xl font-medium transition duration-300 flex items-center gap-2 shadow hover:shadow-lg"
            >
              <FaDownload size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
