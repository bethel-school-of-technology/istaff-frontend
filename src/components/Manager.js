import React, { Component } from 'react';

import CreateAccount from './CreateAccount';
import EmployeeList from './EmployeeList';
import Logout from './Logout';

export default class Manager extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    };

    render() {
        return (
            <div>
                <Logout  />
                <h1>Manager Portal</h1>
                <CreateAccount /><br />
                <EmployeeList />
            </div>
        );
    };
};
//export default Manager;