// src/components/Dashboard.js
import React from 'react';
import SalesVsOrdersGraph from './SalesVsOrdersGraph';
import PortionOfSalesPieChart from './PortionOfSalesPieChart';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sales-orders">
        <SalesVsOrdersGraph />
      </div>
      <div className="portion-sales">
        <PortionOfSalesPieChart />
      </div>
    </div>
  );
};

export default Dashboard;
