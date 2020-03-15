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
    }

    componentDidMount() {
        let data = { ...this.state, idcomp: localStorage.getItem('idcomp')}
        //console.log(localStorage.getItem('idcomp'));
        axios.post('http://localhost:3001/users', data)
            .then(res => {
                console.log(res.data)
                const users = res.data.map(obj => ({ idemp: obj.idemp, firstName: obj.firstName, lastName: obj.lastName }));
                this.setState({ users });
                console.log(users);
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
                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}