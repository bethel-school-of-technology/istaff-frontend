import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";

export default class Reset extends Component {
    constructor(props) {
      super(props);
 
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
   }
  
    handleLogoutClick = () => {
     return <Redirect to='/'/>
    }
    render() {
        return (
          <div>
            <Link to='/reset'/>
          </div>
        );
      }
}