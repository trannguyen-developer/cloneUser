import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

const Header = props => {
    return (
        <div className="header">
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/create-user">Create User</Link>
            </div>
            <h1>
                <Link to="/">
                    Management User
                </Link>
            </h1>
        </div>
    )
}

export default Header