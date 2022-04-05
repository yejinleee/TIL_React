# Let's React

## 세팅

### `npx create-react-app {프로젝트명}`

### 작동방식
index.js\
-> <App /\>, document.getElementById('root')\
-> App.js\
-> function App(){} export default App;

## JSX
>js에서 html을 작성할 숫 있게 해주는 React 내장 JSX문법\
return 안에는 크게 하나의 태그가 감싸고 있어야 함.

### 데이터 바인딩
서버에서 받아온 데이터를 화면에 보여줌\
기존 JS 방식 : document.getElementId().innerText('') 보다 간편하게 구현가능\
**중괄호** {변수명, 함수 등}
* img태그 src속성\
<img src="~~~.jpg"\> 보다 간편하게 \
import img1 from './img.png'; \
 <img src="{img1}"\>
* stle 속성\
style={ obj형 스타일 속성 : "값", }\
->괄호 안의 값을 변수로 지정해두고 호출하는 것이 더 간결

### useState
> state : 리액트의 데이터 저장공간

`import React, {useState} from 'react';`\
`let [변수명, 변경함수] = useState("초기값");`

**새로고침 없이** 변경된 내용을 반영할 수 있다 !! \
단, state를 완전히 대체함.

## Event
``onClick={실행할함수}`` or ``onClick={ () =>{ 실행할내용}}`` 

## 문법
### 삼항 연산자
`조건 ? 참일때 실행할 코드 : 거짓일때 실행할 코드`
### map
배열.map(실행할 함수)
```
const arr= [1,2,3]
const arr2 = arr.map(( each )=> {return each*2});
```
🚨Warning: Each child in a list should have a unique "key" prop.\
반복을 사용한 HTML요소에는 꼭 key 파라미터를 주어야한다. key={}
### default 파라미터
함수 선언시 파라미터가 입력되지 않을 경우에 가질 파라미터를 부여하는 문법.\
`function 함수명(파라미터명 = 지정할초기값)`\
=(등호)를 통해 지정할 수 있다.

### 조건문
### if
* *JSX 안에서는 if문 불가능!!!
* function 안에서 return을 만나면 그 이하 코드 실행 X
### 삼항연산자
JSX안에서 조건문 용도로 사용\
{ 조건 ? 참 이면 보여줄 HTML : 거짓 이면 보여줄 HTML}
```
  <div>
    { 1 ===1 ? <p> 참</p> : <p>거짓</p>}
  </div>
```
### &&연산자
```
  1 === 1 && <p>참이면 보여줄 HTML </p>
  ```
### switch / case
>switch(검사할 변수명) { }

if - else if - else if - else 길게 이어지는 것 보다 가독성이 좋다.
```
switch (action.type){
  case '수량증가':
    return 수량증가된state;
  case '수량감소':
    return 수량감소된state;
  default :
    return state;
}
```

### 배열에 원소 추가/삭제/변경
> 수정할 원 배열 state를 깊은 복사 하고, 그 복사한 state에 대해서 수정할 내용을 반영시키고, 원 배열을 수정한 배열로 변경한다(setState)
* 배열.unshift(추가할 원소) : 맨 앞에 원소 추가
* 배열.push(추가할 원소) : 맨 뒤에 원소 추가
* 배열.shift() : 맨 앞의 원소 제거
* 배열.pop() : 맨 뒤의 원소 제거

## Component
> 리액트의 장점!\
긴 HTML 단락을 컴포넌트화 하여 호출하면 관리하기 편하고 코드가 간결해진다.\
이름은 보통 대문자로 시작\
return 값은 가장 크게 <></>로 묶어 주어야함.

> Component화 하면 좋은 HTML 단락은?\
반복출현 하는 코드\
자주변경 되는 코드\
다른 페이지를 만들때도 유용

> 하지만, state 복잡해짐.\
다른 func,컴포넌트에서 선언된 변수 참조 하려면 props 를 사용해야 한다.

## props
> 자식 Component에서 부모 Component를 사용하기 위함

```
// 부모
function 부모Component(){
    let [부모에있는state,setState] = useState('부모로부터');
    return(
        <>
            <자식Component 전송할이름={state명}>
        </>
    )
}

//자식
function 자식Component(props){
    return(
        <div>props.전송할이름</div>
    )
}
```
> 부모에서 자식에게 전달할 때 인자는 여러개여도 된다.\
그렇게 전달받은 자식에서는 props.전달받은이름 으로 접근하여 사용할 수 있다.

## Redux
> * 상태관리 라이브러리!
> * props 전송 없이도 **모든** 컴포넌트가 그 state를 사용할 수 있도록 한다

`npm install redux react-redux`
```
//index.js
import { Provider } from 'react-redux';
import { createStore } from 'redux';
let store = createStore( () => {
  return[
    {id:0, name: '멋진신발', quan:2}
  ]
})
    <Provider store={store}>
      <App />
    </Provider>
```
redux에 데이터로 사용하려는 state를 createStore()로 만든다.\
createStore()에 콜백함수가 들어가고 만드려는 state의 초기값을 return한다.\
Provider에 만든 state를 props처럼 전달한다.

