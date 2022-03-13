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
**중괄호** {변수명, 함수 등}\
* img태그 src속성\
<img src="~~~.jpg"\> 보다 간편하게 \
import img1 from './img.png'; \
 <img src={img1}"\>
* stle 속성\
style={ obj형 스타일 속성 : "값", }\
->괄호 안의 값을 변수로 지정해두고 호출하는 것이 더 간결

### state
>리액트의 데이터 저장공간

`import React, {useState} from 'react';`\
`let [변수명, 변경함수] = useStaet("초기값");`

**새로고침 없이** 변경된 내용을 반영할 수 있다 !!
단, state를 완전히 대체함.

## Event
``onClick={실행할함수}`` or ``onClcik={ () =>{ 실행할내용}}`` 

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

### props
> 자식 Component에서 부모 Component를 사용하기 위함
```
// 부모
function 부모Component(){
    let ]부모에있는state,setState] = useState('부모로부터');
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

### Redux
> 상태관리 라이브러리!\
props 전송 없이도 모든 컴포넌트가 그 state를 사용할 수 있도록 한다

`npm install redux react-redux`
```
//index.js
import { Provider } from 'react-redux';
import { createStore } from 'redux';

    <Provider store={store}>
      <App />
    </Provider>
```
```
//App.js
import Cart from './Cart.js';
...
        <Route path="/cart" element={<Cart />}></Route>
//
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
+ JSX에서 Table 사용시 주의!\
```<Table> 안에서 바로 <tr><td>가 아니라 <thead>나 <tbody>로 묶어줄것!```


<!-- **컴포넌트에 변수로 전달하는 방법은 부모-자식 연결이 많아지면 어려워짐 그럴땐?**
### React.createContext()
공유할 변수 = React.createContext() 로 만들어두고
공유받을 컴포넌트 안에서 전체를 한번 감싸서 전송한다
```
import {useContext} from 'react'; -->


### 배열에 원소 추가/삭제/변경
> 수정할 원 배열 state를 깊은 복사 하고, 그 복사한 state에 대해서 수정할 내용을 반영시키고, 원 배열을 수정한 배열로 변경한다(setState)
* 배열.unshift(추가할 원소) : 맨 앞에 원소 추가
* 배열.push(추가할 원소) : 맨 뒤에 원소 추가
* 배열.shift() : 맨 앞의 원소 제거
* 배열.pop() : 맨 뒤의 원소 제거

## import / export
내보낼파일.js 에서 export문으로 함수, 객체, 원시값을 내보냄
다른 파일에서 import 문으로 가져올 수 있음.
* export named\
여러 값을 내보낼 때 유용!\
가져갈 때는 내보낸 이름과 동일한 이름 사용
>//exportFile.js \
export {myFunction, myVariable}; \
//importFile.js \
import myFunction from './exportFile.js';

* export default\
단일 값 \
import하는 파일에서 네이밍 가능
>//exportFile.js \
export default myFunction \
//importFile.js \
import myFunction from './exportFile.js';

## 페이지 이동
>상세 주소에 따라 다른 뷰를 보여주는 것 \
상세 페이지 등 페이지 이동할 때 /이후로 지정\
> 라우터를 사용하면 SPA(Single Page Application)구현\
->  페이지를 이동할때마다 각각의 HTML을 불러와 로딩하는 것이 아닌, 처음에 한번만 받아오고 이후엔 필요한 데이터만 받아와 화면에 보여줌

### Route
* 설치\
`npm install react-router-dom`

* index.js \
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

🚨A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.\
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

*Detail.js
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