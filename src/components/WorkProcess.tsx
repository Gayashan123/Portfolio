import { motion } from "framer-motion";
import { FaSearch, FaLightbulb, FaPencilAlt, FaRocket } from "react-icons/fa";

function WorkProcess() {
  const steps = [
    {
      title: "Research",
      icon: <FaSearch className="text-blue-400" size={32} />,
      description: "Explore client needs and gather insights.",
    },
    {
      title: "Analyze",
      icon: <FaLightbulb className="text-yellow-400" size={32} />,
      description: "Break down requirements into clear steps.",
    },
    {
      title: "Design",
      icon: <FaPencilAlt className="text-pink-400" size={32} />,
      description: "Create UI/UX focused layouts and designs.",
    },
    {
      title: "Launch",
      icon: <FaRocket className="text-green-400" size={32} />,
      description: "Deploy and monitor with care and quality.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-tr from-[#0f0f0f] via-[#1f1f1f] to-[#151515] text-center text-white py-16">
      <div className="flex flex-col md:flex-row items-center p-8 md:p-12 max-w-6xl w-full mx-auto gap-8">
        {/* Left Side */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left space-y-6 px-2 md:px-8"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-snug">
            Work Process
          </h1>
          <p className="text-gray-300 text-base md:text-lg">
            I build responsive, fast, and modern websites using the latest tech.
            Let's create something amazing together.
          </p>
        </motion.div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 perspective-3d">
          {steps.map((step, index) => (
          <motion.div
  key={index}
  className="group bg-gradient-to-br from-[#1c1c1c] to-[#111] border border-gray-700 p-6 rounded-2xl shadow-2xl transform-gpu transition-all duration-500 hover:rotate-[1deg] hover:scale-105 hover:shadow-[0px_15px_40px_rgba(255,255,255,0.05)] relative hover:z-10"
  animate={{ y: [0, -10, 0] }} // bounce vertically
  transition={{
    duration: 1.5,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
    delay: index * 0.2, // optional stagger
  }}
  style={{ transformStyle: "preserve-3d" }}
>


              {/* Glowing Edge */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-400 blur-md opacity-20 group-hover:opacity-40 transition-all duration-500 z-0" />

              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="bg-[#2b2b2b] p-4 rounded-full shadow-inner shadow-black">
                  {step.icon}
                </div>
                <h2 className="font-bold text-lg text-white">{step.title}</h2>
                <p className="text-sm text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
