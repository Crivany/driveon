import React from 'react';
import './Dashboard2.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

function Dashboard2() {
  return (
    <>
        <Navbar />
        <Home />
    </>
  );
}

export default Dashboard2;
