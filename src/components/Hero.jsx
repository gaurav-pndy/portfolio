import React, { useEffect, useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { FileInput, MapPin } from "lucide-react";
import { wave, staticWave, manWithLaptop, indiaflag } from "../assets";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import FloatingLogos from "./FloatingLogos";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className="relative w-full h-screen mx-auto overflow-hidden "
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div
        className={`${styles.paddingX} absolute z-10  inset-0 top-16 xs:top-24 md:top-[130px] lg:top-[120px]  mx-auto flex flow-row items-start gap-5 max-w-7xl`}
      >
        <div className="flex flex-col justify-center items-center mt-12">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-96 h-64  violet-gradient"></div>
        </div>

        <motion.div
          className="mt-7"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className={`${styles.heroHeadText} text-white `}>
            <span className="flex items-center gap-2 z-10">
              Hi{" "}
              <img
                src={isHovered ? wave : staticWave}
                alt="wave"
                className="inline w-20 md:w-32 "
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
            </span>
            I'm <span className="text-[#915eff]">Gaurav</span>
          </h1>

          <span className={`${styles.heroSubText} text-white-100`}>
            Frontend Developer
          </span>

          <span className="flex text-sm md:text-base items-center text-cyan-400 mt-2">
            <MapPin size="20" /> &nbsp;Uttarakhand, India &nbsp;
            <img src={indiaflag} alt="" className="h-3 md:h-4" />
          </span>

          <span className="flex items-center md:gap-10 gap-5 z-10 mt-5 md:mt-10 text-2xl md:text-4xl">
            <a href="mailto:gauravpandey2310@gmail.com" target="_blank">
              <RiMailFill className="hover:text-cyan-400 " />
            </a>
            <a
              href="https://www.linkedin.com/in/gauravpandey04/"
              target="_blank"
            >
              <FaLinkedinIn className="hover:text-cyan-400" />
            </a>
            <a href="https://github.com/gaurav-pndy" target="_blank">
              <FaGithub className="hover:text-cyan-400" />
            </a>
            <a
              href="https://drive.google.com/file/d/1VvMX8O7WOPdaMf7A7HWA3djogK7-PqPM/view?usp=sharing"
              target="_blank "
            >
              <button className="border border-white py-2 cursor-pointer rounded-xl flex gap-1 items-center px-4 hover:bg-cyan-950 transition-all duration-300 text-xs  md:text-lg">
                <FileInput size="18" /> Resume
              </button>
            </a>
          </span>
        </motion.div>
      </div>

      <div className="absolute  bottom-0 xs:bottom-10 md:bottom-0 md:-right-20  lg:top-10 xxl:top-80  xxl:right-[35%] lg:right-0 md:h-[70%]  lg:h-full flex p-10 xxl:max-h-[60%]">
        <motion.img
          src={manWithLaptop}
          alt=""
          className=" w-96 h-96 md:h-full md:w-full object-cover"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>

      <FloatingLogos />

      <div className="absolute bottom-12 z-20 w-full flex justify-center items-center">
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
