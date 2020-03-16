import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from "react-router-dom";
import CreateAccount from './CreateAccount';
import EmployeeList from './EmployeeList';
export default class Manager extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <h1>Admin Portal</h1>
                <CreateAccount /><br />
                <EmployeeList />
            </div>
        );
    };
};