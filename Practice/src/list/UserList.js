import React, { useEffect, useState, useRef, useCallback  } from 'react';

function UserList({users,setUsers}) {
    useEffect(() => {
        console.log('user 값이 설정됨', users);
        return () => {
          console.log('user 가 바뀌기 전..', users);
        };
      }, [users]);

    const onRemove = useCallback( id=>{
        setUsers(users.filter(user => user.id !== id));
        }, [users,setUsers]
    );
    const onToggle= useCallback( (id)=>{
        setUsers(users.map(user=>
             user.id === id ? {...user,active:!user.active} : user))
        }, [users,setUsers]
    );
    return(
        <>
            {users.map((user,index)=>(
                
                <div key={index}>
                    <b style={{color : user.active ? 'blue':'black'}} onClick={()=>onToggle(user.id)}>{user.username} </b>
                    <span>{user.email}</span>
                    <button onClick={()=>{onRemove(user.id)}}>REMOVE</button>
                </div>
            ))}
        </>
    )
}

export default UserList;