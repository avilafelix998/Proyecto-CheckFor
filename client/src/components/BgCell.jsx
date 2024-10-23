import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../utils/cn.js"; // Asegúrate de que esta función esté disponible

export const BackgroundCellAnimation = ({ text }) => {
  return (
    <div className="relative flex justify-center overflow-hidden h-[140px] ">
      <BackgroundCellCore />
      <div className="relative z-50 mt-12 pointer-events-none select-none">
        <AnimatedHeading text={ text } />
      </div>
    </div>
  );
};

const AnimatedHeading = ({ text }) => {
  const words = text.split(" ");
  
  return (
    <div className="relative text-center top-1 ">
      <h1 
        className="mb-4 text-3xl text-white"
        style={{ fontFamily: "Kdam Thmor Pro, sans-serif" }}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: 'blur(10px)' }} // Comienza con desenfoque y opacidad 0
            animate={{ opacity: 1, filter: 'blur(0px)' }} // Aclara y quita el desenfoque
            transition={{ duration: 0.5, delay: index * 0.3 }} // Retraso para cada palabra
          >
            {word}{' '}
          </motion.span>
        ))}
      </h1>
      <motion.hr
        className="w-2/3 mx-auto border-t-2 border-white rounded-lg"
        initial={{ scaleX: 0 }} // Comienza en 0
        animate={{ scaleX: 2 }} // Se estira hasta 1
        transition={{ duration: 1.5 }} // Duración de la animación
      />
    </div>
  );
};

const BackgroundCellCore = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (event) => {
    const rect = ref.current && ref.current.getBoundingClientRect();
    setMousePosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const size = 300;
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 h-full"
    >
      <div className="absolute h-[20rem] inset-y-0 overflow-hidden">
        <div className="absolute z-40 w-full h-full pointer-events-none b -bottom-2 bg-gradient-to-b from-black to-zinc-950"
             style={{
               maskImage: 'linear-gradient(to bottom, transparent, transparent 20%, black 40%)' // Ajustado para que inicie a partir de la cuarta fila
             }}></div>
        <div
          className="absolute inset-0 z-20 bg-transparent"
          style={{
            maskImage: `radial-gradient(
              ${size / 4}px circle at center,
              white, transparent
            )`,
            WebkitMaskImage: `radial-gradient(
              ${size / 4}px circle at center,
              white, transparent
            )`,
            WebkitMaskPosition: `${mousePosition.x - size / 2}px ${
              mousePosition.y - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
            maskSize: `${size}px`,
            pointerEvents: "none",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          <Pattern cellClassName="border-blue-600 relative z-[100]" />
        </div>
        <Pattern className="opacity-[0.5]" cellClassName="border-neutral-700" />
      </div>
    </div>
  );
};

const Pattern = ({ className, cellClassName }) => {
  const x = new Array(47).fill(0);
  const y = new Array(4).fill(0); // Cambia esto si quieres más filas
  const matrix = x.map((_, i) => y.map((_, j) => [i, j]));
  const [clickedCell, setClickedCell] = useState(null);

  return (
    <div className={cn("flex flex-row relative z-30", className)}>
      {matrix.map((row, rowIdx) => (
        <div
          key={`matrix-row-${rowIdx}`}
          className="relative z-20 flex flex-col border-b"
        >
          {row.map((column, colIdx) => {
            const controls = useAnimation();

            useEffect(() => {
              if (clickedCell) {
                const distance = Math.sqrt(
                  Math.pow(clickedCell[0] - rowIdx, 2) +
                    Math.pow(clickedCell[1] - colIdx, 2)
                );
                controls.start({
                  opacity: [0, 1 - distance * 0.1, 0],
                  transition: { duration: distance * 0.2 },
                });
              }
            }, [clickedCell]);

            return (
              <div
                key={`matrix-col-${colIdx}`}
                className={cn(
                  "bg-transparent border-l border-b border-neutral-600",
                  cellClassName
                )}
                onClick={() => setClickedCell([rowIdx, colIdx])}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: [0, 1, 0.5],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "backOut",
                  }}
                  animate={controls}
                  className="bg-[rgba(14,165,233,0.3)] h-12 w-12"
                ></motion.div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

