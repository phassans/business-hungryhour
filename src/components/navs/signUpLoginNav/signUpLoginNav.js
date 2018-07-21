import React from 'react';
import './signUpLoginNav.css';
import { Link } from 'react-router-dom'

class SignUpLoginNav extends React.Component {
    render() {
        return (
            <div className="topnav nav navbar-default SLPageNavbar" >
                <div><Link to='/' >  <img src={require('../../../assets/logo.png')} className='logoImage' /> </Link></div>
                <Link className="nav" to={`/${this.props.btnTitle}`} >{this.props.btnTitle=== 'Signup' ? 'Sign Up' : 'Log In'}</Link>
            </div>
        );
    }
}

export default SignUpLoginNav;