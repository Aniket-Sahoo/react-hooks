import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaStar } from "react-icons/fa";
import reportWebVitals from './reportWebVitals';

const createArray = (length) => [...Array(length)]

function Star({ selected = false, onSelect }) {
  return <FaStar color={selected ? "blue" : "grey"} onClick={onSelect} />
}

function StarRating({ totalStars=5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star 
        key={i} 
        onSelect={() => setSelectedStars(i + 1)}
        selected={selectedStars > i} 
        />
      ))}
      <p>Number of selected Stars: {selectedStars}</p>
    </>
  );
}

function App({name, age}) {
  return (
    <StarRating totalStars={10}/>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Sahoo" age="23"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
