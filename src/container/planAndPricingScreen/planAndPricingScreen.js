import React, { Component } from 'react';
import './planAndPricingScreen.css';
import CreateNewListingNavBar from '../../components/navs/CreateNewListingScreenNav/CreateNewListingScreenNav';

class PlanAndPricingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div className='mainContainer' >
                <CreateNewListingNavBar />
                <div className='PAPContainer' >
                    <div className='PAPHeaderContainer' >
                        <div className='PAPHeader' >Choose the best plan for your business </div>
                        <div className='PAPRightTxt' >
                            Questions? <a href='#' >Contact us</a>
                        </div>
                    </div>

                    <div className='PAPSection' >
                        <ul>
                            <li  >
                                <div className='PAPPlansHeading' >Basic Plan</div>
                                <div className='PAPOffersText' >FREE</div>
                                <div className='PAPOffersdetails' >Listing analytics <br />  24/7 email support <br /> 3 free listings</div>
                                <button className='PAPSelectBtn' >Select</button>
                            </li>
                            <li className='PAPSecondLi' >
                                <div className='PAPPlansHeading' >Single listing</div>
                                <div className='PAPOffersText' >$4/per listing</div>
                                <div className='PAPOffersdetails' >Listing analytics <br />  24/7 email support <br /> Pay as you go </div>
                                <button className='PAPSelectBtn' >Select</button>
                            </li>
                            <li>
                                <div className='PAPPlansHeading' >Silver Plan</div>
                                <div className='PAPOffersText' >$15/month</div>
                                <div className='PAPOffersdetails' >Listing analytics <br />  24/7 email support <br /> 8 listings a month </div>
                                <button className='PAPSelectBtn' >Select</button>
                            </li>
                            <li className='PAPThirdLi' >
                                <div className='PAPPlansHeading' >Gold Plan</div>
                                <div className='PAPOffersText' >$25/month</div>
                                <div className='PAPOffersdetails' >Listing analytics <br />  24/7 email support <br /> Unlimited listings </div>
                                <button className='PAPSelectBtn' >Select</button>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default PlanAndPricingScreen;
