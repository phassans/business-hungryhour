import React, { Component } from 'react';
import './landingPage.css';
import LandingPageNav from '../../components/navs/LandingPageNav/LandingPageNav';

class LandingPage extends Component {
    render() {
        return (
            <div className='mainContainer' >
                <LandingPageNav />
                <div className='headerContent' >
                    <div className='heading' >Marketing copy here</div>
                    <div className='buttonContainer' >
                        <button className="btn">Get started for free</button>
                    </div>
                </div>
                <div className='section1' >
                    Copy here
                </div>
                <div className='section2' >
                    Copy here
                </div>
                <div className='footerContent' >
                    <div className='footer-heading' >Start listing today!</div>
                    <div className='buttonContainer' >
                        <button className="btn">Get started for free</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