```
//App.js
import Cart from './Cart.js';
...
        <Route path="/cart" element={<Cart />}></Route>

```
```
//Cart.js
function Cart(props){
  return (
    {props.state[0].name}
  {/* stateToProps란 함수에서 state란 이름으로 return했으니  */}
  )
}

function stateToProps(state){ //여기인자의 state는 Provider에서 인자로 넘긴 store 변수임.
    return {
      state : state //인자state(리덕스의 store)를 state란 이름으로 return
    }
  }
  
export default connect(stateToProps)(Cart);
// stateToProps함수와 Cart.js를 이어준다
```

### reducer / dispatch

>redux에서 데이터를 수정하려면

>1 . **reducer** 함수를 만들고 데이터 수정 방법을 정의한다.
```
reducer(초기값,action){
  return ()
}
```
action\
\- 데이터 수정을 위한 정보를 가진다.\
\- dispatch 안의 모든 객체들을 가짐(action.type, action.payload 등).\
\- 주로 type 값 객체(문자열 등) 형태 사용하여 분기 만듦
```
//index.js
let 초기값 = [{id : 0, name : '멋진신발', quan : 2}];
function reducer(state = 초기값, action){
  if (action.type === '수량증가') {
    let copy = [...state];
    copy[0].quan++;
    return copy
  } else {
    return state
  }
}
let store = createStore(reducer);
```
> 2 . 수정할 때 **dispatch()** 함수를 호출하여 reducer 함수에 정의한대로 수정하도록 한다.
```
//Cart.js
<td><button onClick={()=>{ props.dispatch({type: '수량증가'}) }}> + </button></td>
```
dispatch인자를 type에 '수량증가'로 주면 reducer에서 그에 맞는 action 조건이 있을 경우 해당 코드가 실행됨!

### 데이터 수정 : dispatch payload
```
if (action.type === '항목추가') {
    let copy = [...state];
    copy.push(action.payload);
    return copy 
```
```
    props.dispatch({ type: '항목추가', payload: {id: 2, name: '새로운 상품', quantity: 1};
```
dispatch에 payload 인자 값으로 데이터를 실어보낼 수 있다.


### useReducer
>const [상태 객체, dispatch 함수] = useReducer(reducer 함수, 초기 상태, 초기 함수)
```
const [state, dispatch] = useReducer(reducer, initialState);

```
### redux 데이터 수정
```

```



## import / export
내보낼파일.js 에서 export문으로 함수, 객체, 원시값을 내보냄
다른 파일에서 import 문으로 가져올 수 있음.
* export named\
**여러개** 내보낼 수 있다, 단 { 중괄호 } 안에 묶어서 주고받기!\
export한 이름과 동일한 이름으로 import 해야 한다.
>//exportFile.js \
export {myFunction, myVariable}; \
//importFile.js \
import {myFunction, myVariable} from './exportFile.js';

* export default\
한 파일에 하나만 적자!
해당 파일에서 기본으로 export하기 때문에 import하는 파일에서 **자유롭게 네이밍** 가능
>//exportFile.js \
export default myFunc \
//importFile.js \
import **myFuncName** from './exportFile.js';

## 페이지 이동
>상세 주소에 따라 다른 뷰를 보여주는 것 \
상세 페이지 등 페이지 이동할 때 /이후로 지정\
> 라우터를 사용하면 SPA(Single Page Application)구현\
->  페이지를 이동할때마다 각각의 HTML을 불러와 로딩하는 것이 아닌, 처음에 한번만 받아오고 이후엔 필요한 데이터만 받아와 화면에 보여줌

### Route
* 설치\
`npm install react-router-dom`

* index.js 
```
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

* App.js \
`import { Link, Route, Switch } from 'react-router-dom';`

🚨A <Route\> is only ever to be used as the child of <Routes\> element, never rendered directly. Please wrap your <Route\> in a <Routes\>.\
💡react-router-dom 라이브러리의 업데이트된 문법을 적용한다. <a href="https://reactrouter.com/docs/en/v6/getting-started/overview#configuring-routes">공식문서</a>\
-- > 1. 모든 <Route\>를 전체적으로 <Routes\>가 감싸줘야한다.
```
import About from './pages/About';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
```
-- > 2. 파라미터는 element = {<컴포넌트 />}

### useParam()
`import {useParams} from "react-router-dom";`
```
<Route path="/detail/:id" element={<Detail />}></Route>      
```
`/:id`는 url뒤에 아무문자나 받을 수있다. 여기선 id로 작명했지만 아무 이름 가능\
/detail/123214과 /detail/2354처럼 무작위 값을 해도 서로 동일 화면\
만약\
뒤에 오는 값에 따라 다른 화면을 보여주려 한다면??\
>변수 = useParam();은 url의 모든 파라미터를 저장함

* Detail.js
```
    let {id} = useParams();
```
let id = useParams();하면 console.log(id) >> {id:2} 이런식. destructing 해야함
### Link
>네비게이션 바에 to속성으로 이동할 페이지 경로를 지정한다.

*🚨에러 해결 과정🚨*
```
<Navbar>
  <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
  <Nav.Link> <Link to="/detail">Detail</Link> </Nav.Link>
