import React, {useState} from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['제목1','제목2','제목3']);
  let [thumb, setThumb] = useState(0);
  let [seeModal, setSeeModal] = useState(false);
  let [clickedTitle, setClickedTitle] = useState("");

  function isit(e){
    setSeeModal(!seeModal);
    e.target.innerText = e.target.innerText ==="open" ? e.target.innerText = "close" : e.target.innerText = "open";
  }  
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
    </div>
  );
}

function Modal(props){
  return(
    <div>
      <p>클릭된 제목 : {props.clickedTitle}</p>
    </div>
  )
}
export default App;

