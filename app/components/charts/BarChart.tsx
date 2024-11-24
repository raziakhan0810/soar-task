import React from 'react';
import ChartComponent from './ChartsComponent';
import { ChartData } from 'chart.js';

const BarChart = () => {
  const data: ChartData<'bar'> = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'], 
    datasets: [
      {
        label: 'Withdraw',
        data: [480, 350, 320, 480, 150, 390, 400],  
        backgroundColor:'#232323',
        borderRadius: 10,
        borderWidth: 1,
        barThickness: 15, 
      },
      {
        label: 'Deposit',
        data: [230, 120, 280, 380, 220, 220, 320], 
        backgroundColor:  '#396AFF',  
        borderRadius: 10,
        borderWidth: 1,
        barThickness: 15, 
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', 
        align: 'end',    
        labels: {
          usePointStyle: true, 
        },
      },
      
      datalabels: {
        display: false, 
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          autoSkip: false,
          maxRotation: 0,  
          padding: 10,   
        },
        grid: {
          display: false, 
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 100, 
          max: 500,    
        },
        grid: {
          borderColor: 'rgba(0, 0, 0, 0.1)', 
          borderWidth: 1, 
        },
      },
    },
    elements: {
      bar: {
        borderWidth: 2,
        borderColor: '#ffffff',
      },
    },
  };

  return (
    <div className="chart-wrapper">
      <ChartComponent type="bar" data={data} options={options} />
    </div>
  );
};

export default BarChart;
