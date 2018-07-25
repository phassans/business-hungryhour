import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class BusinessContent extends Component {
    updateInput = (e, p) => {
        this.props.businessInfo[p] = e.target.value;
    }

    render() {
        const { height } = this.props.initialState;

        return (
            <AnimateHeight duration={500} height={height} >
                <div className='inputMainContainer full' >
                    <div className='inputContainer'  >
                        <input type='text' placeholder='Business name' onBlur={(e) => this.updateInput(e, 'name')} />
                    </div>
                    <div className='inputContainer' >
                        <input type='text' placeholder='Street' onBlur={(e) => this.updateInput(e, 'street')} />
                    </div>
                    <div className='row centerInput' >
                        <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                            <input type='text' placeholder='City' onBlur={(e) => this.updateInput(e, 'city')} />
                        </div>
                        <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                            <input type='text' placeholder='State' onBlur={(e) => this.updateInput(e, 'state')} />
                        </div>
                        <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                            <input type='text' placeholder='Zip Code' onBlur={(e) => this.updateInput(e, 'postalCode')} />
                        </div>
                    </div>
                    <div className='row centerInput' >
                        <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                            <input type='text' placeholder='Business Phone' onBlur={(e) => this.updateInput(e, 'phone')} />
                        </div>
                        <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                            <input type='text' placeholder='Business URL' onBlur={(e) => this.updateInput(e, 'website')} />
                        </div>
                        <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                            {/* <input type='text' placeholder='Zip Code' /> */}
                        </div>
                    </div>
                    {/* <div className='inputContainer' >

                        <input type='text'  />
                    </div> */}
                    <div className='btnContainer' >
                        <button className="btn orangeBtn" onClick={() => this.props.setState('first')}>Next</button>
                    </div>
                </div>
            </AnimateHeight>
        );
    }
}

export default BusinessContent;
