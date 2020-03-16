import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirmPassword: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    //VALIDATION ON PASSWORD VS. CONFIRMPASSWORD
    validatePassword() {
        return (
            this.state.password.length > 0 &&
            this.state.password === this.state.confirmPassword
        )
    }
    handleSubmit(event) {

        const { email, password } = this.state;
        axios
            .post("http://localhost:3001/emps",
                //may need to alter address
                {
                    email,
                    password
                },
            );

        return (
            <div>
                <p>Your password has been reset.</p>
                <div>
                    <Link to="http://localhost:3000">
                        Please click here to login with your new credentials.
            </Link>
                </div>
            </div>
        );




    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
    }
    render() {
        return (
            <div>
                <h1>Reset Password Form</h1>
                <form onSubmit={this.handlePasswordChange}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        defaultValue={this.state.email}
                        //onChange={this.handleChange}
                        required />
                    <br />
                    <input
                        type="string"
                        name="password"
                        placeholder="New Password"
                        defaultValue={this.state.password}
                        //onChange={this.handleChange}
                        required />
                    <br />
                    <input
                        type="string"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        defaultValue={this.state.confirmPassword}
                        //onChange={this.validatePassword}
                        required
                    />
                    <br />
                    <button
                        type="submit"
                        onSubmit={this.handleSubmit}> Submit New Password
          </button>
                </form>
            </div>
        );
    }
}