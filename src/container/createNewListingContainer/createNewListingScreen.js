import React, { Component } from 'react';
import './CreateNewListingScreen.css';
import CreateNewListingNavBar from '../../components/navs/CreateNewListingScreenNav/CreateNewListingScreenNav';
import AnimateHeight from 'react-animate-height';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Section1 from '../../components/createNewListComponent/section1';
import Section2 from '../../components/createNewListComponent/section2';
import Section3 from '../../components/createNewListComponent/section3';

class CreateNewListingContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question1: { select1: true, select2: false },
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
            endDate1: '',
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
                v === 'endDate1' ? this.setState({ endDate1: date }) :
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
        let firstEdit = first.edit ? true : false;
        let secondEdit = second.edit ? true : false;
        let thirdEdit = third.edit ? true : false;
        let fourthEdit = fourth.edit ? true : false;
        v === 'first' ? this.setState({ sections: { first: { height: 'auto', status: true, edit: false }, second: { height: 0, status: false, edit: secondEdit }, third: { height: 0, status: false, edit: thirdEdit }, fourth: { height: 0, status: false, edit: fourthEdit } } }) :
            v === 'second' ? this.setState({ sections: { first: { height: 0, status: false, edit: firstEdit }, second: { height: 'auto', status: true, edit: false }, third: { height: 0, status: false, edit: thirdEdit }, fourth: { height: 0, status: false, edit: fourthEdit } } }) :
                v === 'third' ? this.setState({ sections: { first: { height: 0, status: false, edit: firstEdit }, second: { height: 0, status: false, edit: secondEdit }, third: { height: 'auto', status: true, edit: false }, fourth: { height: 0, status: false, edit: fourthEdit } } }) :
                    v === 'fourth' ? this.setState({ sections: { first: { height: 0, status: false, edit: firstEdit }, second: { height: 0, status: false, edit: secondEdit }, third: { height: 0, status: false, edit: thirdEdit }, fourth: { height: 'auto', status: true, edit: false } } }) :
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
                    </div>
                    <div className='addListFirstQuestionContainer' >
                        <div className='addListFirstQuestion' >What type of deal do you want to list? </div>
                        <div className='addListQuestion1BtnGroup' >
                            <div onClick={() => this._handleAnswerSelection('1.1')} className={`addListQuestion1Btn1 ${question1.select1 ? 'addListQuestionActiveBtn' : ''}`} >Meal</div>
                            <div onClick={() => this._handleAnswerSelection('1.2')} className={`addListQuestion1Btn2 ${question1.select2 ? 'addListQuestionActiveBtn' : ''}`} >Happy Hour</div>
                        </div>
                    </div>

                    <div>
                        <div className='addListFirstsectionContainer' >
                            <Section1 question={question1} componentState={sections} handleEdit={() => this.handleEdit('first')} handleNextBtnClick={() => this.handleNextBtnClick('first')} />
                            <hr />
                            <Section2 componentState={sections} handleEdit={() => this.handleEdit('second')} handleNextBtnClick={() => this.handleNextBtnClick('second')} />
                            <hr />
                            <Section3
                                state={this.state}
                                handleDateChange={(v, i) => this.handleDateChange(v,i)}
                                _handleAnswerSelection={(v) => this._handleAnswerSelection(v)}
                                handleEdit={() => this.handleEdit('third')}
                                handleNextBtnClick={() => this.handleNextBtnClick('third')} />
                            <hr />
                            <div className={`addListFirstSectionHeading ${sections.fourth.status ? 'addListFirstSectionHeadingActive' : ''}`} >4. {question1.select1? 'Meal':'Happy Hour'} Picture</div>
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
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default CreateNewListingContainer;
