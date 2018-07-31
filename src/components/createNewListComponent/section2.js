import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import './style.css';

class Section2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vegetarianChecked: false,
            veganChecked: false,
            glutenChecked: false
        }
    }

    componentDidMount() {
        if (this.props.editListing && this.props.editListing.dietaryRestriction) {
            let cbDefaults = {
                vegetarianChecked: false,
                veganChecked: false,
                glutenChecked: false
            };

            const dietaries = this.props.editListing.dietaryRestriction;

            if (dietaries.includes("vegetarian")) {
                cbDefaults.vegetarianChecked = true;
            }

            if (dietaries.includes("vegan")) {
                cbDefaults.veganChecked = true;
            }

            if (dietaries.includes("gluten free")) {
                cbDefaults.glutenChecked = true;
            }

            this.setState({
                ...this.state,
                ...cbDefaults
            });
        }
    }

    handleCheck = (event, val) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        
        var index = this.props.dietaryRestriction.indexOf(val);
        if (event.target.checked) {
            if (index === -1) {
                this.props.dietaryRestriction.push(val);
            }
        } else {
            this.props.dietaryRestriction.splice(index, 1);
        }
    }

    render() {
        const { status, height, edit } = this.props.componentState.second;
        const { handleEdit, handleNextBtnClick } = this.props;
        return (
            <div>
                <div className={`addListFirstSectionHeading ${status ? 'addListFirstSectionHeadingActive' : ''}`} >2. Dietary Restrictions (optional)</div>
                {
                    edit ?
                        <span onClick={() => handleEdit('second')} className='addListEditTxt' >edit</span> : null
                }
                <AnimateHeight duration={500} height={height} >
                    <div className='' >
                        <div className='addListFirstQuestion' style={{ marginTop: 10 }} >Please check the dietary restrictions that your meal meets</div>
                        <div style={{ marginTop: 20, marginBottom: 20 }} >
                            <div className='addListCheckBoxContainer'>
                                <label className="container">
                                    <input name="vegetarianChecked" type="checkbox" checked={this.state.vegetarianChecked} onChange={(event) => this.handleCheck(event, "vegetarian")} />
                                    <span className="checkmark"></span>
                                    Vegetarian
                                        </label>
                            </div>
                            <div className='addListCheckBoxContainer'>
                                <label className="container">
                                    <input type="checkbox" name="veganChecked" checked={this.state.veganChecked} onChange={(event) => this.handleCheck(event, "vegan")} />
                                    <span className="checkmark"></span>
                                    Vegan
                                        </label>
                            </div>
                            <div className='addListCheckBoxContainer'>
                                <label className="container">
                                    <input type="checkbox" name="glutenChecked" checked={this.state.glutenChecked} onChange={(event) => this.handleCheck(event, "gluten free")} />
                                    <span className="checkmark"></span>
                                    Gluten free
                                        </label>
                            </div>
                        </div>
                        <div className='btnContainer' >
                            <button className="btn orangeBtn" onClick={() => handleNextBtnClick('second')}>Next</button>
                        </div>
                    </div>
                </AnimateHeight>
            </div>
        )
    }
}

export default Section2;