import React, { Component } from 'react';
import Calendar from 'react-calendar'

class View extends Component {
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
          onClickDay={(value) => console.log('clicked day:', value)}
        />
        
      </div>
    );
  }
}

export default View;
