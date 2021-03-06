import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';

import HelloWorld from "../helloworld/HelloWorld";
import Hello from "../hello/Hello";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React GraphQL Example</h1>
        </header>
        
        <HelloWorld />
        <Hello name="Rulo" />
      </div>
    );
  }
}

export default App;
