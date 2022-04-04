import React from 'react'; 
import {connect, useSelector} from 'react-redux';

// useSelector -------------------------------------

// function Redux(){

//     const gotReduxState = useSelector( (state) => state);

//     return(
//         <div>
//             받아온 redux state : {gotReduxState} (useSelector)
//         </div>
//     )
// }

// export default Redux;


// connect -------------------------------------
function Redux(props){
    const gotReduxState = useSelector( (state) => state);

    return (
        <div>
            받아온 redux state : {gotReduxState} (useSelector)
            <br></br>
            받아온 redux state : {props.gotReduxState} (connect)
        </div>
    )
}

function stateToProps(props){ 
    return {
        gotReduxState : props
    }
}

export default connect(stateToProps)(Redux);
