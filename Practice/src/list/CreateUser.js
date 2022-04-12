import React, { useState, useRef, useMemo, useCallback } from 'react';

function countActiveUsers(users){
    console.log('count active users...');
    return users.filter(user => user.active).length;
}
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
    const onChange= useCallback( (e)=>{
        const { name, value } = e.target; //input태그에서 name으로 설정한값과 입력받은값(value)
        setNewInput({
            ...newInput,
            [name]: value
        });
        }, [newInput]
    );
    const count = useMemo( ()=> countActiveUsers(users), [users] );
        //deps인 users값이 변경된 경우에만 엠나 이 함수를 호출해서 계산하고
        // 변경되지 않은 경우엔 그전에 계산한 값을 재사용한다.
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
            <div>활성 사용자 수 : {count}</div>
        </div>
    )
}

export default CreateUser;