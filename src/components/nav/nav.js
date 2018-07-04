import React from 'react';
import './nav.css';


class NavBar extends React.Component {
    render() {
        return (
            <div className="topnav">
                <div>Logo</div>
                <a className="nav" href="#about">Login</a>
            </div>
        );
    }
}

export default NavBar;