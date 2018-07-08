import React, { Component } from 'react';
import './AddBusiness.css';
import AddBusinessNav from '../../components/addBusinessPageComponents/addBusinessNav/addBusinessNav';
import { Link } from 'react-router-dom';
import AnimateHeight from 'react-animate-height';
import BusinessContent from '../../components/addBusinessPageComponents/businessContent';
import BusinessContent1 from '../../components/addBusinessPageComponents/businessContent1';

class AddBusiness extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstSelect: { status: true, height: 'auto', edit: false },
            secondSelect: { status: false, height: 0, edit: false },
            thirdSelect: { status: false, height: 0, edit: false },
            dayName: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            breakTime: [1, 2, 3],
            cuisineType1: ['American', 'Asian', 'Asian Fusion', 'BBQ', 'Bubble Tea', 'Cafe', 'Chinese', 'Desserts', 'Fast Food', 'Greek'],
            cuisineType2: ['Halal', 'Hawaiian', 'Ice Cream and Frozen Yogurt', 'Indian', 'Italian', 'Japanese', 'Juice and Smoothies', 'Korean', 'Mediterranean', 'Mexican'],
            cuisineType3: ['Pizza', 'Salads', 'Sandwiches', 'Seafood', 'Sushi', 'Thai', 'Vegan Friendly', 'Vegetarian Friendly', 'Vietnamese', 'Wings'],
        }
        this.handleNext = this.handleNext.bind(this);
    }

    handleNext(v) {
        if (v === 'first') {
            this.setState({
                firstSelect: { height: 0, edit: true, status: false },
                secondSelect: { height: 'auto', status: true, edit: false },
            })
        }
        else if (v === 'second') {
            this.setState({
                firstSelect: { height: 0, status: false, edit: true, },
                secondSelect: { height: 0, status: false, edit: true },
                thirdSelect: { height: 'auto', status: true, edit: false },
            })
        }
        else if (v === 'third') {
            this.setState({
                firstSelect: { ...this.state.thirdSelect, edit: true },
                secondSelect: { ...this.state.thirdSelect, edit: true },
                thirdSelect: { status: true, height: 'auto', edit: false },
            })
        }
    }

    render() {
        const { firstSelect, secondSelect, thirdSelect } = this.state
        let firstStatus = firstSelect.status ? 'selected' : '';
        let secondStatus = secondSelect.status ? 'selected' : '';
        let thirdStatus = thirdSelect.status ? 'selected' : '';
        return (
            <div className="navWithDropdown" >
                <AddBusinessNav />
                <div className="top-header" >
                    <div className="heading" >You’re almost there!</div>
                    <div className='login' >Complete your business details</div>
                </div>

                <div className='addBusinessSection'>
                    <div className={`businesslistHeading ${firstStatus}`} >1. Basic business information
                    {
                            firstSelect.edit ?
                                <span onClick={() => this.setState({ firstSelect: { ...firstSelect, height: 'auto', edit: false }, secondSelect: { ...secondSelect, height: 0, edit: true } })} >edit</span> : null
                        }
                    </div>
                    <BusinessContent initialState={firstSelect} setState={(v) => this.handleNext(v)} />
                    <div className={`businesslistHeading ${secondStatus}`} >2. Important business details
                    {
                            secondSelect.edit ?
                                <span onClick={() => this.setState({ firstSelect: { ...firstSelect, height: 0, edit: true }, secondSelect: { ...secondSelect, height: 'auto', edit: false } })} >edit</span> : null
                        }
                    </div>

                    <BusinessContent1 initialState={this.state} setState={(v) => this.handleNext(v)} />

                    <div className={`businesslistHeading done ${thirdStatus}`} >3. Done!</div>
                    <AnimateHeight duration={500} height={thirdSelect.height} >
                        <h4 style={{marginTop: '45px'}} >You have successfully set up your business.</h4>
                        <div className='btnContainer' >
                            <button className="btn" >Create your first listing</button>
                        </div>
                    </AnimateHeight>
                </div>
            </div>
        );
    }
}

export default AddBusiness;
