import { motion } from 'framer-motion';
import IP1 from '../public/img/IP1.jpg';
import { FaArrowUp } from "react-icons/fa";

export const AboutUs = () => {
    return (
        <section className="py-16 text-white bg-gradient-to-b from-black to-gray-900">
          <div className="flex flex-col items-center max-w-6xl px-4 mx-auto md:flex-row">
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: -50 }} // Cambiado a y para animar desde arriba
              whileInView={{ opacity: 1, y: 0 }} // Cambiado a y para animar al centro
              transition={{ duration: 1.0 }}
              className="p-4 mb-8 mr-5 rounded-lg shadow-lg bg-gray-950 md:w-1/2 md:mb-0 group"
            >
              <img
                src={ IP1 }
                alt="About Us"
                className="object-cover w-full rounded-t-lg h-[260px] z-10 transform-transition duration-500 group-hover:scale-[1.01]"
              />
              <div className="p-4">
                <h3 className="mt-2 mb-2 text-xl font-semibold">Nuestra Misión</h3>
                <p>
                  Proporcionar soluciones innovadoras y de alta calidad para
                  mejorar las posibilidades de nuestros clientes.
                </p>
              </div>
            </motion.div>
    
            {/* Izq */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
              className="mb-8 ml-5 md:w-1/2 md:mb-0"
            >
              <h2 className="mb-4 text-3xl font-bold">SOBRE NOSOTROS</h2>
              <hr className="w-1/2 mb-4 border-t-2 border-white rounded-lg"></hr>
              <p className="text-lg">
                Somos un pequeño equipo de estudiantes de la Tecnicatura Superior en Desarrollo de Software Multiplataforma del Instituto Politécnico de Formosa, encargados del proyecto CheckFor. Especializados en brindar soluciones a problemas varios en medida de nuestras habilidades. Deseamos que nuestra plataforma sea útil y eficaz para nuestros usuarios.
              </p>
              
            </motion.div>
          </div>
        </section>
    );
};

