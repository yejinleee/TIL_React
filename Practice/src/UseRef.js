import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from 'react'; 

function UseRef() {
  const [stateValue, setStateValue] = useState(1);
  const refValue = useRef(1);
  // useRef : state 변경 후 재렌더링 하지 않음!! 값을 바꿔도 바뀐 값이 화면에 보이지 않음. 콘솔에선 확인 할 수 있음
  
  console.log(` stateValue: ${stateValue}`);

  return (
    <>
      <p>{stateValue}번 클릭하셨습니다.</p>
      <p>{refValue.current  } ref.</p> 

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

export default UseRef;
