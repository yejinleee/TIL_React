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
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore( () => {
  return[
    {id:0, name: '멋진신발', quan:2}
  ]
})
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
