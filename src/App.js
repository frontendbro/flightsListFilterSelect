import React, { Component } from 'react';
import './App.css';

import Select from './components/Select';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">OneTwoTrip</h1>
        </header>
        
        <Select />
      </div>
    );
  }
}

export default App;
