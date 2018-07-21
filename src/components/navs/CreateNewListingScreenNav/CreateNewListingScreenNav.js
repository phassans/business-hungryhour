import React from 'react';
import './CreateNewListingNavBar.css';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap'

class CreateNewListingNavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            dropdown: false,
        }
    }
    render() {
        let makeBlock = this.state.dropdown ? 'makeBlock' : '';
        return (
            <nav className="navbar navbar-default">
                <div className='navbar-brand logo' >
                    <Link to='/' >  <img src={require('../../../assets/logo.png')} className='logoImage' /> </Link>
                </div>
                <div className='collapse navbar-collapse' id='nav-collapse'>

                    <ul className='nav newlistNavBtn'>
                        <li className='newListNavBtnLeft' >
                            <a className='link' href='#' >My Listings</a>
                        </li>
                        <li className='newListNavBtnLeft' >
                            <a className='link' href='#' >Plans and Pricing</a>
                        </li>
                        <li className='newListNavBtnRight' >
                            <div className="dropdown" >
                                <button type="button" onClick={() => this.setState({ dropdown: !this.state.dropdown })} >
                                    <span className="glyphicon glyphicon-user"></span>
                                    <i className="fas fa-caret-down dropDownIcon"></i>
                                </button>
                                <div className={`dropdown-content ${makeBlock}`}>
                                    <a href="#">Link 1</a>
                                    <a href="#">Link 2</a>
                                    <a href="#">Link 3</a>
                                </div>
                                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a className="dropdown-item" href="#!">Dropdown link</a>
                                    <a className="dropdown-item" href="#!">Dropdown link</a>
                                </div>
                            </div>
                        </li>
                        <li className='newListNavBtnRight listRightBtnMargin CLBorderButton' >
                            <a className='link' href='#' >Create Listing</a>
                        </li>
                        <li className='newListNavBtnRight' >
                            <a className='link' href='#' >Upgrade</a>
                        </li>
                    </ul>
                </div>
            </nav>

        );
    }
}

export default CreateNewListingNavBar;