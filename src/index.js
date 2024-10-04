import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState, useReducer } from 'react';

function App() {
  const [checked, setChecked] = useReducer(checked => !checked, true, () =>(false));

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={setChecked}
      />
      <p>{checked ? 'checked' : 'unchecked'}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

