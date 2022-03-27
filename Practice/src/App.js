import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from 'react'; 

function App() {
  const [stateValue, setStateValue] = useState(0);
  const refValue = useRef(null);
  console.log(`랜더링... count: ${stateValue}`);

  return (
    <>
      <p>{stateValue}번 클릭하셨습니다.</p>
      <button onClick={() => {setStateValue(stateValue+1);
        console.log(stateValue);
      }}>setStateValue</button>
      <button onClick={() => {
        refValue.current+=1;
        console.log(refValue);
        }}>setStateValue</button>
    </>
  );
}

export default App;
