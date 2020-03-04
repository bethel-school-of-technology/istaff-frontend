import React, { Component } from "react";

import Login from "./Login";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    //CALLS handleLogin() FUNCTION DEFINED IN APP.JS

    handleSuccessfulAuth(data) {
        console.log(data);
        this.props.handleLogin(data);
        if (data.hasOwnProperty('logged_in')) {
            this.props.history.push("/profile");
        } else if (data.hasOwnProperty('logged_in_manager')) {
            this.props.history.push("/manager");
        } else if (data.hasOwnProperty('logged_in_admin')) {
            this.props.history.push("/admin");
        }
    }

    //CURRENTLY RENDERS ONLY LOGIN COMPONENT ON DEFAULT PATH
    //LOGIN COMPONENT WIRED HERE TO AUTHENTICATE SUCCESSFUL LOGIN & REDIRECT

    render() {
        return (
            <div>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
            </div>
        );
    }
}