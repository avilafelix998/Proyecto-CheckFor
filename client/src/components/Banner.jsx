import { motion } from "framer-motion";
import BannerImg from "../public/img/Banner1.jpg";
import LogoBanner from "../public/img/Logo3.png"

export const Banner = ()=> {
    return (
        <div className="relative w-full h-64">
            <img src={BannerImg} alt="BannerImg" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-md" />
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.img
                    src={LogoBanner} // Ruta de imagen
                    alt="Logo"
                    className="w-[30em] h-auto" // Ajusta el tamaño
                    initial={{ opacity: 0, scale: 0.8 }} // Inicialmente invisible y más pequeño
                    animate={{ opacity: 1, scale: 1 }} // Al final, completamente visible y en tamaño normal
                    transition={{ duration: 1.5 }} // Duración de la animación
                />
            </div>
        </div>
    );
};