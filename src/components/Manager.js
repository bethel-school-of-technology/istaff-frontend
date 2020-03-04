import React, { Component } from 'react';

import CreateAccount from './CreateAccount';
import EmployeeList from './EmployeeList';

export default class Manager extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    };

    render() {
        return (
            <div>
                <h1>Manager Portal</h1>
                <CreateAccount /><br />
                <EmployeeList />
            </div>
        );
    };
};