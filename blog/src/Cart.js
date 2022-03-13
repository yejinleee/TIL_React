import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';

function Cart(props){
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
            <tr>
                <td>1</td>
                <td>{props.state[0].name}</td> 
                {/* stateToProps란 함수에서 state란 이름으로 return했으니  */}
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
        </tbody>
      </Table>
    </div>
  )
}

function stateToProps(state){
    return {
      state : state 
    }
  }
  
  export default connect(stateToProps)(Cart);