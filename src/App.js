import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App({ name, age}) {

  const [checked, setChecked] = useState(false);
  
  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={() => setChecked(!checked)} />
      <p>{checked?"checked":"not checked"}</p>
    </div>
  );
}

export default App;
