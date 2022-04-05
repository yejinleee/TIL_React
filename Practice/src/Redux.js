import React from 'react'; 
import {connect, useDispatch, useSelector} from 'react-redux';

// useSelector -------------------------------------

function Redux(){

    const gotReduxState = useSelector( (state) => state.reducer);
    const dispatch = useDispatch();

    return(
        <div>
            받아온 redux state : {gotReduxState} (useSelector)
            <button onClick={()=>{ dispatch( {type:'plus'} ) }}> PLUS </button>
            <button onClick={()=>{ dispatch( {type:'addPayload', payload:3} ) }}> AddPayload </button>
            
        </div>
    )
}

export default Redux;


// connect -------------------------------------
// function Redux(props){
//     const gotReduxState = useSelector( (state) => state);

//     return (
//         <div>
//             받아온 redux state : {gotReduxState} (useSelector)
//             <br></br>
//             받아온 redux state : {props.gotReduxState} (connect)
//         </div>
//     )
// }

// function stateToProps(props){ 
//     return {
//         gotReduxState : props
//     }
// }

// export default connect(stateToProps)(Redux);
