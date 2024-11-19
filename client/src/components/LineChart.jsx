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
      grid: {
        left: '5%',
        right: '5%',
        top: '10%',
        bottom: '10%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: categories,
        boundaryGap: false,
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
          smooth: true,
          lineStyle: { color: '#f97316' },
          itemStyle: { color: '#f97316' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#f97316' },
              { offset: 1, color: 'rgba(249, 115, 22, 0)' },
            ]),
          },
        },
      ],
    };

    chart.setOption(options);

    return () => chart.dispose(); // Limpieza al desmontar
  }, [data, categories, title]);

  return <div ref={chartRef} style={{ width: '100%', height: '300px' }}></div>;
};
