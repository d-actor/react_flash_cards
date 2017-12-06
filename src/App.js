import React, { Component } from 'react';
import CardApp from './CardApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>ReactJS Flash Cards</h2>
        <CardApp />
      </div>
    );
  }
}

export default App;
