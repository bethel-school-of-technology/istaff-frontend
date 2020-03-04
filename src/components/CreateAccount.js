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
            password: ''
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
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { firstName, lastName, middleName, dob, hireDate, userId, password } = this.state
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
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

// import React, { Component } from 'react';

// export class CreateAccount extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             firstName: '',
//             lastName: '',
//             middleInitial: '',
//             dob: '',
//             hireDate: '',
//             username: ''
//         }
//     }

//     handleFirstNameChange = (event) => {
//         this.setState({
//             firstName: event.target.value
//         })
//     }

//     handleLastNameChange = (event) => {
//         this.setState({
//             lastName: event.target.value
//         })
//     }

//     handleMiddleInitialChange = (event) => {
//         this.setState({
//             middleInitial: event.target.value
//         })
//     }

//     handleBirthdayChange = (event) => {
//         this.setState({
//             dob: event.target.value
//         })
//     }

//     handleHireDateChange = (event) => {
//         this.setState({
//             hireDate: event.target.value
//         })
//     }

//     handleUsernameChange = (event) => {
//         this.setState({
//             username: event.target.value
//         })
//     }

//     handleSubmit = (event) => {
//         alert(`
//         ${this.state.firstName} 
//         ${this.state.lastName} 
//         ${this.state.middleInitial} 
//         ${this.state.dob} 
//         ${this.state.hireDate} 
//         ${this.state.username}`)
//         event.preventDefault()
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div>
//                     <h1>Create Employee Account</h1>
//                     <label>First Name: </label>
//                     <input type='text' value={this.state.firstName} onChange={this.handleFirstNameChange} /><br />
//                     <label>Last Name: </label>
//                     <input type='text' value={this.state.lastName} onChange={this.handleLastNameChange} /><br />
//                     <label>Middle Initial: </label>
//                     <input type='text' value={this.state.middleInitial} onChange={this.handleMiddleInitialChange} /><br />
//                     <label>Date of Birth: </label>
//                     <input type='date' value={this.state.dob} onChange={this.handleBirthdayChange} /><br />
//                     <label>Hire Date: </label>
//                     <input type='date' value={this.state.hireDate} onChange={this.handleHireDateChange} /><br />
//                     <label>Username: </label>
//                     <input type='text' value={this.state.username} onChange={this.handleUsernameChange} /><br />
//                 </div>
//                 <button type='submit'>Submit</button>
//             </form>
//         )
//     }
// }

// export default CreateAccount;