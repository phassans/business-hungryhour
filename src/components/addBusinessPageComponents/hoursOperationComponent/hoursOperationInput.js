import React, { Component } from 'react';
import './hoursOperationInputStyle.css';
// import Dropdown from 'react-dropdown'
import Dropdown from "../../dropdown";
import '../../dropdown.css';

const options = ['12:00 AM', '12:30 AM', '01:00 AM', '01:30 AM', '02:00 AM', '02:30 AM', '03:00 AM', '03:30 AM', '04:00 AM', '04:30 AM', '05:00 AM', '05:30 AM', '06:00 AM', '06:30 AM', '07:00 AM', '07:30 AM', '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 PM', '09:00 PM', '09:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM',]

export class HoursOperationInput extends Component {
    constructor() {
        super();
        this.state = {
            selected: 'Start Time',
            selected1: 'End Time'
        }
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect(option, v) {
        console.log(v, 'You selected ', option.label)
        if (v === 'first') {
            this.setState({ selected: option })
        } else {
            this.setState({ selected1: option })
        }
    }

    render() {
        const defaultOption = this.state.selected
        const defaultOption1 = this.state.selected1
        return (
            <div className='row ContainerStyle' >
                <div className='addBusinessCheckBoxContainer'>
                    <label className="container">
                        <input type="checkbox" onChange={() => this.props.handleCheckBox()} checked={this.props.checked} />
                        <span className="checkmark"></span>
                        {this.props.dayName}
                    </label>
                </div>
                <div className='breakstartTime' style={{ visibility: this.props.checked ? 'visible' : 'hidden' }} >
                    <Dropdown options={options} onChange={(v) => this._onSelect(v, 'first')} value={defaultOption} />
                    <span className='breakText' >to</span>
                </div>
                <div className='endTime' style={{ visibility: this.props.checked ? 'visible' : 'hidden' }} >
                    <Dropdown options={options} onChange={(v) => this._onSelect(v, 'second')} value={defaultOption1} />
                </div>
            </div>
        )
    }
}


export class BreakOperationInput extends Component {
    constructor() {
        super();
        this.state = {
            selected: 'Start Time',
            selected1: 'End Time'
        }
        this._onSelect = this._onSelect.bind(this)
    }

    _onSelect(option, v) {
        console.log(v, 'You selected ', option.label)
        if (v === 'first') {
            this.setState({ selected: option })
        } else {
            this.setState({ selected1: option })
        }
    }

    render() {
        const defaultOption = this.state.selected
        const defaultOption1 = this.state.selected1

        return (
            <div className='row ContainerStyle' >
                <div className='addBusinessCheckBoxContainer breakContainerCheckBox'>
                    <label className="container">
                        <input type="checkbox" onChange={() => this.props.handleCheckBox()} checked={this.props.checked} />
                        <span className="checkmark"></span>
                        <span className='checkmarklabel' >{this.props.dayName}</span>
                    </label>
                </div>
                <div className='breakstartTime' style={{ visibility: this.props.checked ? 'visible' : 'hidden' }} >
                    <Dropdown options={options} onChange={(v) => this._onSelect(v, 'first')} value={defaultOption} />
                    <span className='breakText' >to</span>
                </div>
                <div className='endTime' style={{ visibility: this.props.checked ? 'visible' : 'hidden' }} >
                    <Dropdown options={options} onChange={(v) => this._onSelect(v, 'second')} value={defaultOption1} />
                </div>
            </div>
        )
    }
}
