import './App.css';
import {useState} from 'react';
import useWindowWidth from './hooks/useWindowWidth';

function App() {
  const width = useWindowWidth();
  const [name, setName] = useState('');
  return (
    <div className="App">
      {width < 600 && <p>(small window)</p>}
      <p>{`my name is ${name}`}</p>
      <input type="text" value={name} onChange = {e => setName(e.target.value)} />
    </div>
  );
}

export default App;
