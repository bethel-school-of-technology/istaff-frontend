import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: ''
        };
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post("http://localhost:3001/users/emps", this.state)
            .then(response => {
                console.log(response);
            })
        // return (
        //     <div>
        //         <p>Your password has been reset.</p>
        //         <div>
        //             <Link to="http://localhost:3000">
        //                 Please click here to login with your new credentials.
        //     </Link>
        //         </div>
        //     </div>
        // );
    }

    render() {
        const { password, email } = this.state
        return (
            <div className="App">
                <h1>Reset Password Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange} required /><br />
                    <input type="string" name="password" placeholder="New Password" value={password} onChange={this.handleChange} required />
                    <br />
                    {/* <input
                        type="string"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        onSubmit={this.validatePassword}
                        required
                    />
                    <br /> */}
                    <button
                        type="submit"
                            > Submit New Password
          </button>
                </form>
            </div>
        );
    }
}