import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/CreateAccount">Create Account</Link></li>
            </ul>
        );
    }
}

export default NavBar;