import React, {useState,useEffect} from 'react';
import './App.scss';
import axios from 'axios';
import d3 from 'd3';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer'
import LoginPage from './LoginPage/LoginPage';
import AboutPage from './AboutPage/AboutPage';
import AxiosPie from './AxiosPie/AxiosPie';
import PieChart from './PieChart/PieChart';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  return (
    <Router>
      <Menu />
      <Hero/>
      <div className="mainContainer">   
        <Switch>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>         
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
        </div>
      
      <Footer/>
    </Router>
  );
}

export default App;