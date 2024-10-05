import React, { createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const TreesContext = createContext();

export const useTrees = () => {
  return useContext(TreesContext);
}

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
