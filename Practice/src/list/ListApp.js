import React, { useState, useRef } from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function ListApp() {
    const [users,setUsers] = useState([
      {
        id: 1,
        username: 'username1',
        email: 'username1@example.com',
        active : true
      },
      {
        id: 2,
        username: 'username2',
        email: 'username2@example.com',
        active : false
      },
      {
        id: 3,
        username: 'username3',
        email: 'username3@example.com',
        active : false
      }
    ]);
    
    return (
        <>
        <div style={{border : '1px solid blue'}}>
            <CreateUser users={users} setUsers={setUsers}/>
            <UserList users={users} setUsers={setUsers}/>
        </div>
        </>
    );
}

export default ListApp;