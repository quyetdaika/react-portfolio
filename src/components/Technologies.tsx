import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiSpringboot,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiGoogledrive,
  SiGit,
  SiPostgresql,
  SiPostman,
} from "react-icons/si";
import gwtIcon from "../assets/gwt.svg";
import datastoreIcon from "../assets/datastore.svg";
import { motion } from "framer-motion";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
        whileInView={{opacity: 1, x: 0}} 
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        {/* React Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        {/* Spring Boot Icon */}
        <motion.div
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSpringboot className="text-7xl text-green-500" />
        </motion.div>
        {/* Tailwind CSS Icon */}
        <motion.div
          variants={iconVariants(2.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-blue-400" />
        </motion.div>
        {/* Bootstrap Icon */}
        <motion.div
          variants={iconVariants(3.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiBootstrap className="text-7xl text-purple-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={gwtIcon} alt="GWT" className="w-20 h-20" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={datastoreIcon} alt="Datastore" className="w-20 h-20" />
        </motion.div>
        {/* MySQL Icon */}
        <motion.div
          variants={iconVariants(3.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>
        {/* PostgreSQL Icon */}
        <motion.div
          variants={iconVariants(3.9)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostgresql className="text-7xl text-blue-800" />
        </motion.div>
        {/* Git Icon */}
        <motion.div
          variants={iconVariants(4.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGit className="text-7xl text-orange-500" />
        </motion.div>
        {/* Postman Icon */}
        <motion.div
          variants={iconVariants(4.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPostman className="text-7xl text-orange-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
