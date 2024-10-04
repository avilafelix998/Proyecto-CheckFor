import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../public/img/img1.jpg";
import img2 from "../public/img/img2.jpg";
import img3 from "../public/img/img3.jpg";
import img4 from "../public/img/img6.jpg";

const items = [
  {
    imgSrc: img1,
    title: "SEGURIDAD EN CONSTRUCCIÓN",
    type: "PROTECCIÓN EN EL SITIO DE OBRA",
    description:
      "En el sector de construcción, la seguridad es primordial. Implementar medidas como el uso de cascos, arneses y equipo de protección personal (EPP) ayuda a prevenir accidentes y lesiones. Además, es crucial realizar capacitaciones periódicas para el manejo seguro de herramientas y equipos.",
  },
  {
    imgSrc: img2,
    title: "HIGIENE EN EL SECTOR INDUSTRIAL",
    type: "SALUD EN EL LUGAR DE TRABAJO",
    description:
      "En la industria, mantener un entorno limpio y seguro es esencial. La implementación de protocolos de limpieza, así como la correcta gestión de desechos químicos, minimiza riesgos para la salud. La formación en el uso seguro de maquinaria es clave para prevenir lesiones.",
  },
  {
    imgSrc: img3,
    title: "SEGURIDAD EN INSTITUCIONES EDUCATIVAS",
    type: "PROTEGIENDO A NUESTROS ESTUDIANTES",
    description:
      "La seguridad en las instituciones educativas es vital. Medidas como simulacros de evacuación, protocolos de emergencia y la promoción de un ambiente seguro contribuyen a la protección de estudiantes y personal. Fomentar la higiene a través de la limpieza regular y el acceso a materiales de higiene personal es igualmente importante.",
  },
  {
    imgSrc: img4,
    title: "COMPROMISO CON LA SEGURIDAD",
    type: "UNA RESPONSABILIDAD COMPARTIDA",
    description:
      "La seguridad y la higiene son responsabilidades compartidas en todos los sectores. Implementar políticas efectivas y fomentar una cultura de seguridad protege a los trabajadores y mejora el bienestar general. La formación continua y el compromiso son esenciales para un entorno laboral seguro.",
  },
];

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const moveSlider = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    } else {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      );
    }
    resetInterval(); // Reiniciar el intervalo al mover el slider
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      moveSlider("next");
    }, 6000);
  };

  useEffect(() => {
    resetInterval(); // Configurar el intervalo inicial al cargar el componente

    return () => {
      clearInterval(intervalRef.current); // Limpiar el intervalo al desmontar el componente
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        moveSlider("next");
      } else if (event.key === "ArrowLeft") {
        moveSlider("prev");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    //* div envoltorio - no tocar
    <div className="...">
      {" "}
      {/* ajustar con p-2 y bg-black a gusto */}
      <div className="relative w-full overflow-hidden h-96 slider">
        <AnimatePresence>
          <motion.div
            className="list"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`item absolute inset-0 transition-opacity duration-500`}
            >
              <img
                src={items[currentIndex].imgSrc}
                alt={items[currentIndex].title}
                className="object-cover w-full h-full"
              />
              <motion.div
                initial={{ y: -100, opacity: 0, filter: "blur(20px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -100, opacity: 0, filter: "blur(20px)" }}
                transition={{ duration: 0.5 }}
                className="absolute w-1/2 text-left text-white transform -translate-x-0 content top-1/4 left-10 h-1/2"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0, filter: "blur(20px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: 20, opacity: 0, filter: "blur(20px)" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl font-bold title"
                >
                  {items[currentIndex].title}
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0, filter: "blur(20px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: 20, opacity: 0, filter: "blur(20px)" }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-2xl text-orange-600 type"
                >
                  {items[currentIndex].type}
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0, filter: "blur(20px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: 20, opacity: 0, filter: "blur(20px)" }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="hidden mt-4 description md:block" // hidden en pantallas móviles
                >
                  {items[currentIndex].description}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
