import React, { Component } from 'react';
import { Button, Input, Container, Header } from 'semantic-ui-react';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password:'',
            email: ''
            
        }
    }

    onChange = event => {
        const { name, value } = event.target

        //set corresponding state key (username/pass/email) 
        //to specific objects keys value
        this.setState({
            [name] : value
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
                        onChange={this.onChange}
                        value={username}
                        placeholder="Username"
                        fluid
                    />
                    <Input name="email" onChange={this.onChange} value={email} placeholder="Email" fluid />
                    <Input
                        name="password"
                        onChange={this.onChange}
                        value={password}
                        type="password"
                        placeholder="Password"
                        fluid
                    />
                    <Button onClick={this.onSubmit}>Submit</Button>
                </Container>
            </div>
        )
    }
}

export default Register