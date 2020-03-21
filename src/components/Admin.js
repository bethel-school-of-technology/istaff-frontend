import React, { Component } from 'react';

import Logout from './Logout';
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
                <Logout  />
                <h1>Admin Portal</h1>
                <CreateAccount /><br />
                <EmployeeList />
            </div>
        );
    };
};