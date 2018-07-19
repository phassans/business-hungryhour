import React, { Component } from 'react';
import './BillingDetails.css';

class BillingDetails extends Component {
    render() {
        return (
            <div>
                <div className='BillingDetailsHeading' >Billing Profile:</div>

                <div className='billingPlanContainer' >
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
        )
    }
}

export default BillingDetails;