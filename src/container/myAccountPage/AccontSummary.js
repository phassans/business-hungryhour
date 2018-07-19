import React, { Component } from 'react';
import './AccountSummary.css';
import { Link } from 'react-router-dom';

class AccountSummary extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className='BillingDetailsHeading' >Account Details:</div>
                    <div className='billingPlanContainer ASAfterHeadingCont' >
                        <div className='billingPlanHeader'>
                            <div>Plan type:</div>
                            <div className='billingPlanHeaderRight' >Want more listings?</div>
                        </div>
                        <div className='billingPlanSection' >
                            <div className='billingPlanSectionP1' >
                                Basic <span>(FREE)</span> - <br />
                                3 free listings
                        </div>
                            <div className='billingPlanSectionP2' >
                                <button>UPGRADE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='BillingDetailsHeading ASHeading' >Login Details:</div><span className='ASSummaryEdit' >Edit</span>
                    <div className='billingPlanContainer ASLoginDetailsContainer ASAfterHeadingCont' >
                        <div className='ASLoginDetails' >
                            <div className='ASLoginDetailshead' >Name</div>
                            <div>Diana Levan</div>
                        </div>
                        <div className='ASLoginDetails ASLoginDetailsCernter' >
                            <div className='ASLoginDetailshead' >Email</div>
                            <div>hello@goodbye.com</div>
                        </div>
                        <div className='ASLoginDetails' >
                            <div className='ASLoginDetailshead' >Password</div>
                            <div>xxxxxxxxx</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='BillingDetailsHeading ASHeading' >Business Details:</div><Link to='/AddBusiness' className='ASSummaryEdit' >Edit</Link>
                    <div className='billingPlanContainer ASLoginDetailsContainer ASAfterHeadingCont' >
                        <ul className='ASBusinessDetailContainer' >
                            <li>
                                <div className='ASLoginDetails' >
                                    <div className='ASLoginDetailshead' >Business name</div>
                                    <div>Curry House</div>
                                </div>
                            </li>
                            <li>
                                <div className='ASLoginDetails' >
                                    <div className='ASLoginDetailshead' >Cuisine types</div>
                                    <div>Indian, Sandwiches, Salad</div>
                                </div>
                            </li>
                        </ul>
                        <ul className='ASBusinessDetailContainer' >
                            <li>
                                <div className='ASLoginDetails ASLoginDetailsCernter' >
                                    <div className='ASLoginDetailshead' >Business address:</div>
                                    <div>1234 North Pole Dr <br /> San Jose CA <br /> 95148</div>
                                </div>
                            </li>
                            <li>
                                <div className='ASLoginDetails' >
                                    <div className='ASLoginDetailshead' >Website URL:</div>
                                    <a href='#' target="_blank" >www.nonesenseurl1234.com</a>
                                </div>
                            </li>
                        </ul>
                        <div className='ASLoginDetails' >
                            <div className='ASLoginDetailshead' >Business hours:</div>
                            <div>
                                <span className='ASLoginDetailsDays' >Monday:</span>
                                <span>Closed</span>
                            </div>
                            <div>
                                <span className='ASLoginDetailsDays' >Tuesday:</span>
                                <span>12pm-9pm</span>
                            </div>
                            <div>
                                <span className='ASLoginDetailsDays' >Wednesday:</span>
                                <span>12pm-9pm</span>
                            </div>
                            <div>
                                <span className='ASLoginDetailsDays' >Thursday:</span>
                                <span>12pm-9pm</span>
                            </div>
                            <div>
                                <span className='ASLoginDetailsDays' >Friday:</span>
                                <span>12pm-9pm</span>
                            </div>
                            <div>
                                <span className='ASLoginDetailsDays' >Saturday:</span>
                                <span>12pm-9pm</span>
                            </div>
                            <div>
                                <span className='ASLoginDetailsDays' >Sunday:</span>
                                <span>Closed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default AccountSummary;