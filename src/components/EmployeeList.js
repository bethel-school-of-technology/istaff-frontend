import React, { Component } from 'react';
import axios from "axios";

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);

        console.log('Employee List is active');

        this.state = {
            users: [],
        };

        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:3001/users')
            .then(res => {
                console.log(res.data)
                const users = res.data.map(obj => ({ idemp: obj.idemp, firstName: obj.firstName, lastName: obj.lastName }));
                this.setState({ users });
                console.log(users);
            });
    }

    //Add a prompt in handleDelete() so the employee doesn't accidentally get deleted!

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

    handleEdit(event) {
        console.log("Button Click Works!")
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
                                <button onClick={this.handleEdit}>Update</button>
                                <button onClick={() => this.handleDelete(user.idemp)}>Delete</button>
                            </div>
                        )
                    })}
                </ul>
            </div>
        );
    }
}