import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

const LoginForm = ({onRouteChange}) => (
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
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />

            <Link to="/">
              <Button 
              color='teal' 
              fluid size='large'
              onClick={() => onRouteChange('home')}
              >
                Login
              </Button>
            </Link>
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

export default LoginForm