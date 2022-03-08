import React, {useEffect, useState} from 'react'; 
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import { Link, Route, Routes, Switch } from 'react-router-dom';
import axios from 'axios'
import shoesData from './data.js'
import About from './pages/About';
import Home from './pages/Home';

function App() {
  let [shoes, shoes변경] = useState(shoesData);
  let [title, setTitle] = useState(['제목1','제목2','제목3']);
  let [thumb, setThumb] = useState(0);
  let [seeModal, setSeeModal] = useState(false);
  let [clickedTitle, setClickedTitle] = useState("");

  function isit(e){
    setSeeModal(!seeModal);
    e.target.innerText = e.target.innerText ==="open" ? e.target.innerText = "close" : e.target.innerText = "open";
  }  
  let [newInput,setNewInput] = useState("");

  let [loading,setLoading] = useState(false);
  let [loaded,setLoaded]=useState(false);
  let [loadingFail,setLoadingFail]=useState(false);

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
          shoes.map(function(n,i){
            return(
              <Card shoes = {shoes[i]} i={i} key={i} />
            )
          })
        }
      </div>
      {loading ===true ? <LoadingGif /> : null}
      <button className='btn btn-primary' onClick={(e) => {
        setLoading(true);
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result) => {
            setLoading(false);
            shoes변경([...shoes,...result.data])
            setTimeout(()=> {
              setLoaded(false);
              e.target.hidden='true';  
            },3000)
          })
          .catch(()=>{

          })
      }}> 더보기 </button>


    </div>
  );
}

function LoadingGif(){
  return(
    <>
      <img alt="로딩중입니다" src='https://imgfiles-cdn.plaync.com/file/BladeNSoul/download/20160620132638-tLPjdUHThol8yDZ5p4gd0-v4'></img>
      </>
  )
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

