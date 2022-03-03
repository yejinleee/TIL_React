# Let's React

## 세팅

### `npx create-react-app {프로젝트명}`


## 작동방식

index.js\
-> <App /\>, document.getElementById('root')\
-> App.js\
-> function App(){} export default App;

## JSX
js에서 html을 작성할 숫 있게 해주는 React 내장 JSX문법
return 안에는 크게 하나의 태그가 감싸고 있어야 함.

### 데이터 바인딩
서버에서 받아온 데이터를 화면에 보여줄 때 기존 JS의 document.getElement~ 등보다 간편함\
{변수명, 함수 등}\
<img src="~~~.jpg"\> 보다 간편하게 import img1 from './img.png'; 후 <img src={img1}"\>

## JSX에서의 style속성
style={ obj형 스타일 속성 : "값", }
_이거또한 {}로 가능_

## state
`import React, {useState} from 'react';`

리액트의 데이터 저장공간
```
let [변수명, 변경함수] = useStaet("초기값");
```
**새로고침 없이** 변경된 내용을 반영할 수 있다 !!
단, state를 완전히 대체함.

## Event
``onClick={실행할함수}``\
``onClcik={ () =>{ 실행할내용}}``

## Component
리액트의 장점!
관리 편함.
반복출현, 자주변경 되는 덩어리를 컴포넌트로 만들어 두면 깔끔해짐
다른 페이지를 만들때도 유용.
하지만, state 복잡해짐. 다른 func,컴포넌트에서 선언된 변수 참조 못하니까=>props!!