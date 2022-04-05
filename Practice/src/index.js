import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import UseRef from './UseRef'
import Redux from './Redux'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux';

const reduxState = 100;
function reducer(state = reduxState, action){
  if (action.type === "plus"){
    state++;
    return state 
  }
  else if(action.type === "addPayload"){
    state = state+action.payload;
    return state 
  }
  else{
    return state
  }
}

const reduxState2 = 200;
function reducer2(state = reduxState2, action){
  if (action.type === "plus"){
    state++;
    return state 
  }
  else if(action.type === "addPayload"){
    state = state+action.payload;
    return state 
  }
  else{
    return state
  }
}

let store = createStore(combineReducers({reducer, reducer2}));

ReactDOM.render(
  <BrowserRouter>
    <App />
    <UseRef />
    <Provider store={store}>
      <Redux />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
