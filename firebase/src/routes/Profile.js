import React from 'react';
import { authService } from 'fbase';
import { useNavigate } from "react-router-dom";
import {Link } from "react-router-dom";

const Profile =()=>{
    const navigate = useNavigate();

    const onLogOutClick = () =>{
        authService.signOut();
        navigate("/");
    }
    return(
        <>
            <button onClick={onLogOutClick}><Link to ="/">Log Out</Link></button>
        </>
    )
}
export default Profile;