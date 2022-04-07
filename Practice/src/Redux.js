import React, {useState } from 'react'; 
import {connect, useDispatch, useSelector} from 'react-redux';
import UseReducer from './UseReducer';
// useSelector -------------------------------------

function Redux(){

    const gotReduxState = useSelector( (state) => state.reducer);
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const onChange = (e) => {
      setText(e.target.value);
    };
  
    const onReset = () => {
      setText('');
    };
  
    return (
      <div>
        <input onChange={onChange} value="A" />
        <button onClick={onReset}>초기화</button>
        <div>
          <b>값: {text}</b>
        </div>    

            받아온 redux state : {gotReduxState} (useSelector)
            <button onClick={()=>{ dispatch( {type:'plus'} ) }}> PLUS </button>
            <button onClick={()=>{ dispatch( {type:'addPayload', payload:3} ) }}> AddPayload </button>
            <UseReducer />
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
//             <button onClick={()=>{props.dispatch({type: 'plus'}) }}> PLUS </button>
//         </div>
//     )
// }

// function stateToProps(props){ 
//     return {
//         gotReduxState : props
//     }
// }

// export default connect(stateToProps)(Redux);
