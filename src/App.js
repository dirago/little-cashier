import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="lc">
      <header className="lc-header">
        <img src={logo} className="lc-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (and Redux also)
        </a>
      </header>
    </div>
  );
}

export default App;
