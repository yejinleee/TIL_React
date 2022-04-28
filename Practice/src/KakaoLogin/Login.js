import React, { useEffect, useRef, useState } from 'react';
import kakaoLogo from './kakao_login.png';

function Login(){

    const CLIENT_ID = "c99833df6bb9159312ea064808941957";
    const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return(
        <>
            <a href={KAKAO_AUTH_URL}>
                <img src={kakaoLogo} alt="카카오로그인"></img>
            </a>
        </>
    )

}
export default Login;