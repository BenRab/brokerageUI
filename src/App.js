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
        <Router>
            <Container>
              <Route path="/" exact component={Index} />
              <Route path="/positions/" component={SecurityPositionsLoader} />
              <Route path="/users/" component={Users} />
            </Container>
        </Router>
    );
  }
}

export default App;
