import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
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

