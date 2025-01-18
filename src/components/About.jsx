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
        I'm a frontend developer proficient in React.js and JavaScript. I
        specialize in building interactive web applications, integrating APIs,
        and delivering seamless user experiences with modern tools like Firebase
        and Supabase. Passionate about clean code and problem-solving, I focus
        on creating responsive, intuitive interfaces.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
