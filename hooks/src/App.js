import React, {useRef, useEffect} from "react";

function App() {
  const inputRef = useRef();
    setTimeout( ()=>{
        inputRef.current.focus();
    }, 5000)
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;
