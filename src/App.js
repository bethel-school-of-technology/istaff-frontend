import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import NavBar from './components/NavBar';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Login} />
          <Route exact path="/CreateAccount" component={CreateAccount} />
          <Route exact path="/Form" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;
