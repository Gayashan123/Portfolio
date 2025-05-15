import Hospital from "../../src/assets/Hospital.jpg";
import Sixpack from "../../src/assets/Sixpack.jpg";
import Film from "../../src/assets/Film.jpg";
import Game from "../../src/assets/Game.jpg";
import { Typewriter } from 'react-simple-typewriter';

function Portfolio() {
  const projects = [
    {
      title: "Hospital System UI",
      description: "A fully responsive hospital system UI design.",
      image: Hospital,
      link: "https://gayashan123.github.io/Hospital_Sys/",
    },
    {
      title: "Film Site UI",
      description: "Film Bex site to explore and enjoy trending movies.",
      image: Film,
      link: "https://movie-hub-8otk-git-main-gayashan123s-projects.vercel.app",
    },
    {
      title: "Six Pack Duration",
      description: "App to calculate how long it takes to get a six-pack.",
      image: Sixpack,
      link: "https://gayashan123.github.io/Six_Pack_Duration/",
    },
    {
      title: "Typing Game",
      description: "Interactive game to improve your typing speed and accuracy.",
      image: Game,
      link: "https://gayashan123.github.io/typingGame/",
    },
  ];

  return (
    <div className=" border-b-1 border-t-1 border-amber-50 w-full bg-gradient-to-tr from-[#0f0f0f] via-[#1f1f1f] to-[#151515]  py-20 px-6" id="projects">
      <h1 className="text-4xl font-extrabold text-center text-white mb-16">
        <Typewriter
                     words={['My Projects', 'My portfolio']}
                     loop={true}
                     cursor
                     cursorStyle="|"
                     typeSpeed={100}
                     deleteSpeed={60}
                     delaySpeed={1500}
                   />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 shadow-md hover:shadow-xl transition-transform hover:scale-105 duration-300  shadow-white"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <p className="text-sm text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full mt-6 py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-md hover:shadow-lg">
                  Visit Project
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
