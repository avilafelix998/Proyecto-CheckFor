import React, { useEffect, useState } from "react";
import { Slider } from "../components/Slider";
import Banner from "../public/img/Banner1.jpg";
import { motion, useAnimation } from "framer-motion";
import { Example } from "../components/SectorCard.jsx";


const messages = [
  "La seguridad es responsabilidad de todos. ¡Construyamos un entorno seguro!",
  "Realiza revisiones periódicas de equipo y maquinarias",
  "Asegúrate que todos los trabajadores usen sus EPP",
  "El 70% de los accidentes laborales se pueden prevenir",
];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const controls = useAnimation();
  const exampleControls = useAnimation(); // Controles para el Example

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 10000); // Cambiar texto cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  // Lógica para los otros elementos
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({ x: 0, opacity: 1 });
        } else {
          controls.start({ x: "-100%", opacity: 0 }); // Elementos salen por la izquierda
        }
      });
    });

    const section = document.getElementById("overview-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [controls]);

  // Lógica para el Example
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          exampleControls.start({ x: 0, opacity: 1 });
        } else {
          exampleControls.start({ x: "100%", opacity: 0 }); // Example sale por la derecha
        }
      });
    });

    const exampleSection = document.getElementById("example-section");
    if (exampleSection) {
      observer.observe(exampleSection);
    }

    return () => {
      if (exampleSection) {
        observer.unobserve(exampleSection);
      }
    };
  }, [exampleControls]);

  return (
    <div className="overflow-hidden bg-slate-300">
      <div className="relative w-full h-64">
        <img src={Banner} alt="Banner" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-md" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-white text-7xl"
            style={{ fontFamily: "Kdam Thmor Pro" }}
          >
            CheckFor
          </h1>
        </div>
      </div>

      {/* Divisor con efecto marquee y máscara de desvanecimiento */}
      <div className="py-4 overflow-hidden text-center text-white bg-black">
        <div
          className="relative mx-auto"
          style={{
            width: "50%",
            overflow: "hidden",
            userSelect: "none",
            maskImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))",
          }}
        >
          <motion.div
            key={currentIndex}
            className="whitespace-nowrap"
            initial={{ x: "70%", opacity: 1 }} // Desde dónde inicia
            animate={{ x: "-90%", opacity: 1 }} // Mueve hacia la izquierda
            exit={{ x: "50%", opacity: 1 }} // Hasta dónde llega
            transition={{
              duration: 10, // Duración del movimiento
              ease: "linear",
            }}
          >
            <p className="text-md">{messages[currentIndex]}</p>
          </motion.div>
        </div>
      </div>

      <div>
        <Slider />
      </div>

      {/* Div de texto */}
      <div
        id="overview-section"
        className="px-4 py-8 text-white bg-gradient-to-b from-black to-gray-900"
      >
        <motion.h1
          className="mb-4 ml-3 text-4xl font-bold text-left"
          initial={{ x: "-100%", opacity: 0 }} // Inicia desde la izquierda y opaco
          animate={controls} // Usa los controles de animación
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }} // Suaviza la animación
        >
          VISIÓN GENERAL
          <hr className="mt-3 border-t-2 border-gray-300 rounded-lg w-80"></hr>
        </motion.h1>
        <motion.h2
          className="mb-4 ml-3 text-3xl text-left text-orange-600"
          style={{ fontFamily: "Kdam Thmor Pro, sans-serif" }}
          initial={{ x: "-100%", opacity: 0 }} // Inicia desde la izquierda y opaco
          animate={controls} // Usa los controles de animación
          transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }} // Suaviza la animación
        >
          CheckFor
        </motion.h2>
        <motion.p
          className="ml-3 text-lg text-left transform -translate-x-0"
          initial={{ x: "-100%", opacity: 0 }} // Inicia desde la izquierda y opaco
          animate={controls} // Usa los controles de animación
          transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }} // Suaviza la animación
        >
          Una plataforma diseñada para ayudar a líderes de 3 sectores a mantener
          la seguridad en el entorno laboral. Facilita la evaluación de riesgos
          y asegura que los equipos, procesos, personal y maquinaria estén
          preparados para cumplir con los más altos estándares de seguridad,
          permitiendo una gestión eficiente y proactiva de las normativas. Con
          herramientas intuitivas y análisis en tiempo real, estar preparado
          ante cualquier auditoría nunca ha sido tan simple.
        </motion.p>
        {/* Cards */}
        <motion.div
          id="example-section" // Identificador único para el Example
          initial={{ x: "100%", opacity: 0 }} // Inicia desde la derecha y opaco
          animate={exampleControls} // Usa los controles de animación del Example
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }} // Suaviza la animación
        >
          <Example />
        </motion.div>
      </div>
    </div>
  );
};
