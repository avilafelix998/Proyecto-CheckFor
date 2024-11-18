import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const DonutChart = ({ data, title }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const colors = {
      Bajo: '#EF4444',
      Medio: '#FBBF24',
      Alto: '#10B981',
      Cumplimiento: '#10B981',
      Incumplimiento: '#EF4444',
    };

    const options = {
      title: {
        text: title,
        left: 'center',
        textStyle: { color: '#fff' },
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        bottom: '0%',
        textStyle: { color: '#fff' },
      },
      color: data.map((item) => colors[item.name] || '#888'), // Asigna colores según el nombre
      series: [
        {
          name: title,
          type: 'pie',
          radius: ['0%', '70%'],
          roseType: 'radius',
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 0,
            borderColor: '#000',
            borderWidth: 2,
          },
          label: { show: false },
          emphasis: {
            label: { show: true, fontSize: '12', fontWeight: 'bold' },
          },
          data,
        },
      ],
    };

    chart.setOption(options);

    return () => chart.dispose(); // Limpieza al desmontar
  }, [data, title]);

  return <div ref={chartRef} style={{ width: '100%', height: '320px' }}></div>;
};
