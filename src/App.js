import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import NavBar from './components/NavBar';
import Form from './components/Form';
import Profile from './components/Profile';
import Home from './components/Home';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  //CHECK GET REQUEST TO BACKEND FOR CORRECT URL

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/users/login", { withCredentials: true })
      .then(response => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/"
            render={props => (
              <Home
                {...props}
                handleLogin={this.handleLogin}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
          <Route exact path="/profile"
            render={props => (
              <Profile
                {...props}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <Route exact path="/form" component={Form} />
        </div>
      </Router>
    );
  }
}

export default App;