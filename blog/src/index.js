import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routes,  Route} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Detail from './pages/Detail';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />}></Route>
      {/* <Route path="/detail/:id" element={<Detail />}></Route>       */}
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
