import React, { Component } from 'react';
import Calendar from 'react-calendar'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      date: new Date()
    }
  }

  onChange = date => {
    this.setState({ date })

  }

  render() {
    console.log(this.state.date.toString())
    //console.log(this.state.date)
    return (
      <div className="App">
        <Calendar 
          onChange={ this.onChange }
          value={ this.state.date }
        />
      </div>
    );
  }
}

export default App;
