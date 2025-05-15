import NavbarTailwind from "./Navbar";
import Gaya from "../../src/assets/image2.jpg"; // Ensure this path is correct
import AboutMe from "./AboutMe";
import { Typewriter } from "react-simple-typewriter";
import "../index.css";
import { FaGithub } from "react-icons/fa";

function HeroSec() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-tr from-[#0f0f0f] via-[#1f1f1f] to-[#151515] text-white flex flex-col" id="home">
      {/* Navbar */}
      <NavbarTailwind />

      {/* Hero Section */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-16 pt-24 md:pt-32 gap-10 max-w-7xl mx-auto w-full">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hello, I am
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 min-h-[3rem]">
            <Typewriter
              words={[
                "Gayashan Maduwantha",
                "Front-End Developer",
                "UI/UX Designer",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={60}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-base md:text-lg text-gray-300 mt-4 max-w-lg mx-auto md:mx-0">
            Discover stunning UI, responsive design, and modern performance - all in one place.
          </p>

          <a
            href="https://github.com/Gayashan123"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="mt-6 mb-3 bg-purple-600 hover:bg-yellow-500 text-white hover:text-black px-6 py-3 rounded-2xl font-medium shadow-lg transition duration-300 flex items-center gap-2 mx-auto md:mx-0">
              <FaGithub size={20} />
              Visit Git Hub
            </button>
          </a>
        </div>
<div className="mb-3 flex justify-center items-center">
  <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 animated-gradient-border rounded-[1rem] overflow-hidden">
    {/* Inner mask with image inside */}
    <div className="inner-mask rounded-[0.875rem]">
      <img
        src={Gaya}
        alt="Hero"
        draggable={false}
        className="rounded-[0.875rem] w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
</div>




      </div>

      {/* About Section */}
      <AboutMe />
    </div>
  );
}

export default HeroSec;
