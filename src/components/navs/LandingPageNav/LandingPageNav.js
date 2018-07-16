import React from 'react';
import './LandingPageNav.css';
import { Link } from 'react-router-dom';

class LandingPageNav extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default" style={{marginBottom: 0}} >
                <div className='navbar-header' >
                    <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#nav-collapse' >
                        <i className="fas fa-bars "></i>
                    </button>
                    <div className='navbar-brand logo' >
                        <img src={require('../../../assets/logo.png')} style={{ width: 160, height: 25 }} />
                    </div>
                </div>
                <div className='collapse navbar-collapse' id='nav-collapse'>
                    <ul className='nav navbar-nav'>
                        <li><Link to="/Signup" className='landingSignUp' >Signup</Link></li>
                        <li><Link to="/Login">Login</Link></li>
                        <li className='extraMargin' ><a href='#' >Plans 7 Pricing</a></li>
                        <li><a href='#' >Benefits</a></li>
                        <li><a href='#' >OverView</a></li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default LandingPageNav;