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


### 배열에 원소 추가/삭제/변경
> 수정할 원 배열 state를 깊은 복사 하고, 그 복사한 state에 대해서 수정할 내용을 반영시키고, 원 배열을 수정한 배열로 변경한다(setState)
* 배열.unshift(추가할 원소) : 맨 앞에 원소 추가
* 배열.push(추가할 원소) : 맨 뒤에 원소 추가
* 배열.shift() : 맨 앞의 원소 제거
* 배열.pop() : 맨 뒤의 원소 제거

## import / export
내보낼파일.js 에서 export문으로 함수, 객체, 원시값을 내보냄
다른 파일에서 import 문으로 가져올 수 있음.
* named export named\
여러 값을 내보낼 때 유용!\
가져갈 때는 내보낸 이름과 동일한 이름 사용
>//exportFile.js \
export {myFunction, myVariable}; \
//importFile.js \
import myFunction from './exportFile.js';

* export default\
단일 값
>//exportFile.js \
export default myFunction \
//importFile.js \
import myFunction from './exportFile.js';

## Routing
>상세 주소에 따라 다른 뷰를 보여주는 것 \
상세 페이지 등 페이지 이동할 때 /이후로 지정\
> 라우터를 사용하면 SPA(Single Page Application : 페이지를 이동할때마다 각각의 HTML을 불러와 로딩하는 것이 아닌, 처음에 한번만 받아오고 이후엔 필요한 데이터만 받아와 화면에 보여줌)

### react-router
* 설치\
`npm install react-router-dom`

* index.js \
`import { BrowserRouter } from 'react-router-dom';`
```
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
💡react-router-dom 라이브러리의 업데이트된 문법을 적용한다. <a href="https://reactrouter.com/docs/en/v6/getting-started/overview#configuring-routes">공식문서</a>
1. 모든 <Route>를 전체적으로 <Routes>가 감싸줘야한다.\
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
2. 파라미터는 element = {<컴포넌트 />}