import React, { Component } from 'react';
import FluxActualite from './components/FluxActualite';
import { actualites } from './actualites';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FluxActualite actualites={ actualites }/>
      </div>
    );
  }
}

export default App;
