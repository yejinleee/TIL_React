import React, { useState } from 'react';
import { authService } from 'fbase';
import {getAuth,signInWithPopup,
    signInWithEmailAndPassword,createUserWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";

const Auth =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");

    const auth = getAuth();

    const onChange = (e)=>{
        const {target : {name,value}} = e;
        if(name === "email"){
            setEmail(value)
        } else if(name==="password"){ 
            setPassword(value);
        }
    }
    const onSubmit = async(e)=>{
        e.preventDefault();
        try{
            let data;
            if ( newAccount) {
                data = await createUserWithEmailAndPassword(auth,email, password); //authService 가능
            } else {
                data = await signInWithEmailAndPassword(auth,email, password); //authService 가능
            };
            console.log(data);
        } catch(error){
            setError(error.message);
        }
    }
    const toggleAccount = () => setNewAccount( (prev)=>!prev);
    const onSocialClick = async(e)=>{
        const {target : {name }} = e; 
        let provider;
        if (name === "google"){
            provider = new GoogleAuthProvider();
        }else if (name ==="github"){
            provider = new GithubAuthProvider();
        }
        const data = await signInWithPopup(authService, provider); //auth 가능
        console.log(data);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="email" type="text" placeholder='Email' value={email} onChange={onChange} required />
                <input name="password" type="password" placeholder='Password' value={password} onChange={onChange} required />
                <input type="submit" value={newAccount ? "Create New Account" : "Sign In"} />
                {error}
            </form>
            <span onClick={toggleAccount}>{newAccount ? "Sign in" : "Create Account"}</span>
            <div>
                <button name="google" onClick={onSocialClick}>Continue with Google</button>
                <button name="github" onClick={onSocialClick}>Continue with GitHub</button>
            </div>
        </div>
    )
}
export default Auth;