import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import './businessContentStyle.css';
import { HoursOperationInput, BreakOperationInput } from './hoursOperationComponent/hoursOperationInput';
import { CuisineCheckBox } from './cuisineCheckbox/cuisineCheckbox';


class BusinessContent1 extends Component {
    render() {
        const { dayName, breakTime, cuisineType1, cuisineType2, cuisineType3, secondSelect } = this.props.initialState;
        return (
            <AnimateHeight duration={500} height={secondSelect.height} >
                <div className='hoursMainContainer' >
                    <h5>Hours of operation:</h5>
                    <div className='OperationCont' >
                        {
                            dayName.map((v, i) => {
                                return (
                                    <HoursOperationInput key={i} dayName={v} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='breakMainContainer' >
                    <h5>Breaks?</h5>
                    <div className='OperationCont' >
                        {
                            breakTime.map((v, i) => {
                                return (
                                    <BreakOperationInput key={i} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='inputContainer clear' >
                    <h5>Website URL :</h5>
                    <input type='text' placeholder='www.myrestauranthere.com' />
                </div>
                <div className='cuisineContainer' >
                    <div className='cuisineHeading' >Cuisine type(s):</div>
                    <div className='row' >
                        <div className='col-md-4 col-sm-12' >
                            {
                                cuisineType1.map((v, i) => {
                                    return (
                                        <CuisineCheckBox key={i} name={v} />
                                    )
                                })
                            }
                        </div>
                        <div className='col-md-4 col-sm-12 center' >
                            {
                                cuisineType2.map((v, i) => {
                                    return (
                                        <CuisineCheckBox key={i} name={v} />
                                    )
                                })
                            }
                        </div>
                        <div className='col-md-4 col-sm-12' >
                            {
                                cuisineType3.map((v, i) => {
                                    return (
                                        <CuisineCheckBox key={i} name={v} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='btnContainer' >
                        <button className="btn" onClick={() => this.props.setState('second')}>Next</button>
                    </div>
                </div>
            </AnimateHeight>
        );
    }
}

export default BusinessContent1;
