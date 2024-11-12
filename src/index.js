import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Render the App component into the root DOM element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Make sure there is an element with id 'root' in your HTML file
);
