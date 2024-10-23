import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { BackgroundCellAnimation } from '../components/BgCell';
import { motion } from 'framer-motion';

// Iconos
import { FaHelmetSafety, FaPersonFalling } from "react-icons/fa6";
import { GiBulldozer, GiElectric } from "react-icons/gi";
import { IoIosConstruct } from "react-icons/io";
import { BsFire } from "react-icons/bs";
import { FaBiohazard, FaExclamationTriangle } from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

// Imágenes
import Bg1 from "../public/img/Bg1.png";
import Bg2 from "../public/img/Bg2.png";
import Bg3 from "../public/img/Bg3.png";
import Bg4 from "../public/img/Bg4.png";
import Bg5 from "../public/img/Bg5.png";
import Bg6 from "../public/img/Bg6.png";
import Bg7 from "../public/img/Bg7.png";
import Bg8 from "../public/img/Bg8.png";
import Bg9 from "../public/img/Bg9.png";


export const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const response = await fetch('http://localhost:3000/categories', {
        method: 'GET',
      });
      const categories = await response.json();
  
      console.log(categories);
      setCategories(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const categoryIcons = [
    <FaHelmetSafety />,
    <FaPersonFalling />,
    <GiBulldozer className='text-3xl' />,
    <IoIosConstruct />,
    <GiElectric />,
    <BsFire />,
    <FaBiohazard />,
    <MdHealthAndSafety />,
    <FaExclamationTriangle />,
  ];

  const backgroundImages = [
    Bg1,
    Bg2,
    Bg3,
    Bg4,
    Bg5,
    Bg6,
    Bg7,
    Bg8,
    Bg9,
  ];

  const categoryDescriptions = [
    "Evalúa el uso de EPP, la capacitación en seguridad y los protocolos de emergencia. Asegura el cumplimiento de normativas, condiciones de trabajo y bienestar de los empleados.",
    "Evalúa las medidas de protección contra caídas, el uso de arneses y la correcta instalación de andamios. Asegura la señalización de zonas de riesgo, la capacitación en rescate y el cumplimiento de normas para garantizar la seguridad en alturas.",
    "Evalúa la certificación y capacitación de operadores, Asegurando un manejo seguro de la maquinaria. Verifica el mantenimiento, la señalización, el uso de EPP y la gestión de fallos.",
    "Evalúa el orden y limpieza del área de trabajo, manteniendo un entorno seguro. Asegura la señalización adecuada, iluminación, accesos de emergencia, condiciones del suelo, condiciones climáticas y calidad del aire.",
    "Evalúa las instalaciones y equipos eléctricos. Verifica la protección contra descargas eléctricas, el manejo de cableado y conexiones, así como la capacitación del personal en protocolos de seguridad.",
    "Evalúa la disponibilidad y estado de los equipos de extinción, así como la efectividad de los sistemas de alarma. Asegura el almacenamiento de materiales inflamables, la capacitación en procedimientos de emergencia y planes de evacuación.",
    "Evalúa la identificación y etiquetado de sustancias peligrosas, asegurando el almacenamiento o eliminación. Verifica el uso de EPP, la capacitación en manipulación segura y los protocolos de emergencias y derrames.",
    "Evalúa el acceso a agua, áreas de descanso e instalaciones sanitarias. Verifica el control de ruido y vibraciones, las condiciones climáticas, y la ergonomía. Asegura el apoyo a la salud mental y la disponibilidad de servicios médicos y primeros auxilios.",
    "Evalúa la accesibilidad de planes de emergencia y la capacitación del personal. Realiza simulacros y asegura la señalización de rutas de evacuación e inspecciona el equipo de emergencia."
  ];

  return (
    <div className="justify-between p-0 bg-gradient-to-b from-black via-zinc-950 to-gray-950">
      
      <Navbar />

      <BackgroundCellAnimation text="SELECCIONE EL ÁREA A EVALUAR" />

      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <motion.a 
            href={`/test?${category.id_categoria}`} 
            key={category.id_categoria} 
            className="flex w-full p-4 sm:w-1/2 md:w-1/3"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: Math.floor(index / 3) * 0.2 + 0.5 }}
          >
            {/* Div contenedor */}
            <motion.div 
              className="relative flex items-center justify-between w-full p-4 -mt-2 bg-gray-200 rounded-md group" //Group = hover en conjunto
              // Hover con gradiente (FF7811-FF8F00-FF9B33-FFA024-FFA52F)
              whileHover={{ 
                //Ajustar el 25% a gusto
                background: `linear-gradient(to right, rgba(240, 240, 240, 0.9) 0%, rgba(240, 240, 240, 0.9) 25%, #FF9B33 100%)`,
                backgroundSize: '200% 100%',
                backgroundPosition: '100% 0%',
                scale: 1.05 
              }}
              transition={{ 
                duration: 0.5,
                backgroundSize: { duration: 0.5 }
              }}
            >

              {/* Div envolvente */}
              <div className="relative z-10 flex items-center justify-center w-[380px] p-[5px] overflow-hidden bg-gray-300 rounded-md">

                {/* Div medio */}
                <div className="w-24 h-[130%] overflow-hidden absolute bg-orange-600 transition-all duration-500 group-hover:rotate-180"/>

                {/* Div categoría */}
                <div className="relative z-30 w-[380px] h-[254px] bg-white flex flex-col justify-center items-center text-center overflow-hidden rounded-md text-orange-600 font-bold p-4 shadow-lg">

                  <span className='absolute text-2xl text-black top-4 left-2'>{categoryIcons[index]}</span>
                  <h2 
                    className="text-sm"
                    style={{ fontFamily: "Kdam Thmor Pro, sans-serif" }}
                    >{category.categoria}
                    
                  </h2>
                  <img src={backgroundImages[index]} alt={`Background ${index}`} className="absolute object-cover w-16 h-16 transition-transform duration-300 bottom-4 opacity-30 group-hover:rotate-12" />
                </div>
              </div>

              {/* Div de descripción */}
              <div 
                className="relative z-10 flex-grow w-full ml-4 text-sm duration-300 group-hover:text-white"
                style={{ fontFamily: "Roboto, sans-serif" }}
              >
                <p> 
                  {categoryDescriptions[index]}
                </p>
              </div>
            </motion.div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};
