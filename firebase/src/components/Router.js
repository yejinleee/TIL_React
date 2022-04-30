import React from 'react';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from '../routes/Home';
import Auth from '../routes/Auth';
import Profile from '../routes/Profile';

const Router=()=> {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <HashRouter>
            <Routes>
                <Route exact path="/" >
                   {isLoggedIn ? < Home /> : < Auth />}
                </Route >
            </Routes>
        </HashRouter>
    );
}
export default Router;