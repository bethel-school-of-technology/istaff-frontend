import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import Manager from './components/Manager';
import Profile from './components/Profile';
import Home from './components/Home';
import Admin from './components/Admin';

class App extends Component {
  constructor() {
    super();

    //DEFAULT STATE OF loggedInStatus FOR USER IS "NOT_LOGGED_IN"

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  //checkLoginStatus() IS CALLED IN componentDidMount() BELOW
  //GETS LOGIN CREDENTIALS FROM MYSQL AND GIVES RESPONSE
  //CHANGES STATE OF loggedInStatus TO "LOGGED_IN" WITH SUCCESSFUL LOGIN
  //STATE OF loggedInStatus REMAINS "NOT_LOGGED_IN" IF UNSUCCESSFUL

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/users/login")
      .then(response => {
        if (
          response.data.logged_in && //IF logged_in IS TRUE
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN", //loggedInStatus CHANGES TO "LOGGED_IN" IF logged_in IS TRUE
            user: response.data.user
          });
        } else if (
          !response.data.logged_in & //IF logged_in IS FALSE
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN", //loggedInStatus REMAINS "NOT_LOGGED_IN" IF logged_in IS FALSE
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

  //UPDATES STATE OF loggedInStatus TO "LOGGED_IN" WITH SUCCESSFUL LOGIN

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  //COMPONENTS ARE ROUTED HERE
  //ROUTES FOR HOME & PROFILE HAVE ALL PROPS AVAILABLE TO THEM

  render() {
    return (
      <Router>
        <div className="App">
          {/* <NavBar /> */}
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
          <Route exact path="/manager"
            render={props => (
              <Manager
                {...props}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
          <Route exact path="/admin"
            render={props => (
              <Admin
                {...props}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;