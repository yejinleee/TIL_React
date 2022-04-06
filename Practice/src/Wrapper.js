import React, { useState } from 'react'
import Child from './Inner';

const Wrapper = ({children }) => {
  const [number, setNumber] = useState(0)
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      <p>여기는 Wrapper입니다 : {number}</p>
      {children } 
    </div>
  )
}

export default Wrapper;