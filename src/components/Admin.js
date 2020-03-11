import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";

import CreateAccount from './CreateAccount';
import EmployeeList from './EmployeeList';

export default class Manager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: 'true'
        }

    }
    handleCheck = e => {
        if (this.state.active === 'true') {
            this.setState({active: 'false'})
        } else {
            this.setState({active:'true'})
        }
  
}
submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:3001/users/admin', this.state)
        .then(response => {
            document.getElementById('idcomp').setAttribute('value', localStorage.getItem('idcomp'));
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}
    render() {
        return (
            <div>
                <h1>Admin Portal</h1>
                <CreateAccount /><br />
                <EmployeeList />
                <input type='checkbox' name ='Disable User'  onChange={this.handleCheck} /><br />
                <button type='submit'>Submit</button>
            </div>
                  
        );
    };
};
