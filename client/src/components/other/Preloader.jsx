import React from "react";
import { motion } from "framer-motion";

import P1 from "../public/img/P1.jpg";
import P2 from "../public/img/P2.jpg";
import P3 from "../public/img/P3.jpg";
import P4 from "../public/img/P4.jpg";
import P5 from "../public/img/img1.jpg";

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.4,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};

const Preloader = ({ setLoading }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen overflow-hidden bg-black"
    >
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="relative flex flex-wrap w-4/5 gap-4 h-4/5"
      >
        <ImageBlock variants={item} src={P1} alt="P1" className="absolute w-[400px] right-2/3 bottom-[10%]" />
        <ImageBlock variants={item} src={P2} alt="P2" className="absolute w-[600px] left-1/4 top-[15%]" />
        <ImageBlock variants={item} src={P3} alt="P3" className="absolute w-[400px] left-2/3 bottom-[40%]" />
        <ImageBlock variants={item} src={P4} alt="P4" className="absolute w-[280px] left-[5%] top-[18%]" />
        <ImageBlock variants={item} src={P5} alt="P5" className="absolute w-[250px] left-2/3 top-[70%]" />
      </motion.div>
    </motion.div>
  );
};

const ImageBlock = ({ variants, src, alt, className }) => {
  return (
    <motion.div
      variants={variants}
      className={`overflow-hidden rounded-lg ${className}`}
    >
      <img src={src} alt={alt} className="object-fill w-full" />
    </motion.div>
  );
};

export default Preloader;

