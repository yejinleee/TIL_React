import './App.css';
import ParentComponent from './hooks/useContextTEST';

import React, { useState, useCallback, useMemo } from "react";

function App() {
  const [ex, setEx] = useState(0);
  const [why, setWhy] = useState(0);

  // useCallback 이 () => {console.log(why)} 라는 함수를 반환한다.
  const useCallbackReturn = useCallback(() => {
    console.log( '콜백 내에 why', why);
    }, [ex]);

  // useCallback 이 담겨있는 함수를 실행
  useCallbackReturn()
  console.log('x', ex, 'y', why)
  return (
    <>
      <button onClick={() => setEx((curr) => (curr + 1))}>X</button>
      <button onClick={() => setWhy((curr2) => (curr2 + 1))}>Y</button>
    </>
  );
}
export default App;

