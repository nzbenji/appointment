import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  onPasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  onSubmit = () => {
    fetch('http://localhost:3001/login', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.props.onRouteChange('home')
        //if(data === 'success') 
        // if(data.id) {
        //   this.props.onRouteChange('home')
        //  //return <Redirect to="/" />
        // }
      })
    
  }

  render() {
    const { onRouteChange } = this.props
    return (
    <div className='login-form'>
    
      <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
          height: 100%;
        }
      `}</style>
      <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input 
              fluid icon='user' 
              iconPosition='left' 
              placeholder='E-mail address' 
              onChange={this.onEmailChange}
              />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                onChange={this.onPasswordChange}
              />
                <Button 
                color='teal' 
                fluid size='large'
                onClick={this.onSubmit}
                >
                  Login
                </Button>
            </Segment>
          </Form>
          <Link to="/register">
          <Message>
              Sign Up
              {/* <a href='#'>Sign Up</a> */}
            </Message>         
          </Link>

        </Grid.Column>
      </Grid>
    </div>
  ) 
  }
}

export default LoginForm