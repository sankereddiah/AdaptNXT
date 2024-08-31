// src/components/PortionOfSalesPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { CiCircleInfo } from "react-icons/ci";
import './PortionOfSalesPieChart.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const PortionOfSalesPieChart = () => {
  const data = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [55.8, 44.2],
        backgroundColor: ['coral', 'turquoise'],
        hoverBackgroundColor: ['#FF6347', '#40E0D0'],
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Display legend at the bottom
        labels: {
          boxWidth: 12, // Adjust width of legend color box
          padding: 20, // Space between legend items
        },
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%'; // Format tooltip labels
          }
        }
      }
    }
  };
  return (
    <div className="portion-of-sales">
      <h3 className='heading'>Portion of Sales <CiCircleInfo /></h3>
      <div className="pie-chart-container">
        <Pie data={data} options={options} />
        <div className="pie-chart-info">
          <p id='num'>2659</p>
        </div>
      </div>
    </div>
  );
};

export default PortionOfSalesPieChart;
