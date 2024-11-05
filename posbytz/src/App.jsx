// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from "./route"; 
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            exact={route.exact}
            element={<route.component />} 
          />
        ))}
      </Routes>
    </Router>
  );
};

export default App;
