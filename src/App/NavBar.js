import React, {Component} from "react";
import PropTypes from "prop-types";
import "../styles/navbar.css";
import {Link} from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <ul className="NavBar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
        );
    }
}


export default NavBar;