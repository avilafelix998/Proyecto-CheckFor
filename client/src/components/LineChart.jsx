import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const LineChart = ({ data, categories, title }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const options = {
      title: {
        text: title,
        left: 'center',
        textStyle: { color: '#fff' },
      },
      tooltip: {
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        data: categories,
        axisLine: { lineStyle: { color: '#fff' } },
        axisLabel: { color: '#fff' },
      },
      yAxis: {
        type: 'value',
        axisLine: { lineStyle: { color: '#fff' } },
        axisLabel: { color: '#fff' },
      },
      series: [
        {
          data,
          type: 'line',
          smooth: true, // Hace que la línea sea curva y suave
          lineStyle: { color: '#f97316' },
          itemStyle: { color: '#f97316' },
        },
      ],
    };

    chart.setOption(options);

    return () => chart.dispose(); // Limpieza al desmontar
  }, [data, categories, title]);

  return <div ref={chartRef} style={{ width: '100%', height: '300px' }}></div>;
};
