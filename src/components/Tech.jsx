import React from "react";
import { motion } from "framer-motion";

import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <div
      className={`${styles.paddingX} max-w-7xl mx-auto mb-7 flex flex-row flex-wrap justify-center gap-x-5 gap-y-12 md:gap-10`}
    >
      {technologies.map((technology, index) => (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: index * 0.1 }}
          className="h-14 w-14 md:w-24 md:h-24 text-center "
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
          <span className="text-[10px] md:text-sm">{technology.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Tech;
