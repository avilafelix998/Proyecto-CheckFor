import React from 'react';
import { LineChart } from './LineChart';

export const History = () => {
  const historicalData = [
    { date: '2024-01', compliance: 70 },
    { date: '2024-02', compliance: 75 },
    { date: '2024-03', compliance: 80 },
    { date: '2024-04', compliance: 85 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold">Historial</h1>
      <LineChart
        data={historicalData.map(item => item.compliance)}
        categories={historicalData.map(item => item.date)}
        title="Evolución del Nivel de Cumplimiento"
      />
    </div>
  );
};
