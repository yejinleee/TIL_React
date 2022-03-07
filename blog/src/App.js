import React, {useEffect, useState} from 'react'; 
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import shoesData from './data.js'
import { Link, Route, Routes, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  let [shoes, shoes변경] = useState(shoesData);
  // console.log('import data.js : ',shoes);
  let [title, setTitle] = useState(['제목1','제목2','제목3']);
  let [thumb, setThumb] = useState(0);
  let [seeModal, setSeeModal] = useState(false);
  let [clickedTitle, setClickedTitle] = useState("");

  function isit(e){
    setSeeModal(!seeModal);
    e.target.innerText = e.target.innerText ==="open" ? e.target.innerText = "close" : e.target.innerText = "open";
  }  
  let [newInput,setNewInput] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <div style= { {color : 'white', fontSize : '30px'}}> 개발 Blog </div>
      </div>
  
      <div className="list">
        <h3> { title[0] } <span onClick={ ()=> {setThumb(thumb +1 )}}>👍🏻</span> {thumb} </h3>
        <hr/>
      </div>
      {
        title.map( (each,i) =>{
         return(
          <div className="list" key={i}>
            <h3 onClick={()=>{setClickedTitle(each)}}> { each } </h3>
            <p> YYMMDD 발행</p>
            <hr/>
          </div>
         )
        })
      }
      <button onClick={isit}>open</button>
      { seeModal===true ? <Modal clickedTitle={clickedTitle}/> : null}
      <input onChange={(e)=>{setNewInput(e.target.value)}} placeholder="Write New Title"></input>
      <button onClick={()=>{
        let newTitiles = [...title];
        newTitiles.push(newInput);
        setTitle(newTitiles);
      }}>Save</button>
      
      <div className='row'>
        {
          shoesData.map(function(n,i){
            return(
              <Card shoes = {shoesData[i]} i={i} key={i} />
            )
          })
        }
      </div>


    </div>
  );
}

function Card(props){
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + [props.i + 1] + '.jpg'} width="100%" alt={[props.i+1]}/>
      <h3> {props.shoes['title']} </h3>
      <p> {props.shoes['content']} & {props.shoes['price']}</p>
    </div>
  )
}
function Modal(props){
  return(
    <div>
      <p>클릭된 제목 : {props.clickedTitle}</p>
    </div>
  )
}
export default App;

