import React from 'react';
import ReactDOM from 'react-dom';
import Loginpage from './components/loginpage';
import DashboardPage from './components/dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Install react-router-dom

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
