import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-4 rounded-2xl "
      >
        <div className="relative w-full lg:h-[280px]">
          <img
            loading="lazy"
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl shadow-[0_20px_15px_-10px_rgba(0,0,0,0.3)] hover:scale-110 transition-all duration-300 cursor-pointer"
          />
        </div>

        <div className="mt-5 md:mt-10">
          <h3 className="text-white font-bold text-xl md:text-2xl flex justify-between items-center ">
            <span>{name}</span>
            <span className="flex gap-5 text-cyan-700">
              <a href={live_link} target="_blank" className="relative group">
                <FaExternalLinkAlt className="hover:scale-125 transition-all duration-300" />
                <span className="absolute bottom-full w-max left-1/2 transform -translate-x-1/2 mb-3 hidden group-hover:block bg-black text-white text-[10px] rounded px-2 py-1 ">
                  Live Demo →
                </span>
              </a>
              <a
                href={source_code_link}
                target="_blank"
                className="relative group"
              >
                <FaGithub className="hover:scale-125 transition-all duration-300" />
                <span className="absolute bottom-full w-max left-1/2 transform -translate-x-1/2 mb-3 hidden group-hover:block bg-black text-white text-[10px] rounded px-2 py-1 ">
                  Source Code →
                </span>
              </a>
            </span>
          </h3>
          <p className="mt-2 text-secondary text-xs md:text-sm">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[9px] md:text-xs bg-[#00000095] py-2 px-3 backdrop-blur-2xl rounded-md flex items-center gap-1`}
            >
              <img src={tag.image} alt="" className="h-3 w-3 md:w-4 md:h-4" />
              {tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-secondary text-xs md:text-[17px] max-w-3xl md:leading-[30px]"
        >
          These projects highlight my technical skills and hands-on experience.
          Each project includes a brief description, code repository, and live
          demo, showcasing my ability to solve problems and work with modern
          technologies like React, Tailwind CSS, ShadCN, Firebase, etc.
        </motion.p>
      </div>

      <div className="mt-10 md:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
