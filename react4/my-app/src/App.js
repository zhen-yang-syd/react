import React from 'react';
import logo from './logo.svg';
import './App.css';
import Status from './Status';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <Status isOnline={true}/>
      <Weather />
    </div>
  );
}

export default App;
