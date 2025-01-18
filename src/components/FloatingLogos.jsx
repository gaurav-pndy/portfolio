import React from "react";
import { react, redux, vscode } from "../assets";
import { git } from "../assets";
import { motion } from "framer-motion";

const FloatingLogos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }} // Apply delay to the parent div
      className="hidden md:block"
    >
      {/* Floating Logo 1 */}
      <div className="absolute top-16 left-60 lg:left-[30rem]">
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
          }}
          dragElastic={0.5}
          animate={{
            x: [0, -10, 0, 10, 0],
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <img
            src={react}
            alt="Floating 1"
            className="w-40 h-40"
            draggable="false"
          />
        </motion.div>
      </div>

      {/* Floating Logo 2 */}
      <div className="absolute top-40 right-10">
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
          }}
          dragElastic={0.5}
          animate={{
            x: [0, 5, 0, -5, 0],
            y: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <img
            src={vscode}
            alt="Floating 2"
            className="w-32 h-32"
            draggable="false"
          />
        </motion.div>
      </div>

      {/* Floating Logo 3 */}
      <div className="absolute bottom-60 lg:top-80 left-5">
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
          }}
          dragElastic={0.5}
          animate={{
            x: [0, -10, 0, 10, 0],
            y: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <img
            src={git}
            alt="Floating 3"
            className="w-40 h-40 lg:w-28 lg:h-28"
            draggable="false"
          />
        </motion.div>
      </div>

      {/* Floating Logo 4 */}
      <div className="absolute bottom-20 lg:top-[35rem] left-[40rem] lg:left-[50rem]">
        <motion.div
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: window.innerWidth,
            bottom: window.innerHeight,
          }}
          dragElastic={0.5}
          animate={{
            x: [0, 5, 0, -5, 0],
            y: [0, -5, 0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <img
            src={redux}
            alt="Floating 4"
            className="w-20 h-20"
            draggable="false"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FloatingLogos;
