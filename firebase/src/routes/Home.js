import React from 'react';
import { useState } from 'react';
import { dbService } from "fBase";
import { addDoc, collection } from "firebase/firestore";

const Home =()=>{
    const [nweet,setNweet] = useState("");
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    const onChange = (e)=>{
        const {target : {value}} = e;
        setNweet(value);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" onChange={onChange} value={nweet} placeholder="What's on your mind?" maxLength={120} />
                <input type="submit"value='Nweet' />
            </form>
        </div>
    )
}
export default Home;