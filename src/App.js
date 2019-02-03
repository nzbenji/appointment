import React, { Component } from 'react';
import {Route} from 'react-router-dom';
//import { Container } from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom';

import './App.css';

import View from './components/View'
import Home from './components/Home'
import LoginForm from './components/Signin/Signin'
import SigninBtn from './components/Signin/SigninBtn'
import SignoutBtn from './components/Signout/SignoutBtn'
import Register from './components/Register/Register'


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: 'signin',
      user: {
        id: '', 
        name: '',
        email: '',
        password: ''
      }
    }
  }

  loadUser = (data) => {
    this.state = ({user:{
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password
    }})
  }

  componentDidMount() {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(console.log)
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
      <Route exact path="/register" 
        render={(props) => <Register {...props} loadUser={this.loadUser} /> }
      />
      <Redirect to="/" />

      { this.state.route !== 'signin' 
        ?
        <div>
          <Link to={"/login"}> <SigninBtn /> </Link>
        </div>
        :
        <div>
          <Link to={'/'}>
            <Route exact path="/" 
              render={(props) => <SignoutBtn {...props} onRouteChange={this.onRouteChange} /> } 
            />
          </Link>
          <Redirect to="/" />
          <Route exact path="/" component={Home} />
          
        </div>
    }

      <Route exact path="/login" 
      render={(props) => <LoginForm {...props} onRouteChange={this.onRouteChange} /> /* Make sure user cant click on 
        sign in when already logged in */} 
      />

      <Route exact path="/appointment" component={View} />

        
      </div>
    );
  }
}

export default App;