</Navbar>
```
이렇게 설정하면\
🚨validateDOMNesting(...): <a\> cannot appear as a descendant of <a\>\
💡스택오버플로우 참고 후 <a\><a\></a\></a\> 로 인식되는 문제임을 알았고, 하나의 링크태그로 이용해도 된다!
```
<Navbar>
  <Nav.Link to="/">Home </Nav.Link>
  <Nav.Link to="/about">About </Nav.Link>
</Navbar> 
```
⚠️index.tsx:30 You rendered descendant <Routes \> (or called useRoutes()) at "/" (under <Route path="/" \>) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render. Please change the parent <Route path="/" \> to <Route path="*" \>. \
이리 저리 찾아봤는데 경고 문구에 다 써있었다 ... ! \
💡index.js 에서 자식 루트에서 deeper하게 navigate 하려면 처음 자식을 갈 때 * 지정!
```
<Route path="/*" element={<App />}></Route>
```

### useHistory
> window.history와 유사하게 전후나 특정 주소로 이동하게 한다

```
import { useHistory } from 'react-router-dom';
let history = useHistory();

<button className='bnt-useHistory' onClick={() => { history.goBack( ) }}> 뒤로가기 </button>

<button className='bnt-useHistory' onClick={() => { history.goForward( ) }}> 앞으로가기 </button>

// 특정 링크로
<button className='bnt-useHistory' onClick={() => { history.push('/detail' )}}> 상세페이지로 이동 </button>
```

## Style
### SASS
> CSS전처리기\
선택자의 중첩(Nesting)이나 조건문, 반복문, 다양한 단위(Unit)의 연산 등의 문법 코딩 가능

* @mixin @include
```
@mixin 스타일명{
  속성:값;
}
```
으로 그룹단위 스타일을 변수로 지정해둘 수 있음.\
인자를 사용할 수 있다.
```
mixin fontSize($size) {
  @if $size == 'small' {
    font-size: 10px;
  }
```
처럼 조건으로 사용할 수도 있고, 속성에 대한 값으로 사용할 수도 있다.\
이를 사용할때는
```
적용할 요소{
  @include 스타일명;
  @inlcude 스타일명(인자);
}
```
<a href="https://webisfree.com/2019-10-08/[scss]-mixin-include-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C%EB%B3%B4%EA%B8%B0">참고</a>

## useEffect
> deps인자에 따라 페이지가 렌더링 될 때마다 콜백함수를 실행한다.\
useEffect(cb,deps);
* No dependency
```
useEffect(() => {});
``` 
모든 렌더링 발생시마다 발동되기 때문에 유용하진 않음
* []
```
useEffect(() => {}, []);
```
처음 렌더링이 발생한 직후에만 발동. 더이상은 발동 X
* dependent on a variable
```
useEffect(() => {}, [prop, state]);
```
처음 렌더링이 발생한 직후, 그리고 배열 안 변수의 값이 변경될때마다 발동

## AJAX
> Asynchronous JavaScript And XML : 서버와 비동기적으로 데이터를 주고받는 기술.\
"새로고침 없이 서버에 GET요청하는 코드"
### axios
`npm install axios`\
`import axios from 'axios';`
* GET
```
axios.get('~~.json')
.then((result) => {
  console.log(result)
})
.catch((error)=>{
  console.log(error)
})
```


## 성능향상 / 유지관리
### 함수나 오브젝트는 변수에 담아 컴포넌트 바깥에 저장해두자
### lazy import
App.js에서 처럼 많은 import가 필요할 때, 필요한 컴포넌트만 import하도록 지정
`import React, {lazy, Suspense} from 'react';`
```
// 기존 import
// import Detail from './Detail.js';
// lazy import
let Detail = lazy( ()=>{ return import('./Detail.js') } );

//해당 컴포넌트 호출할때
  <Suspense fallback={ <div>로딩중입니다~!</div> }>
    <Detail/>
  </Suspense>

``` 
### memo
컴포넌트는 관련된 state, props가 변경되면 항상 자동 재렌더링! \
부모 컴포넌트의 props가 변경됐을 때 자식 컴포넌트들도 재렌더링 되는데...\
속도 저하 등 문제가 있기 때문에! \
` import React, { memo} from 'react';`
```
function Cart(){
  return (
    <Parent 이름="존박" 나이="20"/>
  )
}

function Parent(props){
  return (
    <div>
      <Child1 이름={props.이름}/>
      <Child2 나이={props.나이}/>
    </div>
  )
}
function Child1(){
  useEffect( ()=>{ console.log('렌더링됨1') } );
  return <div>1111</div>
}
let Child2 = memo(function(){
  useEffect( ()=>{ console.log('렌더링됨2') } );
  return <div>2222</div>
})
```
Child1에서 '이름'을 변경해도 Child2에서 '나이'는 관련없기때문에 재렌더링 되지 않음! \
컴포넌트가 너무 크거나 잦은 재렌더링을 막을 때 사용\
하지만 기존과 바뀐 걸 비교하는 연산이 추가되서 props가 크고 복잡하면 부담이긴 하다.
