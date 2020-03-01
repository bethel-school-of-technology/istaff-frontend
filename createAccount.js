import React from 'react';
import axios from 'axios';
​
​
class createAccount extends Component {
     
    constructor(props) {
        super(props)
​
        this.state = {
            firstName: '',
            middleInitial: '',
            lastName: '',            
            dob: '',
            hireDate: '',
            username: ''
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleMiddleInitialChange = this.handleMiddleInitialChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleBirthdayChange = this.handleBirthdayChange.bind(this);
        this.handleHireDateChange = this.handleHireDateChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
​
​
​
​
    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
​
    handleMiddleInitialChange = (event) => {
        this.setState({
            middleInitial: event.target.value
        })
    }
 
    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
​
    handleBirthdayChange = (event) => {
        this.setState({
            dob: event.target.value
        })
    }
​
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
​
    handleSubmit = (event) => {
        event.preventDefault();
        const newEmployee = {
            firstName: this.state.firstName,
            middleInitial: this.state.middleInitial,
            lastName: this.state.lastName,            
            dob: this.state.dob,
            hireDate: this.state.hireDate,
            username:this.state.username,
        }
        
        axios
        .post(
            "http://localhost:3001/users/login",
            {
                firstName,
                middleInitial,
                lastName,            
                dob,
                hireDate,
                username
            },
            console.log('Employee Account Created')
        )
        .then(response => { //RESPONSE INITIATED WHEN BACKEND RECEIVES CREDENTIALS
            console.log(response);
            if (response.data.create_Account) { //IF new account is created
                this.props.handleSuccessAccountCreation(response.data); //SUCCESSFUL Account creation
                return <Redirect to="/profile"/> //yes, should go to new profile
            }
            console.log('Received Logged_In Response')
        })
        .catch(error => {
            console.log("Cannot Create Account", error); //ERROR PROVIDED IN THE CONSOLE IF Account is not created
        });               
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type='text' value={this.state.firstName} onChange={this.handleFirstNameChange}></input>
                    
                    <label>Middle Initial:</label>
                    <input type='text' value={this.state.middleInitial} onChange={this.handleMiddleInitialChange}></input>
                   
                    <label>Last Name:</label>
                    <input type='text' value={this.state.lastName} onChange={this.handleLastNameChange}></input>
​
                    <label>Date of Birth:</label>
                    <input type='text' value={this.state.dob} onChange={this.handleBirthdayChange}></input>
​
                    <label>Date of Hire:</label>
                    <input type='text' value={this.state.hireDate} onChange={this.handleHireDateChange}></input>
​
                    <label>Username:</label>
                    <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
​
               </div>
               <button type='submit'>Create New Account!</button>
            </form>
        );
    }
}
​
​
​
export default createAccount;
