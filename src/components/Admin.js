import React, { Component } from 'react';
import CreateAccount from './CreateAccount';
import EmployeeList from './EmployeeList';
import logo from '../Images/Logo19.png';
import Logout from './Logout'

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
                <img src={logo} alt="Logo"/><br />
                <h1>Admin Portal</h1>
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Create Account
                    </button>
                    <div className="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <CreateAccount />
                    </div>
                </div><br/>
                {/* <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Employee List
                    </button>
                    <div class="dropdown-menu dropdown-menu" aria-labelledby="dropdownMenuButton">
                       
                    </div>
                </div> */}
                <div>
                   <EmployeeList /> 
                </div>
            </div>
        );
    };
};