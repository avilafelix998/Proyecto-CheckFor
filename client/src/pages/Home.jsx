import React, { useEffect, useState } from 'react';
import { Slider } from '../components/Slider';
import Banner from '../public/img/Banner1.jpg';
import { motion } from 'framer-motion';

const messages = [
    "La seguridad es responsabilidad de todos. ¡Construyamos un entorno seguro!",
    "Realiza revisiones periódicas de equipo y maquinarias",
    "Asegúrate que todos los trabajadores usen sus EPP",
    "El 70% de los accidentes laborales se pueden prevenir"
];

export const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 10000); // Cambiar texto cada 10 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="overflow-hidden bg-slate-300">
            <div className="relative w-full h-64">
                <img 
                    src={Banner} 
                    alt="Banner"
                    className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-md" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 
                        className="text-white text-7xl" 
                        style={{ fontFamily: 'Kdam Thmor Pro' }} 
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
                        width: '50%', 
                        overflow: 'hidden', 
                        userSelect: 'none',
                        maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0))'
                    }}
                >
                    <motion.div
                        key={currentIndex}
                        className="whitespace-nowrap"
                        initial={{ x: '70%', opacity: 1 }} // Desde dónde inicia
                        animate={{ x: '-90%', opacity: 1 }} // Mueve hacia la izquierda
                        exit={{ x: '50%', opacity: 1 }} // Hasta dónde llega
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
        </div>
    );
};