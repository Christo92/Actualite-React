import React, { Component } from 'react';
import FluxActualite from './components/FluxActualite';
// Import json
import { actualites } from './actualites';
// Import packages
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {    
    return (

      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={() => <FluxActualite actualites={ actualites }/>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
