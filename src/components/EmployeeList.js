import React, { Component } from 'react';
import axios from "axios";

import Logout from './Logout';

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);

        console.log('Employee List is active');

        this.state = {
            users: [] 
        };

        this.handleDelete = this.handleDelete.bind(this);
        //this.handleCheck = this.handleCheck.bind(this);
    }
    handleCheck = (idemp) => {
        var data = [...this.state.users]; 
        var index = data.findIndex(obj => obj.idemp === idemp);
         if (data[index].active === '0') {
             data[index].active = '1';
         }
     else data[index].active = '0';
     this.setState({data});
 }

    componentDidMount() {
        let data = { ...this.state, idcomp: localStorage.getItem('idcomp')}
        axios.post('http://localhost:3001/users', data)
            .then(res => {
                //console.log(res.data)
                const users = res.data.map(obj => ({ idemp: obj.idemp, firstName: obj.firstName, lastName: obj.lastName, active:'0'}));
                this.setState({ users });
               // console.log(userdata);
                // const activedata = res.data.map(obj => ({active:'0'}));
                // this.setState({active:activedata})
                // console.log(activedata)
            });
    }

    handleDelete = (idemp) => {
        axios.delete(`http://localhost:3001/users/` + idemp)
            .then(res => {
                console.log(res)
                console.log('it works')
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    activateUser = (idemp) => {
    console.log('Am I working?')
    console.log(this.state.users);
    axios.post('http://localhost:3001/users/'+ idemp, this.state)
    .then(res=>{
        console.log(res)
        this.setState({
            active: '1'
        })
    })
    }
    submitHandler = (idemp) => {
        // e.preventDefault();
        //console.log(this.state);
        console.log('no cake')
        console.log(this.state.users);
        axios.post('http://localhost:3001/users/'+ idemp, this.state)
            .then(res => {
                console.log(res)
                this.setState({
                    active: '0'
                })
    
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
            <Logout  />
                <h1>Employee List</h1>
                <ul>
                    {this.state.users.map((user, index) => {
                        return (
                            <div key={index}>
                                <h3>{user.firstName} {user.lastName}</h3>
                                <button>Edit</button><button onClick={() => this.handleDelete(user.idemp)}>Delete</button>
                              <div>
                                <button onClick={() => this.submitHandler(user.idemp)} >Disable User</button>
                                <button onClick={() => this.activateUser(user.idemp)} >Activate User</button>
                                <input type='checkbox' name ='Disable User'  onChange={event=> this.handleCheck(user.idemp)} /><br />
                                 </div>
                              </div>   
                        )
                    })}
                </ul>
            </div>
        );
    }
}