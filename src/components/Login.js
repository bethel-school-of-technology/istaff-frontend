import React, { Component } from "react";
import axios from "axios";

export default class Login1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit(event) {
        const { username, password } = this.state;

        axios
            .post(
                "http://localhost:3001/sessions",
                {
                    user: {
                        username: username,
                        password: password
                    }
                },
                { withCredentials: true }
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
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={this.state.email}
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