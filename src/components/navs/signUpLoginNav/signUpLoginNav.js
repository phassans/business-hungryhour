import React from 'react';
import './signUpLoginNav.css';
import { Link } from 'react-router-dom'

class SignUpLoginNav extends React.Component {
    render() {
        return (
            <div className="topnav" >
                <div><img src={require('../../../assets/logo.png')} style={{ width: 160, height: 25}} /></div>
                <Link className="nav" to={`/${this.props.btnTitle}`} >{this.props.btnTitle}</Link>
            </div>
        );
    }
}

export default SignUpLoginNav;