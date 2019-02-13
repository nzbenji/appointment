import React, { Component } from 'react';
import {Route} from 'react-router-dom';
//import { Container } from 'semantic-ui-react';
import {Link, Redirect} from 'react-router-dom';
import { Button, Menu } from 'semantic-ui-react'

import './App.css';

import LoginForm from './components/Signin/Signin'
import SigninBtn from './components/Signin/SigninBtn'
import SignoutBtn from './components/Signout/SignoutBtn'
import Register from './components/Register/Register'
import View from './components/View'

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

  onRouteChange = (route) => {
    this.setState({
      route: route
    })
  }

  toSignIn = () => {
    const { route } = this.state
    return (
      <div>
        <Menu size='large'>
          <Menu.Item name='Home' active={route === 'login'} onClick={this.onRouteChange} />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Link to={"/login"}><SigninBtn onRouteChange={this.onRouteChange}/></Link>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }

  signedIn = () => {
    const { route } = this.state
    return (
      <div>
      <Menu size='large'>
            <Menu.Item name='home' active={route === 'signout'} onClick={this.onRouteChange} />
              <Link to={'/appointment'}><Menu.Item name='Book' onClick={this.onRouteChang} /></Link>

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
    )
  }

  render() {
    const { route } = this.state
    console.log(route)
    return (
      <div className="App">

      <Redirect to="/" />

      {/* Conditional render contents */}
      { route === 'signin' 
      ?
        <div>{this.toSignIn()}</div>
      :
        <div>{this.signedIn()}</div>
      }

    <Route exact path="/register" 
        render={(props) => 
          <Register {...props} 
          loadUser={this.loadUser} 
          onRouteChange={this.onRouteChange}
          /> }
    />

      <Route exact path="/login" 
      render={(props) => <LoginForm {...props} onRouteChange={this.onRouteChange} /> /* Make sure user cant click on 
        sign in when already logged in */} 
      />
      {/* {this.state.route === 'home' && <Route exact path="/appointment" 
        component={View}
      />} */}
      <Route exact path="/appointment" 
        component={View} />
      

      </div>
    );
  }
}

export default App;
