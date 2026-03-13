import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className=" text-secondary text-xs md:text-[17px] max-w-3xl md:leading-[30px]"
      >
        I’m a frontend-focused Web Developer with nearly one year of hands-on
        experience building production-ready web applications using React.js and
        Next.js. I primarily work on modern frontend architecture and UI, while
        also contributing to backend APIs and data handling in MERN stack
        environments.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
