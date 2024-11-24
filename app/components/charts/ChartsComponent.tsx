import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, LineElement, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement, LineElement, PointElement);

interface ChartProps {
  type: 'bar' | 'pie' | 'line'; 
  data: any; 
  options: any;
}

const ChartComponent: React.FC<ChartProps> = ({ type, data, options }) => {
  return (
    <div className="chart-container">
      {type === 'bar' ? (
        <Bar data={data} options={options} />
      ) : type === 'pie' ? (
        <Pie data={data} options={options} />
      ) : (
        <Line data={data} options={options} />
      )}
    </div>
  );
};

export default ChartComponent;
