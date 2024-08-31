// src/components/SalesVsOrdersGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { CiCircleInfo } from "react-icons/ci";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './SalesVsOrdersGraph.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SalesVsOrdersGraph = () => {
  const data = {
    labels: ['6/30/2024-7/6/2024', '7/13/2024-7/13/2024', '7/21/2024-7/27/2024'],
    datasets: [
      {
        label: 'Orders',
        data: [1600, 800, 800],
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.5)',
        tension: 0.3
      },
      {
        label: 'Sales',
        data: [1400,800, 450],
        borderColor: 'teal',
        backgroundColor: 'rgba(0, 128, 128, 0.5)',
        tension: 0.3
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales vs Orders',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Quantity',
        },
        ticks: {
          callback: function(value) {
            return value / 1000 + 'k'; // Format y-axis values to display in 'k'
          },
          stepSize: 400, // Set step size to 400
        },
        suggestedMin: 0, // Ensure y-axis starts at 0
      }
    }
  };

  return (
    <div className="sales-vs-orders">
      <div className="stats-box">
        <p>Orders: 4</p>
        <p>Sales: 1404</p>
        <p>Avg Order Value: $351.00</p>
      </div>
      <div className="graph">
        <h3 className='heading'>Sales vs Orders <CiCircleInfo /></h3>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default SalesVsOrdersGraph;
