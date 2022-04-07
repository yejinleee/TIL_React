import React, { useState, useRef } from 'react';

function CreateUser({users,setUsers}) {

    const nextId = useRef(4);
    const [newInput,setNewInput]=useState({
        username:'',
        email:''
    })
    const onSubmit = () => {
      const newUser={
          id:nextId,
          username: newInput.username,
          email : newInput.email
      }
      setUsers(users.concat(newUser));
      nextId.current += 1;
      
      setNewInput({
          username:"",
          email:""
      })
    };
    const onChange=(e)=>{
        const { name, value } = e.target; //input태그에서 name으로 설정한값과 입력받은값(value)
        setNewInput({
            ...newInput,
            [name]: value
        });
    }
    return(
        <div>
            <input
                name="username"
                placeholder='계정이름'
                onChange={onChange}
                value={newInput.username}
            ></input>
            <input
                name="email"
                placeholder='이메일'
                onChange={onChange}
                value={newInput.email}
            ></input>
            <button
                onClick={onSubmit}
            >MakeNew</button>
        </div>
    )
}

export default CreateUser;