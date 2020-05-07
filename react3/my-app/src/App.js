import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './componenets/Greeting';
import StopWatch from './componenets/StopWatch';
import ActionLink from './componenets/ActionLink';
function App() {
  return (
    <div className="App">
      <Greeting />
      <StopWatch />
      <ActionLink />
    </div>
  );
}

export default App;
