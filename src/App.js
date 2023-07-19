import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './component/mainPage'
import RequestDemo from './component/RequestDemo';
import Navigation from './component/navigation';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/demo' element={<RequestDemo />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

