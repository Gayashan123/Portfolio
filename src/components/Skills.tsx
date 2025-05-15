
import { motion } from "framer-motion";
import ReactLogo from "../../src/assets/React.jpg";
import NextjsLogo from "../../src/assets/Nextjs.png";
import MongoLogo from "../../src/assets/Mongo db.png";
import FigmaLogo from "../../src/assets/Figma.png";
import TypeScriptLogo from "../../src/assets/Typescript.svg.png";
import JavaScriptLogo from "../../src/assets/JavaScript-logo.png";
import { Typewriter } from "react-simple-typewriter";

function Skills() {
  const skills = [
    { name: "React + Vite", image: ReactLogo, level: "Intermediate" },
    { name: "Next.js", image: NextjsLogo, level: "Intermediate" },
    { name: "MongoDB", image: MongoLogo, level: "Intermediate" },
    { name: "Figma", image: FigmaLogo, level: "Intermediate" },
    { name: "TypeScript", image: TypeScriptLogo, level: "Intermediate" },
    { name: "JavaScript", image: JavaScriptLogo, level: "Intermediate" },
  ];

  // Animation variants for floating effect
  

  return (
    <div className="w-full bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#121212] py-20 px-6" id="skills">
      <h1 className="text-4xl font-extrabold text-center text-white mb-16 drop-shadow-glow">
        <Typewriter
          words={["My Skills", "Languages", "Skill Level"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={60}
          delaySpeed={1500}
        />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
        <motion.div
  key={index}
  className="relative group perspective-1000"
  initial={{ rotateY: 0, y: 0 }}
  animate={{ rotateY: [0, 10, -10, 0], y: [0, -8, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
  }}
  whileHover={{
    scale: 1.1,
    rotateX: 5,
    rotateY: 5,
    boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)",
  }}
>
  <div className="absolute top-2 left-2 w-full h-full bg-white/5 rounded-[2rem] blur-sm -z-10 scale-95 skew-y-3 rotate-2" />

  <div className="bg-[#1c1c1c] border border-white/10 rounded-full p-6 shadow-2xl shadow-white/5 group-hover:shadow-white/20 transition-all duration-500 text-white flex flex-col items-center space-y-4">
    <div className="w-20 h-20 bg-white p-2 rounded-full overflow-hidden shadow-inner shadow-white/20 group-hover:rotate-3 transition-all duration-300">
      <img
        src={skill.image}
        alt={skill.name}
        className="w-full h-full object-contain"
      />
    </div>
    <h2 className="text-xl font-semibold">{skill.name}</h2>
    <p className="text-sm text-gray-400">{skill.level}</p>
  </div>
</motion.div>

        ))}
      </div>
    </div>
  );
}

export default Skills;
