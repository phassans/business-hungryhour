import React from 'react';
import './signUpLoginNav.css';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';
import isUserAuthenticated from '../../../utils/auth'

class SignUpLoginNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            userName: '',
            userId: '',
        }
    }

    componentWillMount() {
        if (isUserAuthenticated()) {
            this.setState(
                {
                    authenticated: true,
                }
            );
        }
    }

    render() {
        if (this.state.authenticated) {
            return <Redirect push to="/MyListing" />;
        }

        return (
            <div className="topnav nav navbar-default SLPageNavbar" >
                <div><Link to='/' >  <img src={require('../../../assets/logo.png')} className='logoImage' /> </Link></div>
                <Link className="nav" to={`/${this.props.btnTitle}`} >{this.props.btnTitle=== 'Signup' ? 'Sign Up' : 'Log In'}</Link>
            </div>
        );
    }
}

export default SignUpLoginNav;