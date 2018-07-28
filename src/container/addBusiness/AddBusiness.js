import React, { Component } from 'react';
import './AddBusiness.css';
import AddBusinessNav from '../../components/addBusinessPageComponents/addBusinessNav/addBusinessNav';
import { Link } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';
import BusinessContent from '../../components/addBusinessPageComponents/businessContent';
import BusinessContent1 from '../../components/addBusinessPageComponents/businessContent1';
import { CuisineCheckBox } from '../../components/addBusinessPageComponents/cuisineCheckbox/cuisineCheckbox';
import { BASE_URL } from "../../data/api";

class AddBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstSelect: { status: true, height: 'auto', edit: false },
            secondSelect: { status: false, height: 0, edit: false },
            thirdSelect: { status: false, height: 0, edit: false },
            fourthSelect: { status: false, height: 0, edit: false },
            lastHeight: 0,
            dayName: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            breakCheckBox: [false, false, false, false, false, false, false],
            daysCheckBox: [true, true, true, true, true, true, true],
            cuisineType1: ['American', 'Asian', 'Asian Fusion', 'BBQ', 'Bubble Tea', 'Cafe', 'Chinese', 'Desserts', 'Fast Food', 'Greek'],
            cuisineType2: ['Halal', 'Hawaiian', 'Ice Cream and Frozen Yogurt', 'Indian', 'Italian', 'Japanese', 'Juice and Smoothies', 'Korean', 'Mediterranean', 'Mexican'],
            cuisineType3: ['Pizza', 'Salads', 'Sandwiches', 'Seafood', 'Sushi', 'Thai', 'Vegan Friendly', 'Vegetarian Friendly', 'Vietnamese', 'Wings'],
            businessHoursErrors: "",
            cuisineTypeErrors: "",
            submitErrors: ""
        }

        this.handleNext = this.handleNext.bind(this);

        this.businessInfo = {
            addressId: null,
            businessId: null,
            hours: [
                {
                    "day": "monday",
                    "open_time_session_one": null,
                    "close_time_session_one": null
                },
                {
                    "day": "tuesday",
                    "open_time_session_one": null,
                    "close_time_session_one": null
                },
                {
                    "day": "wednesday",
                    "open_time_session_one": null,
                    "close_time_session_one": null
                },
                {
                    "day": "thursday",
                    "open_time_session_one": null,
                    "close_time_session_one": null
                },
                {
                    "day": "friday",
                    "open_time_session_one": null,
                    "close_time_session_one": null
                },
                {
                    "day": "saturday",
                    "open_time_session_one": null,
                    "close_time_session_one": null
                },
                {
                    "day": "sunday",
                    "open_time_session_one": null,
                    "close_time_session_one": null
                }
            ],
            cuisine: []
        };
    }

    getValidBusinessHours = (businessHours) => {
        var validHours = [];
        for (var i = 0; i < businessHours.length; i++) {
            if (businessHours[i].open_time_session_one && businessHours[i].close_time_session_one) {
                validHours.push(businessHours[i]);
            }
        }

        return validHours;
    }

    validateBusinessHours = () => {
        this.setState({ businessHoursErrors: "" });

        var vHours = this.getValidBusinessHours(this.businessInfo.hours);

        return vHours.length === 0;
    }

    validateCuisineType = () => {
        this.setState({ cuisineTypeErrors: "" });
        return this.businessInfo.cuisine.length === 0;
    }

    handleNext(v) {
        console.log(this.businessInfo);
        if (v === 'first') {
            if (!this.businessInfo.name) {
                return;
            }

            this.setState({
                firstSelect: { height: 0, status: false, edit: true },
                secondSelect: { height: 'auto', status: true, edit: false },
                thirdSelect: { height: 0, status: false, edit: false },
                fourthSelect: { height: 0, status: false, edit: false },
            })
        }
        else if (v === 'second') {
            const isError = this.validateBusinessHours();

            if (isError) {
                this.setState({ businessHoursErrors: "Please select business hours day" });
                return;
            }

            this.setState({
                firstSelect: { height: 0, status: false, edit: true, },
                secondSelect: { height: 0, status: false, edit: true },
                thirdSelect: { height: 'auto', status: true, edit: false },
                fourthSelect: { height: 0, status: false, edit: true },
            })
        }
        else if (v === 'third') {
            // Validate
            const isError = this.validateCuisineType();
            if (isError) {
                this.setState({ cuisineTypeErrors: "Please select business cuisne type" });
                return;
            }

            // Submit
            var action = 'business/add';

            if (this.businessInfo.businessId) {
                action = 'business/edit';
            }

            this.submitBusiness(action);
        }
    }

    submitBusiness = (action) => {
        this.setState({
            submitErrors: ""
        });

        var clonedBusinessInfo = Object.assign({}, this.businessInfo);
        var validHours = [];
        for (var i = 0; i < clonedBusinessInfo.hours.length; i++) {
            if (clonedBusinessInfo.hours[i].open_time_session_one && clonedBusinessInfo.hours[i].close_time_session_one) {
                validHours.push(clonedBusinessInfo.hours[i]);
            }
        }

        clonedBusinessInfo.hours = validHours;
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

                this.setState({
                    firstSelect: { ...this.state.secondSelect, edit: true },
                    secondSelect: { ...this.state.secondSelect, edit: true },
                    thirdSelect: { height: 0, status: false, edit: true },
                    fourthSelect: { status: true, height: 'auto', edit: true },
                    lastHeight: 'auto'
                });

                this.businessInfo.addressId = responseJson.addressId;
                this.businessInfo.businessId = responseJson.businessId;
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleCheckBox = (i, v) => {
        const { breakCheckBox, daysCheckBox } = this.state;;
        if (v === 'break') {
            breakCheckBox[i] = !breakCheckBox[i];
            this.setState({ breakCheckBox })
        } else if (v === 'hours') {
            daysCheckBox[i] = !daysCheckBox[i];
            this.setState({ daysCheckBox })
        }
    }

    render() {
        const { firstSelect, secondSelect, thirdSelect, cuisineType1, cuisineType2, cuisineType3 } = this.state
        let firstStatus = firstSelect.status ? 'selected' : '';
        let secondStatus = secondSelect.status ? 'selected' : '';
        let thirdStatus = thirdSelect.status ? 'selected' : '';
        return (
            <div className="navWithDropdown" >
                <AddBusinessNav />
                <div className="top-header" >
                    <div className="heading" style={{ marginTop: 45, fontSize: 27 }} >You’re almost there!</div>
                    <div className='login' >Complete your business details</div>
                    <div className='inputMainContainer signUpInputCont'>
                        <div className='inputContainer centeredInput' style={{ color: 'rgb(244, 67, 54)' }}>
                            {this.state.submitErrors}
                        </div>
                    </div>
                </div>

                <div className='addBusinessSection'>
                    <div className={`businesslistHeading ${firstStatus}`} >1. Basic business information
                    {
                            firstSelect.edit ?
                                <span className='editTxt' onClick={() => this.setState({ firstSelect: { ...firstSelect, height: 'auto', edit: false }, secondSelect: { ...secondSelect, height: 0, edit: true }, thirdSelect: { ...thirdSelect, height: 0, edit: false }, lastHeight: 0 })} >edit</span> : null
                        }
                    </div>
                    <BusinessContent initialState={firstSelect} setState={(v) => this.handleNext(v)} businessInfo={this.businessInfo} errors={this.state.errors} />
                    <hr />
                    <div className={`businesslistHeading ${secondStatus}`} >2. Business Hours:
                    {
                            secondSelect.edit ?
                                <span className='editTxt' onClick={() => this.setState({ firstSelect: { ...firstSelect, height: 0, edit: true }, secondSelect: { ...secondSelect, height: 'auto', edit: false }, thirdSelect: { ...thirdSelect, edit: false, height: 0 }, lastHeight: 0 })} >edit</span> : null
                        }
                    </div>
                    <BusinessContent1 handleCheckBox={this.handleCheckBox} initialState={this.state} setState={(v) => this.handleNext(v)} hours={this.businessInfo.hours} />
                    <div className='inputMainContainer signUpInputCont'>
                        <div className='inputContainer centeredInput' style={{ color: 'rgb(244, 67, 54)' }}>
                            {this.state.businessHoursErrors}
                        </div>
                    </div>
                    <hr />
                    <div className={`businesslistHeading ${thirdStatus}`} >3. Cuisine type(s):
                    {
                            thirdSelect.edit ?
                                <span className='editTxt' onClick={() => this.setState({ firstSelect: { ...firstSelect, height: 0, edit: true }, secondSelect: { ...secondSelect, height: 0, edit: true }, thirdSelect: { ...thirdSelect, edit: true, height: 'auto' }, lastHeight: 0 })} >edit</span> : null
                        }

                    </div>
                    <AnimateHeight duration={500} height={thirdSelect.height} >
                        <div className='cuisineContainer' style={{ marginTop: '20px' }} >
                            <div className='row' >
                                <div className='col-md-4 col-sm-12' >
                                    {
                                        cuisineType1.map((v, i) => {
                                            return (
                                                <CuisineCheckBox key={i} name={v} cuisine={this.businessInfo.cuisine} />
                                            )
                                        })
                                    }
                                </div>
                                <div className='col-md-4 col-sm-12 center' >
                                    {
                                        cuisineType2.map((v, i) => {
                                            return (
                                                <CuisineCheckBox key={i} name={v} cuisine={this.businessInfo.cuisine} />
                                            )
                                        })
                                    }
                                </div>
                                <div className='col-md-4 col-sm-12' >
                                    {
                                        cuisineType3.map((v, i) => {
                                            return (
                                                <CuisineCheckBox key={i} name={v} cuisine={this.businessInfo.cuisine} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='btnContainer' style={{ marginTop: 20 }} >
                                <button className="btn orangeBtn" onClick={() => this.handleNext('third')} >Done!</button>
                            </div>
                        </div>
                    </AnimateHeight>
                    <div className='inputMainContainer signUpInputCont'>
                        <div className='inputContainer centeredInput' style={{ color: 'rgb(244, 67, 54)' }}>
                            {this.state.cuisineTypeErrors}
                        </div>
                    </div>
                    <hr />
                    <AnimateHeight duration={500} height={this.state.lastHeight} >
                        <p className='lastbusinessText' >You have successfully set up your business.</p>
                        <div className='btnContainer' >
                            <Link to={`/CreateList/${this.businessInfo.businessId}`}  className="btn orangeBtn" >Create your first listing</Link>
                        </div>
                    </AnimateHeight>
                </div>
            </div >
        );
    }
}

export default AddBusiness;
