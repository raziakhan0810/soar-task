import React from 'react';
import ChartComponent from './ChartsComponent';
import { ChartData, ChartOptions, Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; 

Chart.register(ChartDataLabels);

const PieChart = () => {
  const data: ChartData<'pie'> = {
    labels: ['Bill Expense', 'Others', 'Investment', 'Entertainment'],
    datasets: [
      {
        offset: 10, 
        label: 'Categories Distribution',
        data: [15, 35, 20, 30], 
        backgroundColor: ['#FC7900', '#000', '#396AFF', '#343C6A'], 
        hoverOffset: 4, 
      },
    ],
  };
  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
      datalabels: {
        display: true, 
        color: '#ffffff', 
        font: {
          size: 10, 
          weight: 'bold', 
        },
        formatter: (value: any, context: any) => {
          const total = context.chart.data.datasets[context.datasetIndex].data.reduce((acc: number, curr: number) => acc + curr, 0);
          const percentage = ((value / total) * 100).toFixed(1); 
          return `${percentage}%\n${context.chart.data.labels[context.dataIndex]}`;
        },
        anchor: 'center', 
        align: 'center', 
        padding: 5, 
        offset: 10, 
      },
    },
    rotation: -0.2 * Math.PI,
    cutout: '0',
  };

  return (
    <div className="chart-wrapper">
      <ChartComponent type="pie" data={data} options={options as ChartOptions<'pie'>} />
    </div>
  );
};

export default PieChart;
