import React from 'react';
import { LineChart } from './LineChart';
import { MetricCard } from './MetricCard';
import { FaCheckCircle, FaChartLine, FaFireAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const History = () => {
  const historicalData = [
    { date: '2024-01', compliance: 70 },
    { date: '2024-02', compliance: 75 },
    { date: '2024-03', compliance: 80 },
    { date: '2024-04', compliance: 85 },
  ];

  const pageAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="space-y-8"
        variants={pageAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="space-y-2 text-start">
          <h1 className="text-3xl font-bold text-white">
            Bienvenido a tu Historial
          </h1>
          <hr className="w-1/3 mt-2 border-t-4 border-orange-500" />
          <p className="text-gray-400">
            En esta sección encontrarás un registro completo de los datos recopilados en tus evaluaciones de seguridad.
            Explora la evolución de los riesgos, el progreso en el cumplimiento y las acciones implementadas a lo largo del tiempo.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {/* Indicadores */}
          <MetricCard
            title="Riesgos Reducidos"
            value="12"
            color="text-green-400"
            Icon={FaCheckCircle}
          />
          <MetricCard
            title="Cumplimiento Promedio"
            value="82%"
            color="text-blue-400"
            Icon={FaChartLine}
          />
          <MetricCard
            title="Riesgo Crítico Resuelto"
            value="Incendios"
            color="text-red-400"
            Icon={FaFireAlt}
          />
        </div>

        {/* Resumen de Tendencias */}
        <div className="p-4 rounded-lg bg-gray-800/20">
          <h3 className="mb-2 text-xl font-bold text-white">Resumen de Tendencias</h3>
          <p className="text-gray-400">
            Durante el último trimestre, se redujeron los riesgos críticos en un
            <span className="font-bold text-green-400"> 25%</span>, mientras que el cumplimiento aumentó en un
            <span className="font-bold text-blue-400"> 15%</span>.
          </p>
        </div>

        {/* Comparativa */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 text-center rounded-lg bg-gray-800/20">
            <h3 className="text-lg font-bold text-white">Septiembre 2024</h3>
            <p className="text-gray-400">Riesgos: <span className="font-bold text-yellow-400">8</span></p>
            <p className="text-gray-400">Cumplimiento: <span className="font-bold text-green-400">80%</span></p>
          </div>
          <div className="p-4 text-center rounded-lg bg-gray-800/20">
            <h3 className="text-lg font-bold text-white">Octubre 2024</h3>
            <p className="text-gray-400">Riesgos: <span className="font-bold text-yellow-400">4</span></p>
            <p className="text-gray-400">Cumplimiento: <span className="font-bold text-green-400">85%</span></p>
          </div>
        </div>

        {/* Línea de Tiempo */}
        <div className="p-4 rounded-lg bg-gray-800/20">
          <h3 className="mb-2 text-xl font-bold text-white">Eventos Clave</h3>
          <ul className="space-y-2">
            <li className="text-gray-400">
              <span className="font-bold text-green-400">Octubre 2024:</span>
              Inspección interna completada, 85% de cumplimiento.
            </li>
            <li className="text-gray-400">
              <span className="font-bold text-red-400">Septiembre 2024:</span>
              Identificados 3 riesgos críticos en maquinaria pesada.
            </li>
            <li className="text-gray-400">
              <span className="font-bold text-yellow-400">Agosto 2024:</span>
              Implementación de un plan de mejora de seguridad.
            </li>
          </ul>
        </div>

        <LineChart
          data={historicalData.map(item => item.compliance)}
          categories={historicalData.map(item => item.date)}
          title="Evolución del Nivel de Cumplimiento"
        />
      </motion.div>
    </AnimatePresence>
  );
};
