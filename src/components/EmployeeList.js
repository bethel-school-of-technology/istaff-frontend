import React, { Component } from 'react';
import axios from "axios";

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);

        console.log('Employee List is active');

        this.state = {
            users: []
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
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
                const users = res.data.map(obj => ({ idemp: obj.idemp, firstName: obj.firstName, lastName: obj.lastName, active: obj.active}));
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
    submitHandler = (idemp) => {
        // e.preventDefault();
        //console.log(this.state);
        console.log('WHERE IS SHE!!!!')
        console.log(this.state.users);
        axios.post('http://localhost:3001/users/'+ idemp, this.state.users)
            .then(response => {
                console.log(response)
    
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h1>Employee List</h1>
                <ul>
                    {this.state.users.map((user, index) => {
                        return (
                            <div key={index}>
                                <h3>{user.firstName} {user.lastName}</h3>
                                <button>Edit</button><button onClick={() => this.handleDelete(user.idemp)}>Delete</button>
                              <div>
                              <input type='checkbox' name ='Disable User'  onChange={event=> this.handleCheck(user.idemp)} /><br />
                                <button onClick={() => this.submitHandler(user.idemp)} >Disable User</button>
                                </div>
                              </div>   
                        )
                    })}
                </ul>
            </div>
        );
    }
}