import React, { Component } from 'react';
import axios from "axios";

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);

        console.log('Employee List is active')

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/users')
            .then(res => {
                console.log(res.data)
                const users = res.data.map(obj => ({ firstName: obj.firstName, lastName: obj.lastName }));
                this.setState({ users });
                console.log(users);
            });
    }

    render() {
        return (
            <div>
            <h1>Employee List</h1>
            <ul>
                {this.state.users.map(function (user, index) {
                    return (
                        <div key={index}>
                            <h3>{user.firstName} {user.lastName}</h3>
                        </div>
                    )
                }
                )}
            </ul>
            </div>
        );

    }

}
