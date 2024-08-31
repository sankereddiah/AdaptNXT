// src/App.js
import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
