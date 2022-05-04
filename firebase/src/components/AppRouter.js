import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from '../routes/Home';
import Auth from 'routes/Auth';
import Profile from '../routes/Profile';
import Navigation from './Navigation';

const Router=({isLoggedIn})=> {
    console.log(isLoggedIn);
    return(
        <HashRouter>
            {isLoggedIn && <Navigation />}

            {/* Swtich가 아니라 이제 Routes! 자식은 꼭 다 <Route  */}
            <Routes> 
                {isLoggedIn ? <Route exact path="/" element={<Home/>} />
                : <Route exact path="/" element={<Auth/>} />}
                <Route exact path="/profile" element={<Profile/>} /> 
            </Routes>
        </HashRouter>
    );
}
export default Router;