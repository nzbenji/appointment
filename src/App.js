import React, { Component } from 'react';
import {Route} from 'react-router-dom';
//import { Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import './App.css';

import View from './components/View'
import Home from './components/Home'
import Signin from './components/SIgnin/Signin'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: 'signin'
    }
  }

  onRouteChange = () => {
    this.setState({
      route: 'home'
    })
  }
  render() {
    console.log(this.state.route)
    return (
      <div className="App">
      { this.state.route === 'signin' 
        ?
        <Link to={"/login"}>Sign in</Link>
        :
        <Link to={'/signout'}>Sign out</Link>
    }
      
      

      <Route exact path="/login" 
      component={Signin} 
      render={() => <onRouteChange onRouteChange={this.onRouteChange} />} 
      />
      <Route exact path="/signout" />
      <Route exact path="/" component={Home} />
      <Route exact path="/appointment" component={View} />

        
      </div>
    );
  }
}

export default App;
