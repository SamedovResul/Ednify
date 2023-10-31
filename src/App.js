import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import RequestDemo from './pages/RequestDemo/RequestDemo';
import Navigation from './layout/Navbar';
import Footer from './layout/Footer';

function App() {
  const [data, setdata] = useState({
    features:[],
    companyName:'',
    studentCount:'',
    name:'',
    surName:'',
    email:'',
    phone:'',
    contactTime:[]
  })

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/demo' element={<RequestDemo setdata={setdata} data={data} />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

