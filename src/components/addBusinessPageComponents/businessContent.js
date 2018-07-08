import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

class BusinessContent extends Component {
    render() {
        const { height } = this.props.initialState;
        return (
            <AnimateHeight duration={500} height={height} >
                <div className='inputMainContainer full' >
                    <div className='inputContainer' >
                        <div>Business name :</div>
                        <input type='text' placeholder='Business name' />
                    </div>
                    <div className='inputContainer' >
                        <div>Business address :</div>
                        <input type='text' placeholder='Street' />
                    </div>
                    <div className='row centerInput' >
                        <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                            <input type='text' placeholder='City' />
                        </div>
                        <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                            <input type='text' placeholder='State' />
                        </div>
                        <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                            <input type='text' placeholder='Zip Code' />
                        </div>
                    </div>
                    <div className='inputContainer' >
                        <div>Business phone # :</div>
                        <input type='text' placeholder='(xxx) xxx - xxxx' />
                    </div>
                    <div className='btnContainer' >
                        <button className="btn" onClick={() => this.props.setState('first')}>Next</button>
                    </div>
                </div>
            </AnimateHeight>
        );
    }
}

export default BusinessContent;
