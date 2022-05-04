import React, {useState} from 'react';
import AppRouter from './AppRouter';
import {authService} from 'fbase';
import { useEffect } from 'react';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect( ()=>{
    authService.onAuthStateChanged((user) =>{
      if (user){
        setIsLoggedIn(true);
      } else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })
  }, [])
    return (
    <>
      { init ? <AppRouter isLoggedIn={isLoggedIn}/> : "initializing.." }
      {/* <footer>footer도 여기서 쓸수있음</footer> */}
    </>
  );
}

export default App;
