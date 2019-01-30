import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';

import View from './components/View'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/appointment" component={View} />
        
      </div>
    );
  }
}

export default App;
