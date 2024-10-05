import ReactDOM from 'react-dom/client';
import './index.css';
import { useFetch } from './useFetch';

let count = 0;

function App() {
  const{ loading, data, error } = useFetch('https://api.github.com/users');
  console.log(loading);
  if(loading){
    return (
      <>
        <h1>Loading...</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </>
    )
  } 
  if (error) {
    return <h1>{JSON.stringify(error, null, 2)}</h1>
  } 
  if (data) {
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
