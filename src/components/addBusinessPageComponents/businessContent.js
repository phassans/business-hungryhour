import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';

import TextField from "material-ui/TextField";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class BusinessContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            nameError: "",
            street: "",
            streetError: "",
            city: "",
            cityError: "",
            state: "",
            stateError: "",
            postalCode: "",
            zipcodeError: "",
            phone: "",
            phoneError: "",
            website: "",
            websiteError: ""
        };
    }

    updateInput = (e, p) => {
        this.setState({
            [e.target.name]: e.target.value
          });
    }

    validate = () => {
        let isError = false;
        const errors = {
            nameError: "",
            streetError: "",
            cityError: "",
            stateError: "",
            zipcodeError: "",
            phoneError: "",
            websiteError: ""
        };

        if (this.state.name.length == 0) {
            isError = true;
            errors.nameError = "Business name is required";
        }

        if (this.state.street.length == 0) {
            isError = true;
            errors.streetError = "Street is required";
        }

        if (this.state.city.length == 0) {
            isError = true;
            errors.cityError = "City is required";
        }

        if (this.state.state.length == 0) {
            isError = true;
            errors.stateError = "State is required";
        }

        if (this.state.postalCode.length == 0) {
            isError = true;
            errors.zipcodeError = "Zipcode is required";
        }

        if (this.state.phone.length == 0) {
            isError = true;
            errors.phoneError = "Business Phone is required";
        }

        if (this.state.website.length == 0) {
            isError = true;
            errors.websiteError = "Website is required";
        }
        this.setState({
            ...this.state,
            ...errors
        });

        if (!isError) {
            this.props.businessInfo.name = this.state.name;
            this.props.businessInfo.phone = this.state.phone;
            this.props.businessInfo.website = this.state.website;
            this.props.businessInfo.street = this.state.street;
            this.props.businessInfo.city = this.state.city;
            this.props.businessInfo.postalCode = this.state.postalCode;
            this.props.businessInfo.state = this.state.state;
        }

        return isError;
    }

    next = e => {
        const err = this.validate();
        if (!err) {
            this.props.setState('first');
        }
    }

    render() {
        const { height } = this.props.initialState;

        return (
            <AnimateHeight duration={500} height={height} >
                <form>
                    <MuiThemeProvider>
                        <div className='inputMainContainer full' >
                            <div className='inputContainer'  >
                                <TextField
                                    name="name"
                                    hintText="Business name"
                                    value={this.state.name}
                                    onChange={e => this.updateInput(e, 'name')}
                                    errorText={this.state.nameError}
                                    type="text"
                                />
                                {/* <input type='text' placeholder='Business name' onBlur={(e) => this.updateInput(e, 'name')} /> */}
                            </div>
                            <div className='inputContainer' >
                                <TextField
                                    name="street"
                                    hintText="Street"
                                    value={this.state.street}
                                    onChange={e => this.updateInput(e, 'street')}
                                    errorText={this.state.streetError}
                                    type="text"
                                />
                                {/* <input type='text' placeholder='Street' onBlur={(e) => this.updateInput(e, 'street')} /> */}
                            </div>
                            <div className='row centerInput' >
                                <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                                    <TextField
                                        name="city"
                                        hintText="City"
                                        value={this.state.city}
                                        onChange={e => this.updateInput(e, 'city')}
                                        errorText={this.state.cityError}
                                        type="text"
                                    />
                                    {/* <input type='text' placeholder='City' onBlur={(e) => this.updateInput(e, 'city')} /> */}
                                </div>
                                <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                                    <TextField
                                        name="state"
                                        hintText="State"
                                        value={this.state.state}
                                        onChange={e => this.updateInput(e, 'state')}
                                        errorText={this.state.stateError}
                                        type="text"
                                    />
                                    {/* <input type='text' placeholder='State' onBlur={(e) => this.updateInput(e, 'state')} /> */}
                                </div>
                                <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                                    <TextField
                                        name="postalCode"
                                        hintText="Zip Code"
                                        value={this.state.postalCode}
                                        onChange={e => this.updateInput(e, 'postalCode')}
                                        errorText={this.state.zipcodeError}
                                        type="text"
                                    />
                                    {/* <input type='text' placeholder='Zip Code' onBlur={(e) => this.updateInput(e, 'postalCode')} /> */}
                                </div>
                            </div>
                            <div className='row centerInput' >
                                <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                                    <TextField
                                        name="phone"
                                        hintText="Business Phone"
                                        value={this.state.phone}
                                        onChange={e => this.updateInput(e, 'phone')}
                                        errorText={this.state.phoneError}
                                        type="text"
                                    />
                                    {/* <input type='text' placeholder='Business Phone' onBlur={(e) => this.updateInput(e, 'phone')} /> */}
                                </div>
                                <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                                    <TextField
                                        name="website"
                                        hintText="Business URL"
                                        value={this.state.website}
                                        onChange={e => this.updateInput(e, 'website')}
                                        errorText={this.state.websiteError}
                                        type="text"
                                    />
                                    {/* <input type='text' placeholder='Business URL' onBlur={(e) => this.updateInput(e, 'website')} /> */}
                                </div>
                                <div className='inputContainer col-md-4 col-sm-12 customiStyle' >
                                    {/* <input type='text' placeholder='Zip Code' /> */}
                                </div>
                            </div>
                            {/* <div className='inputContainer' >

                        <input type='text'  />
                    </div> */}
                            <div className='btnContainer' >
                                <a className="btn orangeBtn" onClick={(e) => this.next(e)}>Next</a>
                            </div>
                        </div>
                    </MuiThemeProvider>
                </form>

            </AnimateHeight>
        );
    }
}

export default BusinessContent;
