import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            password: "",
            loginErrors: ""
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/profile");
      }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        const { userId, password } = this.state;

        axios
            .post(
                "http://localhost:3001/users/login",
                {
                    userId,
                    password
                },
            )
            .then(response => {
                if (response.data.logged_in) {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("login error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Welcome to iStaff!</h1><br />
                <h2>Login</h2>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="string"
                        name="userId"
                        placeholder="Username"
                        value={this.state.userId}
                        onChange={this.onChange}
                        required
                    /><br />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChange}
                        required
                    /><br />

                    <button type="submit">Login</button><button>Forgot Password</button><br />
                    <button>Manager Sign Up!</button>
                </form>
            </div>
        );
    }
}








