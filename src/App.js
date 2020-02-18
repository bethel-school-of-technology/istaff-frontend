import React from 'react';
import './App.css';
import Login from './Login';
import CreateAccount from './CreateAccount';
import {Route, Link} from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return <div className="App">
    <NavBar />
    <Route exact path="/" component={Login} />
    <Route exact path="/CreateAccount" component={CreateAccount} />
  </div>
}

export default App;
