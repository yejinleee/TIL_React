import React, {useState} from 'react';
import AppRouter from './AppRouter';
import {authService} from 'fbase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn}/>
      {/* <footer>footer도 여기서 쓸수있음</footer> */}
    </>
  );
}

export default App;
