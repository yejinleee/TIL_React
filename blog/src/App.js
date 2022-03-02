import React, {useState} from 'react'; 
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, setTitle] = useState(['제목1','제목2','제목3']);
  let [thumb, setThumb] = useState(0);

  function changeTitle(){
    var newArr = [...title];
    newArr[0]='변경제목1';
    setTitle(newArr);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div style= { {color : 'white', fontSize : '30px'}}> 개발 Blog </div>
     </div>
  
     <button onClick={ changeTitle}>버튼</button>
     <div className="list">
      <h3> { title[0] } <span onClick={ ()=> {setThumb(thumb +1 )}}>👍🏻</span> {thumb} </h3>
      <p>2월 17일 발행</p>
      <hr/>
     </div>
      <div className="list">
        <h3> { title[1] } </h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> { title[2] } </h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>


      <Modal />
    </div>
  );
}

function Modal(){
  return(
    <div>
      <p>Componnent</p>
    </div>
  )
}
export default App;

