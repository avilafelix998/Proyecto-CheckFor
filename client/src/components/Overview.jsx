import { motion } from "framer-motion";
import { SectorCard } from "./SectorCard";

export const Overview = () => {
    return (
        <motion.div
            initial={{ x: "-100%", opacity: 0 }}  // Estado inicial fuera de vista
            whileInView={{ x: 0, opacity: 1 }}  // Cuando entra en vista
            exit={{ x: "-100%", opacity: 0 }}   // Cuando sale de vista
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className="mb-4 ml-3 text-4xl font-bold text-left"
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            >
                VISIÓN GENERAL
                <hr className="mt-3 border-t-2 border-gray-300 rounded-lg w-80"></hr>
            </motion.h1>
            <motion.h2
                className="mb-4 ml-3 text-3xl text-left text-orange-600"
                style={{ fontFamily: "Kdam Thmor Pro, sans-serif" }}
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
            >
                CheckFor
            </motion.h2>
            <motion.p
                className="ml-3 text-lg text-left transform -translate-x-0"
                initial={{ x: "-100%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.05, ease: "easeInOut", delay: 0.5 }}
            >
                Una plataforma diseñada para ayudar a líderes de 3 sectores a mantener
                la seguridad en el entorno laboral. Facilita la evaluación de riesgos
                y asegura que los equipos, procesos, personal y maquinaria estén
                preparados para cumplir con los más altos estándares de seguridad,
                permitiendo una gestión eficiente y proactiva de las normativas. Con
                herramientas intuitivas y análisis en tiempo real, estar preparado
                ante cualquier auditoría nunca ha sido tan simple.
            </motion.p>
            <motion.div 
                initial={{ x: "100%", opacity: 0 }} // Estado inicial
                whileInView={{ x: 0, opacity: 1 }} // Cuando entra en vista
                exit={{ x: "100%", opacity: 0 }} // Cuando sale de vista
                transition={{ duration: 1.05, ease: "easeInOut", delay: 0.7 }} // Duración de la transición
                >
                <SectorCard />
            </motion.div>
        </motion.div>
    );
};