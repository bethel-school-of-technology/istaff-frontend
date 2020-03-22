import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";

export default class Logout extends Component {
    constructor(props) {
      super(props);
 
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
   }
  
    handleLogoutClick = () => {
    console.log('STUFF')
     return <Redirect to='/'/>
    }
    render() {
        return (
          <div>
            {/* <button onClick={() => this.handleLogoutClick()}>Logout</button> */}
            <Link to='/'>Logout</Link>
          </div>
        );
      }
}
