import React, { Component, Fragment } from 'react';

export default class EmployeeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            users: [],
            error: null
        }
    }

    fetchUsers() {
        fetch(`http://localhost:3001/users`)
            // We get the API response and receive data in JSON format...
            .then(response => response.json())
            // ...then we update the users state
            .then(data =>
                this.setState({
                    users: data,
                    isLoading: false,
                })
            )
            // Catch any errors we hit and update the app
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.fetchUsers();
    }

    render() {
        const { isLoading, users, error } = this.state;
        return (
            <Fragment>
                <h1>Employee List</h1>
                {error ? <p>{error.message}</p> : null}
                {!isLoading ? (
                    users.map(user => {
                        const { idemp, firstName, lastName } = user;
                        return (
                            <div key={idemp}>
                                <p>{firstName}</p>
                                <p>{lastName}</p>
                                <hr />
                            </div>
                        );
                    })
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                        <h3>Loading...</h3>
                    )}
            </Fragment>
        )
    }
}


// import React, { Component } from 'react';
// import axios from "axios";

// export default class EmployeeList extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             users: []
//         }
//     }

//     componentDidMount() {
//         axios.get('https://localhost:3001/users')
//             .then(res => {
//                 const users = res.data.results.map(obj => ({ firstName: obj.firstName, lastName: obj.lastName }));
//                 this.setState({ users });
//                 console.log(users);
//             });
//     }

//     render() {
//         return (
//             <ul>
//                 {this.state.users.map(function(user, idemp) {
//                     return (
//                         <div key={idemp}>
//                             <h1>Employee List</h1>
//                             <h3>{user.firstName}+' '+{user.lastName}</h3>
//                         </div>
//                     )
//                 }
//                 )}
//             </ul>
//         );

//     }

// }