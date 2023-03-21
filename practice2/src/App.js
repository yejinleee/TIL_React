import './App.css';
import {useState} from 'react';

function App() {
  const [toggleOnOff, setToggleOnOff] = useState(Array.from({length: 3}, () => false)); //(3) [false, false, false]

  const handleOnclick = (e,idx) => {
    const newOnOff = Array.from({length: 3}, () => false);
    newOnOff[idx] = !toggleOnOff[idx];
    setToggleOnOff(newOnOff)
  }
  return (
    <div className="App">
      {
          [1,2,3].map((e,idx) => (
            <div key={idx}>
              <button className="toggle" onClick = {e => handleOnclick(e,idx)}>toggle</button>
              <div className="box" style={{width : '100px', height:'100px', backgroundColor:toggleOnOff[idx] ? 'red' : 'grey'}}>?</div>
            </div>
          ))
      }
    </div>
  );
}

export default App;
