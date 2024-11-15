import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, rootMargin: "-50px" }); 

  return (
    <div className="flex flex-col items-center w-full px-4 py-10 bg-black text-neutral-50">
      <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.05 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl text-center">
            <h2 className="text-lg font-semibold text-orange-600">Gestiona las diferentes areas</h2>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">
              ¿Listo para evaluar la seguridad de tu entorno?
            </h1>
            <a href="">
              <button className="px-6 py-3 mt-6 text-lg font-semibold duration-300 bg-orange-600 rounded-md text-gray-950 hover:bg-gray-400">
                ¡Comienza el test ahora!
              </button>
            </a>
      </motion.div>
    </div>
  );
};


