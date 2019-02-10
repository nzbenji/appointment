import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import Header from './Menu'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
      <Link to={"/appointment"}>Select an appointment</Link>
      </div>
      
    )
  }
}

export default Home;