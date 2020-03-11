import React, { Component } from 'react';
import axios from 'axios';

export default class CreateAccount extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            middleName: '',
            dob: '',
            hireDate: '',
            userId: '',
            password: '',
            email: '',
            idcomp: localStorage.getItem('idcomp'),
            manager: '0'
        }
    }

        handleCheck = e => {
            if (this.state.manager === '0') {
                this.setState({manager: '1'})
            } else {
                this.setState({manager:'0'})
            }
        }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('http://localhost:3001/users/signup', this.state)
            .then(response => {
                document.getElementById('idcomp').setAttribute('value', localStorage.getItem('idcomp'));
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { firstName, lastName, middleName, dob, hireDate, userId, password, email, idcomp } = this.state
        return (
            <div className="App">
                <h1>Create Employee Account</h1>
                <form onSubmit={this.submitHandler} method="user" className="right">
                    <label>First Name: </label>
                    <input type='text' name='firstName' value={firstName} onChange={this.changeHandler} /><br />
                    <label>Last Name: </label>
                    <input type='text' name='lastName' value={lastName} onChange={this.changeHandler} /><br />
                    <label>Middle Name: </label>
                    <input type='text' name='middleName' value={middleName} onChange={this.changeHandler} /><br />
                    <label>Date of Birth: </label>
                    <input type='date' name='dob' value={dob} onChange={this.changeHandler} /><br />
                    <label>Hire Date: </label>
                    <input type='date' name='hireDate' value={hireDate} onChange={this.changeHandler} /><br />
                    <label>Username: </label>
                    <input type='text' name='userId' value={userId} onChange={this.changeHandler} /><br />
                    <label>Password: </label>
                    <input type='password' name ='password' value={password} onChange={this.changeHandler} /><br />
                    <label>Email: </label>
                    <input type='email' name ='email' value={email} onChange={this.changeHandler} /><br />
                    <label>Company: </label>
                    <input id="idcomp"  type='number' name ='idcomp' value={idcomp} onChange={this.changeHandler} readOnly/> <br />
                    <label>Manager: </label>
                    <input type='checkbox' name ='manager'  onChange={this.handleCheck} /><br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

