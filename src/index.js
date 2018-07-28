import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUpContainer from './container/signUpContainer/signUpContainer';
import LoginContainer from './container/loginContainer/loginContainer';
import AddBusiness from './container/addBusiness/AddBusiness';
import LandingPage from './container/landingPageContainer/landingPage';
import CreateNewListingContainer from './container/createNewListingContainer/createNewListingScreen';
import PlanAndPricingScreen from './container/planAndPricingScreen/planAndPricingScreen';
import MyAccountPage from './container/myAccountPage/myAccountPage';
import MyListingHomePage from './container/myListingHomePage/myListingHomePage';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Routes extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/Signup" component={SignUpContainer} />
                    <Route path="/AddBusiness" component={AddBusiness} />
                    <Route path="/Login" component={LoginContainer} />
                    <Route path="/CreateList/:businessId" component={CreateNewListingContainer} />
                    <Route path="/EditList/:listingId/:businessId" component={CreateNewListingContainer} />
                    <Route path="/PlanAndPricing" component={PlanAndPricingScreen} />
                    <Route path="/MyAccount" component={MyAccountPage} />
                    <Route path="/MyListing/:businessId" component={MyListingHomePage} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
