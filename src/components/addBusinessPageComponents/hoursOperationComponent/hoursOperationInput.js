import React, { Component } from 'react';
import './hoursOperationInputStyle.css'

export class HoursOperationInput extends Component {
    render() {
        return (
            <div className='row ContainerStyle' >
                <div className='dayName' >{this.props.dayName}</div>
                <div className='startTime' >
                    <input type='text' /> to
                </div>
                <div className='endTime' >
                    <input type='text' />
                </div>
            </div>
        )
    }
}

export class BreakOperationInput extends Component {
    render() {
        return (
            <div className='breaksContainer' >
                <div className='row ContainerStyle' >
                    <div className='checkboxContainer'>
                        <label className="container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className='startTime' >
                        <input type='text' /> to
                    </div>
                    <div className='endTime' >
                        <input type='text' />
                    </div>
                </div>
            </div>
        )
    }
}
