import React, { Component } from 'react';
import './landingPage.css';
import LandingPageNav from '../../components/navs/LandingPageNav/LandingPageNav';

class LandingPage extends Component {
    render() {
        return (
            <div className='mainContainer' >
                <LandingPageNav />
                <div className='landingPagebgimage' >
                    <div className='landingPageBannerContent' >
                        <div className='landingPageheading' >Broadcast your meal deals & happy hours to thousands of customers</div>
                        <div className='buttonContainer landingPageheaderBtn' >
                            <div className='landingPageheading1' >They’ve been waiting for you</div>
                            <button className="btn">Get started for free</button>
                        </div>
                    </div>
                </div>
                <div className='section1' >
                    <div className='section1ChildContainer' >
                        <div className='landingPageheading landingPageSection1Heading' >Grow with HungryHour</div>
                        <p>Many businesses offer daily specials or happy hours but fail to promote them effectively, resorting to traditional chalk signs or word of mouth. We want you to do better than this. That’s why HungryHour offers a platform for your small business to broadcast your deals to thousands of customers a day to expand your reach and help you generate more profit.</p>

                        <div className='row section1CardContainer' >
                            <div className='col-md-4 mb-4 landinPageCard' >
                                <img src={require('../../assets/icon 1.png')} />
                                <h4>Attract new customers</h4>
                                <p>Increase your business’s visibility to thousands of new customers every day. Bring new traffic through the door, and turn these first-time visitors into frequent customers.</p>
                            </div>
                            <div className='col-md-4 mb-4 landinPageCard' >
                                <img src={require('../../assets/icon 2.png')} />
                                <h4>Stay in control</h4>
                                <p>Stop missing out on sales during your slow hours. By broadcasting your deals during these periods, you can eliminate dead restaurants times and maintain a steady stream of customers.</p>
                            </div>
                            <div className='col-md-4 mb-4 landinPageCard' >
                                <img src={require('../../assets/icon 3.png')} />
                                <h4>Differentiate yourself</h4>
                                <p>Appeal to your customers and encourage them to quickly take action with deals they can’t miss. A “limited-time” countdown approach makes your food and drinks stand out amongst the crowd.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section2' >
                    <div className='landingPageheading landingPageSection1Heading' >How to Get started:</div>
                    <div className='landingPageListContainer' >
                        <div className='landingPageListNum' >1.</div>
                        <div className='landingPageListContentCont' >
                            <div className='landingPageListContentHeading' >Sign up: </div>
                            <p>Set up your free business account in under 5 minutes.</p>
                        </div>
                        <div className='landingPageListNum' >2.</div>
                        <div className='landingPageListContentCont' >
                            <div className='landingPageListContentHeading' >Create a listing: </div>
                            <p>Create a listing on HungryHour. Describe your deal, price/discount, run-time, and other details. Your first month is totally free, and if you choose to continue with our platform, you can choose from many of the packages on our Plans and Pricing page.</p>
                        </div>
                        <div className='landingPageListNum' >3.</div>
                        <div className='landingPageListContentCont' >
                            <div className='landingPageListContentHeading' >Watch customers flood in: </div>
                            <p>As users browse the HungryHour app, they will immediately discover your current deals and know when you’ll have future deals. They’ll visit your restaurant, buy your food, and tell everyone about your great restaurant!</p>
                        </div>
                    </div>
                </div>

                <div className='landingPageQuoteContainer' >
                    <div className='landingPageQuote' >
                        “I don’t want more customers”
                    <div>said no one ever.</div>
                    </div>
                </div>

                <div className='footerContent' >
                    <div className='footer-heading' >Let’s Grow Your Business</div>
                    <div className='buttonContainer' >
                        <button className="btn">CREATE YOUR FIRST LISTING</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
