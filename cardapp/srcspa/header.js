import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Header extends Component {

    render() {
        return (

            <ul class="nav">
                <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about/Delhi">About Delhi</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/about/Bengaluru">About Bengaluru</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/login">Log In</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/user">User</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/doesnotexist">Does not exist</Link>
                </li>
            </ul>

        );
    }
}

export default Header;