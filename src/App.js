import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react'
import { Link, Route } from 'react-router-dom'

import GamesPage from './GamesPage';
import GameFormPage from './GameFormPage'

class App extends Component {
  render() {
    return (
      <Container textAlign='center' >
        <Menu compact>
          <Menu.Item>
            <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item>
            <Link to='/games'>Games </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/games/new'>New Game </Link>
              </Menu.Item>
          </Menu>
        <div>
          
          <Route exact path='/games' component={GamesPage} />
          <Route exact path='/games/new' component={GameFormPage} />
          <Route exact path='/game/:_id' component={GameFormPage} />
          
        </div>
      </Container>
    );
  }
}

export default App;
