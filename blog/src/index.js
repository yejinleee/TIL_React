import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let 초기값 = [{id : 0, name : '멋진신발', quan : 2}];
function reducer(state = 초기값, 액션){
  if (액션.type === '항목추가'){
    let copy = [...state];
    copy.push(액션.payload);
    return copy
  } else  if (액션.type === '수량증가') {
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else  if (액션.type === '수량감소') {
    let copy = [...state];
    copy[0].quan--;
    return copy
  }else {
    return state
  }
}
let alert초기값 = true;
function reducer2(state=alert초기값, 액션){
  switch(액션.type){
    case '알림닫기':
      return false;
    default:
      return state;
  }
}
let store = createStore(combineReducers({reducer,reducer2}));

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
