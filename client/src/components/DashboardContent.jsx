import React from 'react';
import { DonutChart } from './DonutChart';
import { BarChart } from './BarChart';

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
  const topCategories = [80, 60, 40, 20, 10];
  const categories = [
    'Uso de maquinaria',
    'Salud y bienestar',
    'Riesgo eléctrico',
    'Riesgo químico',
    'Evacuación',
  ];

  const MetricCard = ({ title, value, color, Icon }) => {
    return (
      <div className="relative p-6 text-center rounded-lg bg-gray-800/20">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className={`text-2xl ${color}`}>{value}</p>
        <Icon
          className="absolute transform text-gray-700/20 bottom-4 right-4 rotate-12"
          size={60}
        />
      </div>
    );
  };

  return (
    <div className="space-y-8">
  {/* Título y Descripción */}
      <div className="space-y-2 text-start">
        <h1 className="text-3xl font-bold text-white">
          Bienvenido a tu Dashboard
        </h1>
        <hr className="w-1/3 mt-3 rounded-lg border-zinc-800 border-t-1"></hr>
        <p className="text-gray-400">
          Aquí encontrarás un análisis detallado de los riesgos de tu entorno y el cumplimiento de los estándares de seguridad. Usa esta información para tomar decisiones informadas y mejorar las condiciones de trabajo.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
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
    </div>

      {/* Donut Charts */}
      <div className="flex gap-6">
        <div className="w-1/2 p-4 rounded-lg bg-gray-800/20">
          <DonutChart data={complianceData} title="Cumplimiento Total del Test" />
        </div>
        <div className="w-1/2 p-4 rounded-lg bg-gray-800/20">
          <DonutChart data={riskData} title="Distribución del Nivel de Riesgo" />
        </div>
      </div>

      {/* Bar Chart */}
      <div className="p-4 rounded-lg bg-gray-800/20">
        <BarChart data={topCategories} categories={categories} title="Top 5 Categorías con Mayor Riesgo" />
      </div>
    </div>
  );
};
