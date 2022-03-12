import React, {useEffect, useState} from 'react'; 
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import { Link, Route, Routes, Switch } from 'react-router-dom';
import axios from 'axios'
import shoesData from './data.js'
import About from './pages/About';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  let [shoes, shoes변경] = useState(shoesData);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>
    </div>
  );
}

export default App;

