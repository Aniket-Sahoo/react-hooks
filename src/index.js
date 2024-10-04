import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function App() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    fetch('https:api.github.com/users')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  if(data){
    return (
      <>
        <ul>
        {data.map((user) => (
          <li key={user.id}>{user.login}</li>))}
        </ul>
        <button button onClick={() => setData([])}>Clear</button>
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);