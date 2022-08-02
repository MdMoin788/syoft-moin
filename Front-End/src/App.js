import logo from './logo.svg';
import './App.css';
import Routess from './Routes/Routes';
import Navbar from './Components/Navbar';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { GetApiProducts } from './Redux/action';
import { useEffect } from 'react';
import Home from './Components/Home';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
     
      <Routess></Routess>
    </div>
  );
}
export default App;
