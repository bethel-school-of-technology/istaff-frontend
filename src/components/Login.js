import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import logo from '../Images/Logo19.png';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userId: "",
            password: "",
            loginErrors: ""
        };
        localStorage.clear();
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    //ALLOWS INPUT STATE TO CHANGE USING DEFINED VALUES

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
                console.log('Sent Username and Password'),
            )
            .then(response => {
                //ROUTE TO EMPLOYEE PROFILE
                if (response.data.logged_in) {
                    console.log('Received Logged_In Response')
                    this.props.handleSuccessfulAuth(response.data)

                    return <Redirect to="/profile" />
                }
                //ROUTE TO MANAGER PROFILE
                else if (response.data.logged_in_manager) {
                    console.log('Received Logged_In_Manager Response')
                    this.props.handleSuccessfulAuth(response.data)

                    return <Redirect to="/manager" />
                }
                //ROUTE TO ADMIN PROFILE
                else if (response.data.logged_in_admin) {
                    console.log('Received Logged_In_Admin Response')
                    this.props.handleSuccessfulAuth(response.data)


                    return <Redirect to="/admin" />
                }
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
                <img src={logo} alt="Logo" /><br />
                {/* <h2>Login</h2> */}
                <form onSubmit={this.onSubmit}>
                    <div class="row">
                            <input
                                class="form-control col-3"
                                type="string"
                                name="userId"
                                placeholder="Username"
                                value={this.state.userId}
                                onChange={this.onChange}
                                required
                            />
                    </div>
                    <div class="row">
                        <input
                            class="form-control col-3"
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.onChange}
                            required
                        />
                    </div>

                    <button class="btn btn-primary col-1" type="submit">Login</button><button class="btn btn-secondary col-2">Forgot Password</button><br />
                </form>
            </div>
        );
    }
}



