import React from 'react';
import { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState, useReducer } from 'react';


const initialState = {  
  message: 'hi'
};

function reducer(state, action){
  switch (action.type) {
    case "yell":
      return {
        message: `HEY! my previous message was ${state.message}`
      };
    case 'whisper':
      return {
        message: `shh! my previous message was ${state.message}`
      };
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>Yell</button>
      <button onClick={() => dispatch({ type: 'whisper' })}>whisper</button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


