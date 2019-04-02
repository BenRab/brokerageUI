import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {stack as Menu} from 'react-burger-menu'
import {Container} from 'react-bootstrap'
import SecurityPositionsLoader from './functional/SecurityPositionsLoader';

function Index() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

class App extends Component {
  render() {
    return (
      <div id="outer-container">
        <Router>
          <Menu pageWrapId={ "page-wrap" }>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="positions" className="menu-item" href="/positions">Security Position</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
          </Menu>

          <main id="page-wrap">
            <Container>
              <Route path="/" exact component={Index} />
              <Route path="/positions/" component={SecurityPositionsLoader} />
              <Route path="/users/" component={Users} />
            </Container>
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
