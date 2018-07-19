import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import './businessContentStyle.css';
import { HoursOperationInput, BreakOperationInput } from './hoursOperationComponent/hoursOperationInput';
import { CuisineCheckBox } from './cuisineCheckbox/cuisineCheckbox';


class BusinessContent1 extends Component {
    render() {
        const { dayName, breakCheckBox, secondSelect, daysCheckBox } = this.props.initialState;
        return (
            <AnimateHeight duration={500} height={secondSelect.height} >
                <div className='hoursMainContainer' >
                    <h5>Hours of operation:</h5>
                    <div className='OperationCont' >
                        {
                            dayName.map((v, i) => {
                                return (
                                    <HoursOperationInput handleCheckBox={() => this.props.handleCheckBox(i, 'hours')} checked={daysCheckBox[i]} key={i} dayName={v} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='breakMainContainer' >
                    <h5>Breaks?</h5>
                    <div className='OperationCont' >
                        {
                            dayName.map((v, i) => {
                                return (
                                    <BreakOperationInput handleCheckBox={() => this.props.handleCheckBox(i, 'break')} checked={breakCheckBox[i]} dayName={v} key={i} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='btnContainer clear' >
                    <button className="btn orangeBtn" onClick={() => this.props.setState('second')}>Next</button>
                </div>
            </AnimateHeight>
        );
    }
}

export default BusinessContent1;
