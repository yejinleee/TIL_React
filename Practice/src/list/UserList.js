import React, { useState, useRef } from 'react';

function UserList({users,setUsers}) {
    
    const onRemove=(id)=>{
        setUsers(users.filter(user => user.id !== id));
    }
    return(
        <>
            {users.map((user,index)=>(
                <div key={index}>
                    <b>{user.username} </b>
                    <span>{user.email}</span>
                    <button onClick={()=>onRemove(user.id)}>REMOVE</button>
                </div>
            ))}
        </>
    )
}

export default UserList;