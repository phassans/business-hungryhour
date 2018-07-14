import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignUpContainer from './container/signUpContainer/signUpContainer';
import LoginContainer from './container/loginContainer/loginContainer';
import AddBusiness from './container/addBusiness/AddBusiness';
import LandingPage from './container/landingPageContainer/landingPage';
import CreateNewListingContainer from './container/createNewListingContainer/createNewListingScreen';

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
                    <Route path="/CreateList" component={CreateNewListingContainer} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
