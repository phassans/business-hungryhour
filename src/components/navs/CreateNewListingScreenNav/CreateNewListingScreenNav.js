import React from 'react';
import './CreateNewListingNavBar.css';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap'
import { Redirect } from 'react-router';
import isUserAuthenticated from '../../../utils/auth'

class CreateNewListingNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false,
            authenticated: false,
            account: false,
            userName: '',
            userId: '',
        }
        this.logOut = this.logOut.bind(this);
        this.myAccount = this.myAccount.bind(this);
    }

    componentWillMount() {
        console.log(` state ${this.state.props}`);
        if (isUserAuthenticated()) {
            let user = JSON.parse(localStorage.getItem('user'));
            this.setState(
                {
                    authenticated: true,
                    userName: user.userName,
                    userId: user.userId,
                }
            );
            console.log(`userName ${user.userName}`);
        }
    }

    logOut = () => {
        console.log('logout was clicked.');
        localStorage.removeItem('user');
        this.setState({authenticated: false});
      };

      myAccount = () => {
        console.log('myAccount was clicked.');
        this.setState({account: true});
      };

    render() {
        const isLoggedIn = this.state.authenticated;
        const userName = this.state.userName;
        
        if (!isLoggedIn) {
            return <Redirect push to="/Login" />;
        }
        
        if (window.location.pathname != '/MyAccount' && this.state.account) {
            return <Redirect push to="/MyAccount" />;
        }

        let makeBlock = this.state.dropdown ? 'makeBlock' : '';
        return (
            <nav className="navbar navbar-default">
                <div className='navbar-brand logo' >
                    <Link to={isLoggedIn ? '/MyListing' : '/'} >  <img src={require('../../../assets/logo.png')} className='logoImage' /> </Link>
                </div>
                <div className='collapse navbar-collapse' id='nav-collapse'>

                    <ul className='nav newlistNavBtn'>
                        <li className='newListNavBtnLeft' >
                            <Link className='link' to='/MyListing' >My Listings</Link>
                        </li>
                        <li className='newListNavBtnLeft' >
                            <Link className='link' to='/PlanAndPricing' >Plans and Pricing</Link>
                        </li>
                        <li className='newListNavBtnRight' >
                            <div className="dropdown" >
                                <button type="button" onClick={() => this.setState({ dropdown: !this.state.dropdown })} >
                                    <span className="glyphicon glyphicon-user"></span>
                                    <i className="fas fa-caret-down dropDownIcon"></i>
                                </button>
                                <div className={`dropdown-content ${makeBlock}`}>
                                    <a href="#" onClick={this.myAccount}>Account</a>
                                    <a href="#" onClick={this.logOut}>Logout</a>
                                </div>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#!">Dropdown link</a>
                                    <a className="dropdown-item" href="#!">Dropdown link</a>
                                </div>
                            </div>
                        </li>
                        <li className='newListNavBtnRight welcomeHeading'>
                            Welcome {userName}!
                        </li>
                        <li className='newListNavBtnRight listRightBtnMargin CLBorderButton' >
                            <Link className='link' to='/CreateList' >Create Listing</Link>
                        </li>
                        <li className='newListNavBtnRight' >
                            <Link  to="/MyAccount" className='link'>Upgrade</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default CreateNewListingNavBar;