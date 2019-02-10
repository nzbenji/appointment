import React, { Component } from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password:'',
            email: ''
            
        }
    }

    onSubmit = () => {
        fetch('http://localhost:3001/register', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password,
            name: this.state.username
          })
        })
          .then(user => {
              console.log(user)
            if(user === 'success') {
                this.props.loadUser(user)
              this.props.onRouteChange('home')
            }
          })
        
    }

    onEmailChange = (event) => {
        this.setState({
          email: event.target.value
        })
      }
      onUsernameChange = (event) => {
        this.setState({
          username: event.target.value
        })
      }
      onPasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
      }


    render() {
        console.log(this.state.username)
        const { username, password, email } = this.state
        return (
            <div>
                <Container text>
                    <Header as="h2">Register</Header>
                    <Input
                        name="username"
                        onChange={this.onUsernameChange}
                        value={username}
                        placeholder="Username"
                        fluid
                    />
                    <Input 
                        name="email" 
                        onChange={this.onEmailChange} 
                        value={email} 
                        placeholder="Email" 
                        fluid 
                    />
                    <Input
                        name="password"
                        onChange={this.onPasswordChange}
                        value={password}
                        type="password"
                        placeholder="Password"
                        fluid
                    />
                    <Link to={'/'}>
                        <Button 
                            onClick={this.onSubmit}
                        >
                        Submit</Button>
                    </Link>
                    
                </Container>
            </div>
        )
    }
}

export default Register




