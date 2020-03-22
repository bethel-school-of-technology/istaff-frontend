import React, { Component } from "react";
import logo from '../Images/Logo19.png';
import Punch from './Punch';
import Schedule from "./Schedule";
import Logout from "./Logout"

//LINE 12 IS A PLACEHOLDER TO SHOW USER LOGIN STATUS
//"NOT_LOGGED_IN" IS DEFAULT STATE FOR PROP DEFINED IN APP.JS
//STATUS CHANGES TO "LOGGED_IN" AFTER SUCCESSFUL LOGIN & REDIRECT

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Logout  />
        <div>
        <img src={logo} alt="Logo"/><br />
          <h1>Employee Profile</h1>
          
        </div>
        <div>
          <Punch />
          <Schedule />
        </div>

      </div>
    );
  };

};