import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import './style.css';
import '../../components/dropdown.css';
import './react-datepicker.css';

import Dropdown from "../dropdown";
import DatePicker from 'react-datepicker';
import { days } from '../../data/days';
import { options } from '../../data/time';


class Section3 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false
        }
    }

    handleCheck = (event, val) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

        var index = this.props.recurringDays.indexOf(val);
        if (event.target.checked) {
            if (index === -1) {
                this.props.recurringDays.push(val);
            }
        } else {
            this.props.recurringDays.splice(index, 1);
        }
    }

    componentDidMount() {
        if (this.props.editListing && this.props.editListing.recurringDays) {
            let cbDefaults = {
                monday: false,
                tuesday: false,
                wednesday: false,
                thursday: false,
                friday: false,
                saturday: false,
                sunday: false
            };

            const recurringDays = this.props.editListing.recurringDays;

            if (recurringDays.includes("monday")) {
                cbDefaults.monday = true;
            }

            if (recurringDays.includes("tuesday")) {
                cbDefaults.tuesday = true;
            }

            if (recurringDays.includes("wednesday")) {
                cbDefaults.wednesday = true;
            }

            if (recurringDays.includes("thursday")) {
                cbDefaults.thursday = true;
            }

            if (recurringDays.includes("friday")) {
                cbDefaults.friday = true;
            }

            if (recurringDays.includes("saturday")) {
                cbDefaults.saturday = true;
            }

            if (recurringDays.includes("sunday")) {
                cbDefaults.sunday = true;
            }
            
            this.setState({
                ...this.state,
                ...cbDefaults
            });
        }
    }

    render() {
        const { status, height, edit } = this.props.state.sections.third;
        const { question1, question2, question3, startDate, startTime, endTime, endDate, endDate1 } = this.props.state;
        const { handleEdit, handleNextBtnClick, handleDateChange, _handleAnswerSelection, _onSelect } = this.props;
        return (
            <div>
                <div className={`addListFirstSectionHeading ${status ? 'addListFirstSectionHeadingActive' : ''}`} >3. {question1.select1 ? 'Meal' : 'Happy Hour'} Details</div>
                {
                    edit ?
                        <span onClick={() => handleEdit()} className='addListEditTxt' >edit</span> : null
                }
                <AnimateHeight duration={500} height={height} >
                    <div className='' >
                        <div style={{ marginTop: 20, marginBottom: 20 }} >
                            <DatePicker
                                dateFormat='DD/MM/YYYY'
                                placeholderText='Start Date'
                                selected={startDate}
                                onChange={(v) => handleDateChange(v, 'startDate')}
                            />
                            <div className='addListScreenTimeMainContainer' >
                                <div className='addListScreenTimeContainer' >
                                    <Dropdown options={options} onChange={(v) => _onSelect(v, 'first')} value={startTime} />
                                </div>
                                <div className='addListScreenTimeContainer1' >
                                    <Dropdown options={options} onChange={(v) => _onSelect(v, 'second')} value={endTime} />
                                </div>
                            </div>
                            <div className='addListFirstQuestionContainer' >
                                <div className='addListFirstQuestion' >Multiple days in a row?</div>
                                <div className='addListQuestion1BtnGroup addListQBtnGroupSmall' >
                                    <div onClick={() => _handleAnswerSelection('2.1')} className={`addListQuestion1Btn1 ${question2.select1 ? 'addListQuestionActiveBtn' : ''}`} >Yes</div>
                                    <div onClick={() => _handleAnswerSelection('2.2')} className={`addListQuestion1Btn2 ${question2.select2 ? 'addListQuestionActiveBtn' : ''}`} >No</div>
                                </div>
                            </div>
                            <AnimateHeight duration={500} height={question2.select1 ? 'auto' : 0} >
                                <div style={{ marginTop: 20, marginBottom: 20 }} >
                                    <DatePicker
                                        dateFormat='DD/MM/YYYY'
                                        placeholderText='End Date'
                                        selected={endDate}
                                        onChange={(v) => handleDateChange(v, 'endDate')}
                                    />
                                </div>
                            </AnimateHeight>
                            <div className='addListFirstQuestionContainer' >
                                <div className='addListFirstQuestion' >Recurring?</div>
                                <div className='addListQuestion1BtnGroup addListQBtnGroupSmall' >
                                    <div onClick={() => _handleAnswerSelection('3.1')} className={`addListQuestion1Btn1 ${question3.select1 ? 'addListQuestionActiveBtn' : ''}`} >Yes</div>
                                    <div onClick={() => _handleAnswerSelection('3.2')} className={`addListQuestion1Btn2 ${question3.select2 ? 'addListQuestionActiveBtn' : ''}`} >No</div>
                                </div>
                            </div>
                            <AnimateHeight duration={500} height={question3.select1 ? 'auto' : 0} >
                                <div className='' >
                                    <div className='addListFirstQuestion' style={{ marginTop: 20 }} >Recurring day(s) of the week:</div>
                                    <div style={{ marginTop: 20, marginBottom: 20 }} >
                                        {
                                            days.map((v, i) => {
                                                return (
                                                    <div key={i} className='addListCheckBoxContainer'>
                                                        <label className="container">
                                                            <input type="checkbox" name={v.toLowerCase()} checked={this.state[v.toLowerCase()]} onChange={(event) => this.handleCheck(event, v.toLowerCase())} />
                                                            <span className="checkmark"></span>
                                                            {v}
                                                        </label>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div style={{ marginTop: 10, marginBottom: 20 }} >
                                        <DatePicker
                                            dateFormat='DD/MM/YYYY'
                                            placeholderText='End Date'
                                            selected={endDate1}
                                            onChange={(v) => handleDateChange(v, 'endDate1')}
                                        />
                                    </div>
                                </div>
                            </AnimateHeight>
                            <div className='btnContainer' >
                                <button className="btn orangeBtn" onClick={() => handleNextBtnClick()}>Next</button>
                            </div>
                        </div>
                    </div>
                </AnimateHeight>
            </div>
        )
    }
}

export default Section3;