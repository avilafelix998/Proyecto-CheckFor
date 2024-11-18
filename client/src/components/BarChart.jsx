import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export const BarChart = ({ data, categories, title }) => {
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
        axisPointer: { type: 'shadow' },
      },
      xAxis: {
        type: 'category',
        data: categories,
        axisLabel: { color: '#fff' },
      },
      yAxis: {
        type: 'value',
        axisLabel: { color: '#fff' },
      },
      series: [
        {
          data,
          type: 'bar',
          itemStyle: { color: '#f97316' },
        },
      ],
    };

    chart.setOption(options);

    return () => chart.dispose(); // Limpieza al desmontar
  }, [data, categories, title]);

  return <div ref={chartRef} style={{ width: '100%', height: '300px' }}></div>;
};
