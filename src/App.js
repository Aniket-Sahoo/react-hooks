import logo from './logo.svg';
import './App.css';
import { useTrees } from './';

function App() {
  const { trees } = useTrees();
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
