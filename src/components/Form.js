import React, { Component } from 'react';

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            middleInitial: '',
            dob: '',
            hireDate: '',
            username: ''
        }
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleMiddleInitialChange = (event) => {
        this.setState({
            middleInitial: event.target.value
        })
    }

    handleBirthdayChange = (event) => {
        this.setState({
            dob: event.target.value
        })
    }

    handleHireDateChange = (event) => {
        this.setState({
            hireDate: event.target.value
        })
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`
        ${this.state.firstName} 
        ${this.state.lastName} 
        ${this.state.middleInitial} 
        ${this.state.dob} 
        ${this.state.hireDate} 
        ${this.state.username}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <h1>Create Employee Account</h1>
                <label>First Name: </label>
                <input type='text' value={this.state.firstName} onChange={this.handleFirstNameChange} /><br />
                <label>Last Name: </label>
                <input type='text' value={this.state.lastName} onChange={this.handleLastNameChange} /><br />
                <label>Middle Initial: </label>
                <input type='text' value={this.state.middleInitial} onChange={this.handleMiddleInitialChange} /><br />
                <label>Date of Birth: </label>
                <input type='date' value={this.state.dob} onChange={this.handleBirthdayChange} /><br />
                <label>Hire Date: </label>
                <input type='date' value={this.state.hireDate} onChange={this.handleHireDateChange} /><br />
                <label>Username: </label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange} /><br />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form;