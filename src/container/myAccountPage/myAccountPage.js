import React, { Component } from 'react';
import './MyAccountPage.css';
import CreateNewListingNavBar from '../../components/navs/CreateNewListingScreenNav/CreateNewListingScreenNav';
import { Route, Link } from 'react-router-dom';
import BillingDetails from './BillingDetails';
import AccountSummary from './AccontSummary';

class MyAccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='mainContainer' >
                <CreateNewListingNavBar />
                <div className='MyAccountContainer' >
                <div className='MAHeading' >My Account</div>
                    <ul className='MAheaderTab' >
                        <li className='MAheaderTab1' >
                            <Link to='/MyAccount/AccountSummary' >Account Summary</Link>
                        </li>
                        <li className='MAheaderTab2' >
                            <Link to='/MyAccount/BillingDetails' >Billing Details</Link>
                        </li>
                    </ul>
                    <Route path="/MyAccount/BillingDetails" component={BillingDetails} />
                    <Route exact path="/MyAccount/AccountSummary" component={AccountSummary} />
                </div>
            </div>
        );
    }
}

export default MyAccountPage;
