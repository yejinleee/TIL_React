import React from "react";
import { useContext } from "react";

const UserContext = React.createContext();
const user = { name : 'mike' , age : 23}

function ParentComponent () {
    return(
        <UserContext.Provider value = {user}>
            <ChildComponent />
        </UserContext.Provider>
    );
}
function ChildComponent () {
    const user = useContext(UserContext);
    console.log(user);      //{name: 'mike', age: 23}
    console.log(user.name); //mike
}
export default ParentComponent;