import React, { Component } from 'react';
import logo from '../Images/Logo19.png';
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
                <img src={logo} alt="Logo"/><br />
                <h1>Manager Portal</h1>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Create Account
                    </button>
                    <div class="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <CreateAccount />
                    </div>
                </div><br/>
                <div>
                       <EmployeeList />
                    
                </div>
            </div>
        );
    };
};
//export default Manager;