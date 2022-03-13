import React, {useEffect, useState} from 'react'; 
import '../App.css';
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import { Link, Route, Routes, Switch } from 'react-router-dom';
import axios from 'axios'
import shoesData from '../data.js'
import About from './About';
import Detail from './Detail';

const Home = () => {
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
  let [스위치, 스위치변경] = useState(false);
  let [누른탭, 누른탭변경] = useState(0);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/"></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
    </Routes>
 
    <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={() => { 스위치변경(false); 누른탭변경(0); }}> 리뷰 </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => { 스위치변경(false); 누른탭변경(1); }}> QnA </Nav.Link>
        </Nav.Item>
    </Nav>
    <TabContent 누른탭={누른탭} 스위치변경={스위치변경} />
    <Navbar>
      <Link to="/">Home</Link> 
      <Link to="/detail">Detail</Link> 
    </Navbar> 
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
function TabContent(props) {
  useEffect(() => {
      props.스위치변경(true);
  })

  if (props.누른탭 === 0) {
      return <div>0번째 상품입니다.</div>
  } else if (props.누른탭 === 1) {
      return <div>1번째 상품입니다.</div>
  } else {
      return <div>나머지 상품입니다.</div>
  }
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
export default Home;

