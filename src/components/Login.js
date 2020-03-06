import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom"; 


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
    }


    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //PASSES USERID & PASSWORD FOR AUTHENTICATION WHEN "SUBMIT" BUTTON IS CLICKED

    onSubmit(event) {
        const { userId, password } = this.state;

        //LOGIN CREDNETIALS PROVIDED ARE POSTED TO THE BACKEND FOR AUTHENTICATION
        //SUCCESSFUL LOGIN RETURNS RESPONSE, AUTHENTICATES & REDIRECTS USER

        axios
            .post(
                "http://localhost:3001/users/login",
                {
                    userId,
                    password
                },
                console.log('Sent Username and Password')
            )
            .then(response => { //RESPONSE INITIATED WHEN BACKEND RECEIVES CREDENTIALS
                console.log(response);
                if (response.data.logged_in) { //IF logged_in IS TRUE
                    this.props.handleSuccessfulAuth(response.data); //SUCCESSFUL AUTHENTICATION IS HANDLED
                    return <Redirect to="/profile"/> //USER IS REDIRECTED TO THE PROFILE PAGE
                }
                console.log('Received Logged_In Response')
            })
            .catch(error => {
                console.log("login error", error); //ERROR PROVIDED IN THE CONSOLE IF LOGIN IS UNSUCCESSFUL
            });
        event.preventDefault(); //PREVENTS AUTOMATIC REFRESH WHEN "SUBMIT" BUTTON IS CLICKED
    }

    //LOGIN FORM WIRED TO CHECK USERID & PASSWORD STORED IN DATABASE
    //onSubmit() & onChange() ARE DEFINED ABOVE

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

                    <button type="submit">Login</button>
                    <Link to="/ResetPassword"> <button>Forgot Password</button> </Link>
                        <br />
                    <button>Manager Sign Up!</button>
                </form>
            </div>
        );
    }
}




