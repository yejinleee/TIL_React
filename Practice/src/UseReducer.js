import React, {useReducer} from 'react'; 

const initialState = {
    inputs: {
      value: 'InitialStateValue',
    }
}
function reducer(state, action) {
    if (action.type === 'change'){
        return {
            ...state,
            inputs: {
              ...state.inputs,
              value: action.payload
            }
          };
    }
    return state;
  }
  
function UseReducer(){
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <div>
            UseReducer.js에서 {state.inputs.value}
            <button onClick={()=>{ dispatch( {type:'change', payload:'NewStateValue'} ) }}> CHANGE </button>
        </div>
    )
}

export default UseReducer;