import logo from './logo.svg';
import './App.css';
import { TreesContext } from './';
import { useContext } from 'react';

function App() {
  const { trees } = useContext(TreesContext);
  console.log(trees);
  return (
    <div>
      <h1>Trees</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
