import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

export const TreesContext = createContext();

const trees = [
  { id: 1, name: 'Maple'},
  { id: 2, name: 'Oak'},
  { id: 3, name: 'Family'},
  { id: 4, name: 'Component'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TreesContext.Provider value={{ trees }}>
    <App />
  </TreesContext.Provider>
);
