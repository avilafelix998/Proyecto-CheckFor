import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { DonutChart } from './DonutChart';
import { BarChart } from './BarChart';
import { MetricCard } from './MetricCard';

import { FaCheckCircle, FaExclamationTriangle, FaFireAlt } from "react-icons/fa";

export const DashboardContent = () => {
  const riskData = [
    { value: 25, name: 'Bajo' },
    { value: 35, name: 'Medio' },
    { value: 40, name: 'Alto' },
  ];
  const complianceData = [
    { value: 60, name: 'Cumplimiento' },
    { value: 40, name: 'Incumplimiento' },
  ];
  const topCategories = [80, 60, 70, 20, 40];
  const categories = [
    'Incendios',
    'Salud y bienestar',
    'Riesgo eléctrico',
    'Control de maquinaria',
    'Evacuación',
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="space-y-8"
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* Título y Descripción */}
        <motion.div className="space-y-2 text-start" variants={fadeInVariants}>
          <h1 className="text-3xl font-bold text-white">
            Bienvenido a tu Dashboard
          </h1>
          <hr className="w-1/3 mt-2 border-t-4 border-orange-500" />
          <p className="text-gray-400">
            Aquí encontrarás un análisis detallado de los riesgos de tu entorno y el cumplimiento de los estándares de seguridad. Usa esta información para tomar decisiones informadas y mejorar las condiciones de trabajo.
          </p>
        </motion.div>

        {/* Metric Cards */}
        <motion.div
          className="grid grid-cols-3 gap-4"
          variants={fadeInVariants}
        >
          <MetricCard
            title="Cumplimiento"
            value="85%"
            color="text-green-400"
            Icon={FaCheckCircle}
          />
          <MetricCard
            title="Riesgos Detectados"
            value="12"
            color="text-yellow-400"
            Icon={FaExclamationTriangle}
          />
          <MetricCard
            title="Riesgo Crítico"
            value="Falta de extintores"
            color="text-red-400"
            Icon={FaFireAlt}
          />
        </motion.div>

        {/* Donut Charts */}
        <motion.div className="flex gap-6" variants={fadeInVariants}>
          <div className="w-1/2 p-4 rounded-lg bg-gray-800/20">
            <DonutChart
              data={complianceData}
              title="Cumplimiento Total del Test"
            />
          </div>
          <div className="w-1/2 p-4 rounded-lg bg-gray-800/20">
            <DonutChart
              data={riskData}
              title="Distribución del Nivel de Riesgo"
            />
          </div>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          className="p-4 rounded-lg bg-gray-800/20"
          variants={fadeInVariants}
        >
          <BarChart
            data={topCategories}
            categories={categories}
            title="Top 5 Categorías con Mayor Riesgo"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
