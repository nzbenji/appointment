import React, { Component } from 'react';
import {Route} from 'react-router-dom';
//import { Container } from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react'

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
    this.setState = ({user:{
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
    const { route } = this.state
    console.log(this.state.route)
    return (
      <div className="App">
      <Route exact path="/register" 
        render={(props) => 
        <Register {...props} 
        loadUser={this.loadUser} 
        onRouteChange={this.onRouteChange}
        /> }
      />

      <Redirect to="/" />

      { this.state.route === 'signin' 
        ?
        <div>
        <Menu size='large'>
          <Menu.Item name='home' active={route === 'home'} onClick={this.onRouteChange} />

          <Menu.Menu position='right'>
            <Menu.Item>
              <Link to={"/login"}><SigninBtn onRouteChange={this.onRouteChange}/></Link>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
        :
        <div>
          {/* <Link to={'/'}>
            <Route exact path="/" 
              render={(props) => <SignoutBtn {...props} onRouteChange={this.onRouteChange} /> } 
            />
          </Link>
          <Redirect to="/" />
          <Route exact path="/" component={Home} /> */}

          <Menu size='large'>
            <Menu.Item name='home' active={route === 'home'} onClick={this.onRouteChange} />

            <Menu.Menu position='right'>
              <Menu.Item>
                <Link to={'/'}>
                  <SignoutBtn onRouteChange={this.onRouteChange}/> 
              </Link>
                <Button primary>Sign Up</Button>
              </Menu.Item>
            </Menu.Menu>
        </Menu>
          
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
