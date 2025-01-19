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
          className="h-12 w-12 md:w-24 md:h-24 text-center "
          key={technology.name}
        >
          <img
            src={technology.icon}
            alt={technology.name}
            className="p-2 rounded-full bg-gradient-to-b from-purple-800 to-purple-950 shadow-lg shadow-purple-500/50 mb-2 md:hidden"
          />

          <BallCanvas icon={technology.icon} />
          <span className="text-[10px] md:text-sm">{technology.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Tech;
