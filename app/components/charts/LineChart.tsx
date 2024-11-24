import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions, ChartData, Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const gradientBackgroundPlugin = {
  id: 'gradientBackground',
  beforeDraw: (chart: any) => {
    if (chart.config.type !== 'line') return; 
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;
    if (chartArea) {
      const { bottom, top, left, right } = chartArea;
      const dataset = chart.data.datasets[0];
      const points = dataset.data;
      const gradient = ctx.createLinearGradient(0, bottom, 0, top);
      gradient.addColorStop(0, 'rgba(45, 96, 255, 0.25)'); 
      gradient.addColorStop(1, 'rgba(45, 96, 255, 0)'); 
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(left, bottom); 
      const xScale = chart.scales['x'];
      const yScale = chart.scales['y'];
      if (xScale && yScale) {
        for (let i = 0; i < points.length; i++) {
          const point = points[i];
          if (point !== null && typeof point === 'number') {
            const x = xScale.getPixelForValue(i); 
            const y = yScale.getPixelForValue(point); 
            ctx.lineTo(x, y); 
          }
        }
        ctx.lineTo(right, bottom); 
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill(); 
      }
      ctx.restore();
    }
  },
};

const LineChart = () => {
  const data: ChartData<'line'> = {
    labels: ['July', 'August', 'September', 'October', 'November', 'December', 'January'],
    datasets: [
      {
        label: 'Sales Over Time',
        data: [0, 310, 220, 490, 420, 800, 200],
        fill: false, 
        borderColor: '#1814F3', 
        borderWidth: 2, 
        tension: 0.4, 
        pointRadius: 0, 
        pointHoverRadius: 0, 
        pointHitRadius: 0,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      datalabels: {
        display: false, 
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: true, 
          lineWidth: 1,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 200,
        },
        grid: {
          display: true, 
          color: 'rgba(0, 0, 0, 0.1)', 
          lineWidth: 1, 
        },
      },
    },
  };

  Chart.register(gradientBackgroundPlugin);

  return (
    <div className="chart-wrapper" style={{ position: 'relative' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
