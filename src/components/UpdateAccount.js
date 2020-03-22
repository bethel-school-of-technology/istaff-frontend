import React, { Component } from 'react';
import axios from 'axios';

export default class UpdateAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            idemp: this.props.idemp,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            middleName: this.props.middleName,
            dob: this.props.dob,
            hireDate: this.props.hireDate,
            userId: this.props.userId,
            email: this.props.email,
            idcomp: localStorage.getItem('idcomp'),
            password: this.props.password,
            manager: this.props.manager,
            jwt: localStorage.getItem('jwt')
        }
    }
    //THIS ASSIGNS TRUE OR FALSE FOR THE MANAGER CHECKBOX
    handleCheck = e => {
        if (this.state.manager === '0') {
            this.setState({ manager: '1' })
        } else {
            this.setState({ manager: '0' })
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3001/users/updateAccount', this.state)
            .then(response => {
                console.log(response)
                this.setState({
                    idemp: response.data.idemp,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    middleName: response.data.middleName,
                    dob: response.data.dob,
                    hireDate: response.data.hireDate,
                    userId: response.data.userId,
                    password: response.data.password,
                    email: response.data.email,
                    idcomp: localStorage.getItem('idcomp'),
                    manager: response.data.manager,
                    jwt: localStorage.getItem('jwt')
                })
                alert("User " + this.state.userId + " was updated")

                //document.getElementById('list').innerHTML = <EmployeeList />;
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { firstName, lastName, middleName, dob, hireDate, userId, password, email, idcomp } = this.state
        return (
            
            <div className="App">
                
                {/* <h3>Create Employee Account</h3> */}
                <div class="input-group input-group-md mb-8 col-12">
                    <form class="form-control" onSubmit={this.submitHandler} method="user" className="right">
                        <div class="row">
                            <div class="col-4">
                                <label>First Name</label><input class="form-control" type='text' name='firstName' value={firstName} onChange={this.changeHandler} placeholder='First Name' />
                            </div>
                            <div class="col-4">
                               <label>Last Name</label><input class="form-control" type='text' name='lastName' value={lastName} onChange={this.changeHandler} placeholder='Last Name' />
                            </div>
                            <div class="col-4">
                                <label>Middle Name</label><input class="form-control" type='text' name='middleName' value={middleName} onChange={this.changeHandler} placeholder='Middle Name' />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label>DOB</label><input class="form-control" aria-label="Date of Birth" type='date' name='dob' value={dob} onChange={this.changeHandler} placeholder='Date of Birth' />
                            </div>
                            <div class="col-4">
                                <label>Hire Date</label><input class="form-control" type='date' name='hireDate' value={hireDate} onChange={this.changeHandler} placeholder='Hire Date' />
                            </div>
                            <div class="col-4">
                                <label>UserId</label><input class="form-control" type='text' name='userId' value={userId} onChange={this.changeHandler} placeholder='UserID' />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6">
                                <label>Password</label><input class="form-control" type='password' name='password' value={password} onChange={this.changeHandler} placeholder='Password' />
                            </div>
                            <div class="col-6">
                                <label>Email</label><input class="form-control" type='email' name='email' value={email} onChange={this.changeHandler} placeholder='Email' />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <label>CompanyID</label><input class="form-control" id="idcomp" type='number' name='idcomp' value={idcomp} onChange={this.changeHandler} readOnly />
                            </div>
                            <div class="col-2">
                                <label>Manager:</label><input class="form-control" type='checkbox' name='manager' onChange={this.handleCheck} />
                            </div>
                            <div class="col-12">
                                <button class="form-control btn btn-success" type='submit'>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}