import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

function Cart(props){
  function 알람닫기(){
    return( ()=> { props.dispatch({type:'알람닫기'})})
  }
  return (
    <div>
      <Table responsive>
        <tbody>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
            </tr>
                {props.state.map((n,i)=>{
                    return(
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{n.name}</td> 
                            <td>{n.name}</td>
                            <td>{n.quan}</td>
                            <td><button onClick={()=>{ props.dispatch({type: '수량증가'}) }}> + </button></td>
                        </tr>
                    )
                })}
        </tbody>
      </Table>
      <div className='my-alert2'>
        <p>지금 구매하시면 20%할인</p>
        <button onClick={알람닫기()}>닫기</button>
      </div>
    </div>
  )
}

function stateToProps(state){
  return {
    state : state.reducer ,
    alert열렸니 : state.reducer2 
  }
}
  
  export default connect(stateToProps)(Cart);



// JSX에서 Table 사용시 주의!
//  <Table> 안에서 바로 <tr><td>가 아니라 <thead>나 <tbody>로 묶어줄것!