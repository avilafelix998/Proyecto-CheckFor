import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { BackgroundCellAnimation } from '../components/BgCell';
import { motion } from 'framer-motion';

//Imágenes
import Bg4 from '../public/img/Bg4.png';
import Bg5 from '../public/img/Bg10.png';
import Bg6 from '../public/img/Bg11.png';

export const Sector = () => {
    return (
      <div className="bg-gradient-to-b from-black via-zinc-950 to-gray-950">
        <Navbar />
        <BackgroundCellAnimation text="SELECCIONE UN SECTOR" />

        <div className="relative z-10 flex flex-col items-center justify-center overflow-hidden text-white mt-9">
          
        <SectorSection
          title="Sector de Construcción"
          description="Este sector se enfoca en las medidas de seguridad, y normativas específicas que deben cumplirse en el sitio de construcción. Asegúrate de evaluar los riesgos para proteger a tus trabajadores."
          bgColor="bg-orange-400"
          hoverBgColor="bg-orange-500"
          hoverBtn="bg-orange-400"
          imgSrc={Bg4}
          linkTo="/categories"
          delay={0}
        />

        <SectorSection
          title="Sector Industrial"
          description="Este sector se enfoca en las prácticas de seguridad y salud en entornos industriales. Responde a las preguntas para asegurar un ambiente de trabajo seguro y cumplir con las regulaciones."
          bgColor="bg-gray-400"
          hoverBgColor="bg-gray-500"
          hoverBtn="bg-gray-400"
          imgSrc={Bg5}
          //linkTo="/"
          delay={0.2}
        />

        <SectorSection
          title="Sector Institucional"
          description="Este sector se enfoca en la seguridad y salud en instituciones educativas. Asegúrate de evaluar el bienestar de estudiantes y personal educativo."
          bgColor="bg-green-400"
          hoverBgColor="bg-green-500"
          hoverBtn="bg-green-400"
          imgSrc={Bg6}
          //linkTo="/"
          delay={0.4}
        />
      </div>
    </div>
  );
};

const SectorSection = ({ title, description, bgColor, hoverBgColor, hoverBtn, imgSrc, linkTo, delay }) => {
  return (
    <motion.section
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut', delay }}
      className={`relative z-30 flex flex-col justify-start w-5/6 h-64 p-2 mb-8 overflow-hidden ${bgColor} rounded-bl-[100px] rounded-tr-[100px] group`}
    >
      <div className={`absolute inset-0 ${hoverBgColor} translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300`} />
      <h1 className="relative mt-4 ml-4 text-2xl text-black duration-300 md:text-3xl group-hover:text-white"
        style={{ fontFamily: "Kdam Thmor Pro, sans-serif" }}
      >
        {title}
      </h1>
      <p className="relative hidden max-w-lg mt-3 ml-4 text-black duration-300 md:block group-hover:text-white">
        {description}
      </p>
      <Link to={linkTo}>
        <button
          className={`relative w-28 p-2 rounded-[50px] mt-4 ml-12 font-semibold border-2 border-black text-black duration-300 hover:bg-opacity-75 group-hover:border-white group-hover:text-white hover:${hoverBtn}`} 
        >
          Ingresar
        </button>
      </Link>
      <img src={imgSrc} className="absolute object-cover duration-300 right-12 bottom-1 brightness-0 invert w-28 h-28 md:w-48 md:h-48 group-hover:rotate-12" />
    </motion.section>
  );
};