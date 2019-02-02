import React, { Component } from 'react';
import {Route} from 'react-router-dom';
//import { Container } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import './App.css';

import View from './components/View'
import Home from './components/Home'
import LoginForm from './components/SIgnin/Signin'
import SigninBtn from './components/SIgnin/SIgninBtn'
import SignoutBtn from './components/Signout/SignoutBtn'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: 'signin'
    }
  }

  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }

  render() {
    console.log(this.state.route)
    return (
      <div className="App">
      { this.state.route === 'signin' 
        ?
        <Link to={"/login"}> <SigninBtn /> </Link>
        :
        <Link to={'/'}>
        <Route exact path="/" 
        render={(props) => <SignoutBtn {...props} onRouteChange={this.onRouteChange} /> } 
        />
        </Link>
    }

      <Route exact path="/login" 
      render={(props) => <LoginForm {...props} onRouteChange={this.onRouteChange} /> /* Make sure user cant click on 
        sign in when already logged in */} 
      />
       
      <Route exact path="/" component={Home} />
      <Route exact path="/appointment" component={View} />

        
      </div>
    );
  }
}

export default App;
