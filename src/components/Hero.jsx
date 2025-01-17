import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { FileInput, MapPin } from "lucide-react";
import { indiaflag } from "../assets";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import FloatingLogos from "./FloatingLogos";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className="relative w-full h-screen mx-auto overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flow-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-12">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-96 h-40 violet-gradient"></div>
        </div>

        <motion.div
          className="mt-7"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className={`${styles.heroHeadText} text-white `}>
            <span className="flex items-center gap-2">
              Hi{" "}
              <img
                src={
                  isHovered
                    ? "src/assets/wave.gif"
                    : "src/assets/static-wave.png"
                }
                alt="wave"
                className="inline w-32 "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </span>
            I'm <span className="text-[#915eff]">Gaurav</span>
          </h1>

          <span className={`${styles.heroSubText} text-white-100`}>
            Frontend Developer
          </span>

          <span className="flex items-center text-cyan-400 mt-2">
            <MapPin size="20" /> &nbsp;Uttarakhand, India &nbsp;
            <img src={indiaflag} alt="" className="h-4" />
          </span>

          <span className="flex items-center gap-10 z-10 mt-10">
            <a href="mailto:gauravpandey2310@gmail.com" target="_blank">
              <RiMailFill className="hover:text-cyan-400" size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/gauravpandey04/"
              target="_blank"
            >
              <FaLinkedinIn className="hover:text-cyan-400" size={32} />
            </a>
            <a href="https://github.com/gaurav-pndy" target="_blank">
              <FaGithub size={32} className="hover:text-cyan-400" />
            </a>
            <a
              href="https://drive.google.com/file/d/1wOFPYHY5lH7Jkew-ImnN9rkdnLan2HUW/view?usp=drive_link"
              target="_blank "
            >
              <button className="border border-white py-2 cursor-pointer rounded-xl flex gap-1 px-4 hover:bg-cyan-950 transition-all duration-300">
                <FileInput size="20" /> Resume
              </button>
            </a>
          </span>
        </motion.div>
      </div>

      <div className="absolute top-10 right-0 w-1/2 h-full flex p-10">
        <motion.img
          src="src/assets/man-with-laptop2.png"
          alt=""
          className=""
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      <FloatingLogos />

      <div className="absolute xs:bottom-5 bottom-32 z-20 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
