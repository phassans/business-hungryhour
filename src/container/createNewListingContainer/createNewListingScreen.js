import React, { Component } from 'react';
import './CreateNewListingScreen.css';
import CreateNewListingNavBar from '../../components/navs/CreateNewListingScreenNav/CreateNewListingScreenNav';
import AnimateHeight from 'react-animate-height';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { options } from '../../data/time.js';
import Dropdown from "../../components/dropdown";
import { days } from '../../data/days'
import '../../components/dropdown.css';
import './react-datepicker.css';

class CreateNewListingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question1: { select1: false, select2: false },
            question2: { select1: false, select2: false },
            question3: { select1: false, select2: false },
            sections: {
                first: { status: true, height: 'auto', edit: false },
                second: { status: false, height: 0, edit: false },
                third: { status: false, height: 0, edit: false },
                fourth: { status: false, height: 0, edit: false }
            },
            startDate: '',
            endDate: '',
            startTime: 'Start Time',
            endTime: 'End Time',
            ImageUploader: 'UPLOAD IMAGE'
        }
        this._handleAnswerSelection = this._handleAnswerSelection.bind(this);
        this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this._onSelect = this._onSelect.bind(this)
        this.onUpload = this.onUpload.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    onUpload(ev) {
        console.log(ev.target.files[0])
        this.setState({
            ImageUploader: ev.target.files[0].name,
        });
    }

    handleDateChange(date, v) {
        v === 'startDate' ? this.setState({ startDate: date }) :
            v === 'endDate' ? this.setState({ endDate: date }) :
                null
    }

    _handleAnswerSelection(v) {
        v === '1.1' ? this.setState({ question1: { select1: true, select2: false } }) :
            v === '1.2' ? this.setState({ question1: { select1: false, select2: true } }) :
                v === '2.1' ? this.setState({ question2: { select1: true, select2: false } }) :
                    v === '2.2' ? this.setState({ question2: { select1: false, select2: true } }) :
                        v === '3.1' ? this.setState({ question3: { select1: true, select2: false } }) :
                            v === '3.2' ? this.setState({ question3: { select1: false, select2: true } }) :
                                null
    }
    handleNextBtnClick(v) {
        const { first, second, third, fourth } = this.state.sections;
        v === 'first' ? this.setState({ sections: { first: { ...second, edit: true }, second: { ...first, }, third: { ...third }, fourth: { ...fourth } } }) :
        v === 'second' ? this.setState({ sections: { first: { ...first }, second: { ...first }, third: { ...second }, fourth: { ...fourth } } }) :
        v === 'third' ? this.setState({ sections: { first: { ...first }, second: { ...first }, third: { ...first }, fourth: { ...third } } }) :
        null
    }
    
    _onSelect(option, v) {
        if (v === 'first') {
            this.setState({ startTime: option })
        } else if (v === 'second') {
            this.setState({ endTime: option })
        }
    }
    
    handleEdit(v) {
        const { first, second, third, fourth } = this.state.sections;
        let firstEdit= first.edit ? true : false;
        let secondEdit= second.edit ? true : false;
        let thirdEdit= third.edit ? true : false;
        let fourthEdit= fourth.edit ? true : false;
        v === 'first' ? this.setState({ sections:{ first: { height: 'auto', status: true, edit: false }, second: { height: 0, status: false, edit: secondEdit }, third: { height: 0, status: false, edit: thirdEdit }, fourth: { height: 0, status: false, edit: fourthEdit } }}) :
            v === 'second' ? this.setState({ sections:{ first: { height: 0, status: false, edit: firstEdit }, second: { height: 'auto', status: true, edit: false }, third: { height: 0, status: false, edit: thirdEdit }, fourth: { height: 0, status: false, edit: fourthEdit }} }) :
                v === 'third' ? this.setState({ sections:{ first: { height: 0, status: false, edit: firstEdit }, second: { height: 0, status: false, edit: secondEdit }, third: { height: 'auto', status: true, edit: false }, fourth: { height: 0, status: false, edit: fourthEdit }} }) :
                    v === 'fourth' ? this.setState({ sections:{ first: { height: 0, status: false, edit: firstEdit }, second: { height: 0, status: false, edit: secondEdit }, third: { height: 0, status: false, edit: thirdEdit }, fourth: { height: 'auto', status: true, edit: false }} }) :
                        null

    }

    render() {
        const { question1, sections, question2, question3 } = this.state;
        return (
            <div className='mainContainer' >
                <CreateNewListingNavBar />

                <div className='addListContent' >
                    <div className='addListHeaderContainer' >
                        <div className='addListHeader' >New Listing</div>
                        <div className='addListClose' >X</div>
                    </div>
                    <div className='addListFirstQuestionContainer' >
                        <div className='addListFirstQuestion' >What type of deal do you want to list? </div>
                        <div className='addListQuestion1BtnGroup' >
                            <div onClick={() => this._handleAnswerSelection('1.1')} className={`addListQuestion1Btn1 ${question1.select1 ? 'addListQuestionActiveBtn' : ''}`} >Meal</div>
                            <div onClick={() => this._handleAnswerSelection('1.2')} className={`addListQuestion1Btn2 ${question1.select2 ? 'addListQuestionActiveBtn' : ''}`} >Happy Hour (% off )</div>
                        </div>
                    </div>

                    <div>
                        <div className='addListFirstsectionContainer' >
                            {/*//////////////////////////             first section         //////////////////// */}
                            <div className={`addListFirstSectionHeading ${sections.first.status ? 'addListFirstSectionHeadingActive' : ''}`} >1. Meal Basics</div>
                            {
                                sections.first.edit ?
                                    <span onClick={() => this.handleEdit('first')} className='addListEditTxt' >edit</span> : null
                            }
                            <AnimateHeight duration={500} height={sections.first.height} >
                                <div className='inputMainContainer full' >
                                    <div className='inputContainer'  >
                                        <input type='text' placeholder='Meal name' />
                                    </div>
                                    <div className='inputContainer' >
                                        <input type='text' placeholder='Old price' />
                                    </div>
                                    <div className='inputContainer' >
                                        <input type='text' placeholder='New price' />
                                    </div>
                                    <div className='inputContainer' >
                                        <textarea placeholder='Description' className='addListDescription' cols="40" rows="8"></textarea>
                                    </div>
                                    <div className='btnContainer' >
                                        <button className="btn orangeBtn" onClick={() => this.handleNextBtnClick('first')}>Next</button>
                                    </div>
                                </div>
                            </AnimateHeight>
                            {/*//////////////////////////          end of first section         //////////////////// */}
                            {/*//////////////////////////          second section         //////////////////// */}
                            <div className={`addListFirstSectionHeading ${sections.second.status ? 'addListFirstSectionHeadingActive' : ''}`} >2. Dietary Restrictions (optional)</div>
                            {
                                sections.second.edit ?
                                    <span onClick={() => this.handleEdit('second')} className='addListEditTxt' >edit</span> : null
                            }
                            <AnimateHeight duration={500} height={sections.second.height} >
                                <div className='' >
                                    <div className='addListFirstQuestion' style={{ marginTop: 10 }} >Please check the dietary restrictions that your meal meets</div>
                                    <div style={{ marginTop: 20, marginBottom: 20 }} >
                                        <div className='addListCheckBoxContainer'>
                                            <label className="container">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                Vegetarian
                                        </label>
                                        </div>
                                        <div className='addListCheckBoxContainer'>
                                            <label className="container">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                Vegan
                                        </label>
                                        </div>
                                        <div className='addListCheckBoxContainer'>
                                            <label className="container">
                                                <input type="checkbox" />
                                                <span className="checkmark"></span>
                                                Gluten free
                                        </label>
                                        </div>
                                    </div>
                                    <div className='btnContainer' >
                                        <button className="btn orangeBtn" onClick={() => this.handleNextBtnClick('second')}>Next</button>
                                    </div>
                                </div>
                            </AnimateHeight>
                            {/*//////////////////////////         end of second section         //////////////////// */}
                            {/*//////////////////////////         third section         //////////////////// */}
                            <div className={`addListFirstSectionHeading ${sections.third.status ? 'addListFirstSectionHeadingActive' : ''}`} >3. Happy Hour Details</div>
                            {
                                sections.third.edit ?
                                    <span onClick={() => this.handleEdit('third')} className='addListEditTxt' >edit</span> : null
                            }
                            <AnimateHeight duration={500} height={sections.third.height} >
                                <div className='' >
                                    <div style={{ marginTop: 20, marginBottom: 20 }} >
                                        <DatePicker
                                            dateFormat='DD/MM/YYYY'
                                            placeholderText='Start Date'
                                            selected={this.state.startDate}
                                            onChange={(v) => this.handleDateChange(v, 'startDate')}
                                        />
                                        <div className='addListScreenTimeMainContainer' >
                                            <div className='addListScreenTimeContainer' >
                                                <Dropdown options={options} onChange={(v) => this._onSelect(v, 'first')} value={this.state.startTime} />
                                            </div>
                                            <div className='addListScreenTimeContainer1' >
                                                <Dropdown options={options} onChange={(v) => this._onSelect(v, 'second')} value={this.state.endTime} />
                                            </div>
                                        </div>
                                        <div className='addListFirstQuestionContainer' >
                                            <div className='addListFirstQuestion' >Multiple days in a row?</div>
                                            <div className='addListQuestion1BtnGroup' >
                                                <div onClick={() => this._handleAnswerSelection('2.1')} className={`addListQuestion1Btn1 ${question2.select1 ? 'addListQuestionActiveBtn' : ''}`} >Yes</div>
                                                <div onClick={() => this._handleAnswerSelection('2.2')} className={`addListQuestion1Btn2 ${question2.select2 ? 'addListQuestionActiveBtn' : ''}`} >No</div>
                                            </div>
                                        </div>
                                        <div className='addListFirstQuestionContainer' >
                                            <div className='addListFirstQuestion' >Recurring?</div>
                                            <div className='addListQuestion1BtnGroup' >
                                                <div onClick={() => this._handleAnswerSelection('3.1')} className={`addListQuestion1Btn1 ${question3.select1 ? 'addListQuestionActiveBtn' : ''}`} >Yes</div>
                                                <div onClick={() => this._handleAnswerSelection('3.2')} className={`addListQuestion1Btn2 ${question3.select2 ? 'addListQuestionActiveBtn' : ''}`} >No</div>
                                            </div>
                                        </div>

                                        <div className='' >
                                            <div className='addListFirstQuestion' style={{ marginTop: 20 }} >Recurring day(s) of the week:</div>
                                            <div style={{ marginTop: 20, marginBottom: 20 }} >
                                                {
                                                    days.map((v, i) => {
                                                        return (
                                                            <div key={i} className='addListCheckBoxContainer'>
                                                                <label className="container">
                                                                    <input type="checkbox" />
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
                                                    selected={this.state.endDate}
                                                    onChange={(v) => this.handleDateChange(v, 'endDate')}
                                                />
                                            </div>
                                        </div>
                                        <div className='btnContainer' >
                                            <button className="btn orangeBtn" onClick={() => this.handleNextBtnClick('third')}>Next</button>
                                        </div>
                                    </div>
                                </div>
                            </AnimateHeight>
                            {/*//////////////////////////        end of third section         //////////////////// */}
                            {/*//////////////////////////        fourth section         //////////////////// */}
                            <div className={`addListFirstSectionHeading ${sections.fourth.status ? 'addListFirstSectionHeadingActive' : ''}`} >4. Meal Pictures</div>
                            {
                                sections.fourth.edit ?
                                    <span onClick={() => this.handleEdit('fourth')} className='addListEditTxt' >edit</span> : null
                            }
                            <AnimateHeight duration={500} height={sections.fourth.height} >
                                <div className='' >
                                    <div style={{ marginTop: 20, marginBottom: 20 }} >
                                        <input type="file" name="file" id="file" className="inputfile" onChange={this.onUpload} />
                                        <label for="file">{this.state.ImageUploader}</label>
                                    </div>
                                    <div className='btnContainer' >
                                        <button className="btn orangeBtn" onClick={() => console.log('first')}>Publish</button>
                                    </div>
                                </div>
                            </AnimateHeight>
                            {/*//////////////////////////       end of fourth section         //////////////////// */}
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default CreateNewListingContainer;
