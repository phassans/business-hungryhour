import React, { Component } from 'react';
import './CreateNewListingScreen.css';
import CreateNewListingNavBar from '../../components/navs/CreateNewListingScreenNav/CreateNewListingScreenNav';
import AnimateHeight from 'react-animate-height';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Section1 from '../../components/createNewListComponent/section1';
import Section2 from '../../components/createNewListComponent/section2';
import Section3 from '../../components/createNewListComponent/section3';
import { BASE_URL } from "../../data/api";

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
            startDate: null,
            endDate: null,
            endDate1: null,
            startTime: '',
            endTime: '',
            ImageUploader: 'UPLOAD IMAGE',
            mealDetailsErrors: "",
            submitErrors: "",
            isSuccess: false,
            editListing: null
        }
        this._handleAnswerSelection = this._handleAnswerSelection.bind(this);
        this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this._onSelect = this._onSelect.bind(this)
        this.onUpload = this.onUpload.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.businessId = this.props.match.params.businessId;
        this.listingId = this.props.match.params.listingId;

        this.listingInfo = {
            dietaryRestriction: [],
            listingId: null,
            recurringDays: []
        };

        if (this.listingId) {
            this.listingInfo.listingId = parseInt(this.listingId);
        }
    }

    getListById = (id) => {
        fetch(BASE_URL + 'listing?listingId=' + id, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.code === 400 || responseJson.code === 500) {
                    alert(responseJson.message);
                    return;
                }

                this.setState({ 
                    editListing: responseJson, 
                    startDate: moment(responseJson.startDate),
                    startTime: moment(responseJson.startTime, 'YYYY-MM-DDThh:mm A').format('hh:mm A'),
                    endDate: moment(responseJson.endDate),
                    endTime: moment(responseJson.endTime, 'YYYY-MM-DDThh:mm A').format('hh:mm A')
                });

                if (responseJson.listingType === 'happyhour') {
                    this._handleAnswerSelection('1.2');
                }

                if (responseJson.multipleDays) {
                    this._handleAnswerSelection('2.1');
                } else {
                    this._handleAnswerSelection('2.2');
                }

                if (responseJson.recurring) {
                    this._handleAnswerSelection('3.1');
                } else {
                    this._handleAnswerSelection('3.2');
                }

                if (responseJson.dietaryRestriction) {
                    this.listingInfo.dietaryRestriction = responseJson.dietaryRestriction;
                }

                if (responseJson.recurringDays) {
                    this.listingInfo.recurringDays = responseJson.recurringDays;
                }

                if (responseJson.recurringEndDate) {
                    this.setState({ 
                        endDate1: moment(responseJson.recurringEndDate)
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        if (this.listingId) {
            this.getListById(this.listingId);
        }
    }

    onUpload(ev) {
        console.log(ev.target.files[0])
        this.setState({
            ImageUploader: ev.target.files[0].name,
        });

        this.listingInfo.ImageUploader = ev.target.files[0].name;
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

    validateMealDetails = (first, second, third, fourth) => {
        this.setState({ mealDetailsErrors: "", submitErrors: "", isSuccess: false });
        let isError = false;
        let errorStr = "";

        if (this.state.startDate.length === 0) {
            errorStr += "Start date is required, ";
            isError = true;
        }

        if (this.state.startTime.length === 0) {
            errorStr += "Start Time is required, ";
            isError = true;
        }

        if (!this.state.question2.select1 && !this.state.question2.select2) {
            errorStr += "Select Multiple days in a row, ";
            isError = true;
        }

        if (!this.state.question3.select1 && !this.state.question3.select2) {
            errorStr += "Select Recurring";
            isError = true;
        }

        if (!isError) {
            this.listingInfo.startDate = moment(this.state.startDate).format('MM/DD/YYYY');
            this.listingInfo.startTime = this.state.startTime;

            if (this.state.endTime && this.state.endTime.length > 0) {
                this.listingInfo.endTime = this.state.endTime;
            } else {
                this.listingInfo.endTime = "23:59:59";
            }

            if (this.state.endDate) {
                this.listingInfo.endDate = moment(this.state.endDate).format('MM/DD/YYYY');
            }
            else {
                this.listingInfo.endDate = moment().format('MM/DD/YYYY');
            }

            if (this.state.endDate1) {
                this.listingInfo.recurringEndDate = moment(this.state.endDate1).format('MM/DD/YYYY');
            }

            this.listingInfo.recurring = this.state.question3.select1;
            this.listingInfo.multipleDays = this.state.question2.select1;
            this.listingInfo.businessID = parseInt(this.businessId);

            this.setState({ sections: { first: { ...first }, second: { ...first }, third: { ...first }, fourth: { ...third } } });
        } else {
            this.setState({ mealDetailsErrors: errorStr });
        }

        return isError;
    }

    handleNextBtnClick(v) {
        const { first, second, third, fourth } = this.state.sections;
        v === 'first' ? this.setState({ sections: { first: { ...second, edit: true }, second: { ...first, }, third: { ...third }, fourth: { ...fourth } } }) :
            v === 'second' ? this.setState({ sections: { first: { ...first }, second: { ...first }, third: { ...second }, fourth: { ...fourth } } }) :
                v === 'third' ? this.validateMealDetails(first, second, third, fourth) :
                    null
    }

    _onSelect(option, v) {
        if (v === 'first') {
            this.setState({ startTime: option.value })
        } else if (v === 'second') {
            this.setState({ endTime: option.value })
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

    publish = (action) => {
        this.setState({
            submitErrors: "",
            isSuccess: false
        });

        var clonedBusinessInfo = Object.assign({}, this.listingInfo);

        console.log(clonedBusinessInfo);

        fetch(BASE_URL + action, {
            method: 'POST',
            body: JSON.stringify(clonedBusinessInfo)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.code === 400 || responseJson.code === 500) {
                    this.setState({ submitErrors: responseJson.message });
                    return;
                }

                this.listingInfo.listingId = responseJson.listingId;
                this.setState({ isSuccess: true });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { question1, sections, question2, question3 } = this.state;
        return (
            <div className='mainContainer' >
                <CreateNewListingNavBar />

                <div className='addListContent' >
                    <div className='addListHeaderContainer' >
                        <div className='addListHeader' >{ !this.listingInfo.listingId ? 'NEW LISTING' : 'EDIT LISTING' }</div>
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
                            {
                                (!this.listingId || this.state.editListing) && (
                                    <div>
                                        <Section1 question={question1} componentState={sections} handleEdit={() => this.handleEdit('first')} handleNextBtnClick={() => this.handleNextBtnClick('first')}
                                            listingInfo={this.listingInfo} editListing={this.state.editListing} />
                                        <hr />
                                        <Section2 componentState={sections} handleEdit={() => this.handleEdit('second')} 
                                        handleNextBtnClick={() => this.handleNextBtnClick('second')} 
                                        dietaryRestriction={this.listingInfo.dietaryRestriction} editListing={this.state.editListing} />
                                        <hr />
                                        <Section3
                                            state={this.state}
                                            handleDateChange={(v, i) => this.handleDateChange(v, i)}
                                            _handleAnswerSelection={(v) => this._handleAnswerSelection(v)}
                                            handleEdit={() => this.handleEdit('third')}
                                            handleNextBtnClick={() => this.handleNextBtnClick('third')}
                                            _onSelect={(v, o) => this._onSelect(v, o)} 
                                            recurringDays={this.listingInfo.recurringDays}
                                            editListing={this.state.editListing}/>
                                        <div className='inputMainContainer signUpInputCont'>
                                            <div className='inputContainer centeredInput' style={{ color: 'rgb(244, 67, 54)' }}>
                                                {this.state.mealDetailsErrors}
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                )
                            }


                            <div className={`addListFirstSectionHeading ${sections.fourth.status ? 'addListFirstSectionHeadingActive' : ''}`} >4. {question1.select1 ? 'Meal' : 'Happy Hour'} Picture</div>
                            {
                                sections.fourth.edit ?
                                    <span onClick={() => this.handleEdit('fourth')} className='addListEditTxt' >edit</span> : null
                            }
                            <AnimateHeight duration={500} height={sections.fourth.height} >
                                <div className='' >
                                    <div style={{ marginTop: 20, marginBottom: 20 }} >
                                        <input type="file" name="file" id="file" className="inputfile" onChange={this.onUpload} />
                                        <label htmlFor="file">{this.state.ImageUploader}</label>
                                    </div>
                                    <div className='btnContainer' >
                                        <button className="btn orangeBtn" onClick={() => this.publish(!this.listingInfo.listingId ? 'listing/add' : 'listing/edit')}>Publish</button>
                                    </div>
                                    <div className='inputMainContainer signUpInputCont'>
                                        <div className='inputContainer centeredInput' style={{ color: 'rgb(244, 67, 54)' }}>
                                            {this.state.submitErrors}
                                        </div>
                                    </div>
                                    {this.state.isSuccess && (
                                        <div className='inputMainContainer signUpInputCont'>
                                            <div className='inputContainer centeredInput' style={{ color: 'green' }}>
                                                Successully!!
                                        </div>
                                        </div>
                                    )}
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
