import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './component/Main';
import RequestDemo from './component/RequestDemo';
import Navigation from './component/Navbar';
import Footer from './component/Footer';

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

