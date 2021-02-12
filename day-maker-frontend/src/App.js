import React from 'react';
import './App.css';
import Nav from "./Nav";
import DisplayContainer from "./DisplayContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <DisplayContainer />
      </header>
    </div>
  );
}

export default App;
