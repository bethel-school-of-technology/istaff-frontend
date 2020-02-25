import React, { Component } from "react";

import Login from "./Login";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    //CALLS handleLogin() FUNCTION DEFINED IN APP.JS

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/profile");
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