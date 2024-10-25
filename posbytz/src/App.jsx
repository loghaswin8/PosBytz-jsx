// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from "./route"; // Import the routes array
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            element={<route.component />} // Dynamically render components
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
