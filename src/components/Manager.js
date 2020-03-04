import React, { Component } from 'react';

import CreateAccount from './CreateAccount';

export default class Manager extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    };

    render() {
        return (
            <div>
                <h1>Manager Portal</h1>
                <CreateAccount />
            </div>
        );
    };
};

// function Manager() {
//     return (
//         <div>
//             <h1>Manager Page</h1>
//         </div>
//     )
// }

// export default Manager;