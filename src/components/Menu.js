import React, { Component } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import {Link, Route} from 'react-router-dom';

import SigninBtn from './Signin/SigninBtn'
import SignoutBtn from './Signout/SignoutBtn'


class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu size='large'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to={"/login"}><SigninBtn /></Link>
            <Link to={'/'}>
              <SignoutBtn/> 
          </Link>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      </div>
      
    )
  }
}

export default Header;