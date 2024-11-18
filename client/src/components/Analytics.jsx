import React from 'react';
import { DonutChart } from './DonutChart';

export const Analytics = () => {
  const subcategoryRiskData = [
    { value: 20, name: 'Bajo' },
    { value: 40, name: 'Medio' },
    { value: 40, name: 'Alto' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-white">Análisis Detallado</h1>
      <DonutChart data={subcategoryRiskData} title="Riesgo por Subcategorías" />
    </div>
  );
};

