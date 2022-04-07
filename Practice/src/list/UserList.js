import React, { useState, useRef } from 'react';

function UserList({users}) {
    return(
        <>
            {users.map((user,index)=>(
                <div key={index}>
                    <b>{user.username} </b>
                    <span>{user.email}</span>
                </div>
            ))}
        </>
    )
}

export default UserList;