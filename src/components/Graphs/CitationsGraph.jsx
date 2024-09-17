import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const CitationsGraph = ({ data }) => {
  const chartData = {
    labels: data.years,
    datasets: [
      {
        label: 'Citations',
        data: data.citations,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures the chart resizes properly
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Citations Over Time',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default CitationsGraph;
