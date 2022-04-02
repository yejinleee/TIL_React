## React HOOKS

### 함수형 프로그래밍!
class component, this 등에서 벗어나 함수형으로 ~!

//기존 Class형
```
class App extends Component{
    state = {count: 0};
    render(){
        return();
    }
}
export default App;

```
// Hooks
```
const App = () =>{
    const [count, setCount] = useState(0);
    return();
}
export default App;
```


## useRef
전체 컴포넌트 중 하나의 element를 선택할 수 있음.
```
import React, {useRef, useEffect} from "react";

function App() {
  const inputRef = useRef();
    setTimeout( ()=>{
        inputRef.current.focus();
    }, 5000)
  return (
    <div className="App">
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default App;

```
> 5초 뒤에 text input 창에 커서 들어옴