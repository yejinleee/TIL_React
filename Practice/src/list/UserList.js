import React, { useState, useRef } from 'react';

function UserList({users,setUsers}) {
    
    const onRemove=(id)=>{
        setUsers(users.filter(user => user.id !== id));
    }
    const onToggle=(id)=>{
        setUsers(users.map(user=>
             user.id === id ? {...user,active:!user.active} : user))
    }
    return(
        <>
            {users.map((user,index)=>(
                <div key={index}>
                    <b style={{color : user.active ? 'blue':'black'}} onClick={()=>onToggle(user.id)}>{user.username} </b>
                    <span>{user.email}</span>
                    <button onClick={()=>onRemove(user.id)}>REMOVE</button>
                </div>
            ))}
        </>
    )
}

export default UserList;