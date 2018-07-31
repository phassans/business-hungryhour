import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import './style.css';
import TextField from "material-ui/TextField";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Section1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            oldPriceM: '',
            newPriceM: '',
            title: "",
            titleError: "",
            newPrice: "",
            newPriceError: "",
            oldPrice: "",
            oldPriceError: "",
            description: "",
            descriptionError: "",
            discount: "",
            discountError: ""
        }
    }

    componentDidMount() {
        if (this.props.editListing) {
            this.setState({
                ...this.state,
                ...this.props.editListing
            });
        }
    }

    updateInput = (e, p) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeInput(v, i) {
        i === 'oldPriceM' ? this.setState({ oldPriceM: v.target.value }) :
            i === 'newPriceM' ? this.setState({ newPriceM: v.target.value }) : null
    }

    validate = () => {
        let isError = false;
        const errors = {
            titleError: "",
            newPriceError: "",
            oldPriceError: "",
            descriptionError: "",
            discountError: "",
        };

        if (this.state.title.length == 0) {
            isError = true;
            errors.titleError = "Title is required";
        }

        if (this.state.newPrice.length == 0)
        {
            isError = true;
            errors.newPriceError = "Price is required";
        }
        
        if (this.state.description.length == 0) {
            isError = true;
            errors.descriptionError = "Description is required";
        }

        this.setState({
            ...this.state,
            ...errors
        });

        if (!isError) {
            this.props.listingInfo.title = this.state.title;

            this.props.listingInfo.newPrice = parseFloat(this.state.newPrice);

            if (this.state.discount) {
                this.props.listingInfo.discount = parseFloat(this.state.discount);
            }

            if (this.state.oldPrice) {
                this.props.listingInfo.oldPrice = parseFloat(this.state.oldPrice);
            }

            this.props.listingInfo.description = this.state.description;
            this.props.listingInfo.listingType = this.props.question.select1 ? 'meal' : 'happyhour';
        }

        return isError;
    }

    next = e => {
        const err = this.validate();
        if (!err) {
            this.props.handleNextBtnClick();
        }
    }

    render() {
        const { status, height, edit } = this.props.componentState.first;
        const { handleEdit, handleNextBtnClick, question } = this.props;
        return (
            <div>
                <div className={`addListFirstSectionHeading ${status ? 'addListFirstSectionHeadingActive' : ''}`} >1. {question.select1 ? 'Meal' : 'Happy Hour'} Basics</div>
                {
                    edit ?
                        <span onClick={() => handleEdit()} className='addListEditTxt' >edit</span> : null
                }
                <AnimateHeight duration={500} height={height} >
                    <div className='inputMainContainer full' style={{ marginTop: 10 }} >
                        <form>
                            <MuiThemeProvider>
                                <div>
                                    {
                                        question.select1 ?
                                            <div>
                                                <div className='inputContainer'  >
                                                    <TextField
                                                        name="title"
                                                        hintText="Meal name"
                                                        value={this.state.title}
                                                        onChange={e => this.updateInput(e, 'title')}
                                                        errorText={this.state.titleError}
                                                        type="text"
                                                    />
                                                    {/* <input type='text' placeholder='Meal name' /> */}
                                                </div>
                                                <div className='inputContainer inputContainerpositionRelative ' >
                                                    <TextField
                                                        name="oldPrice"
                                                        hintText="$ Old price"
                                                        value={this.state.oldPrice}
                                                        onChange={e => this.updateInput(e, 'oldPrice')}
                                                        errorText={this.state.oldPriceError}
                                                        type="text"
                                                    />
                                                    {/* <input type='text' placeholder='Old price' value={this.state.oldPriceM} onInput={(v) => this.handleChangeInput(v, 'oldPriceM')} />
                                                    <span className='dollarSign' >$</span> */}
                                                </div>
                                                <div className='inputContainer inputContainerpositionRelative ' >
                                                    <TextField
                                                        name="newPrice"
                                                        hintText="$ New price"
                                                        value={this.state.newPrice}
                                                        onChange={e => this.updateInput(e, 'newPrice')}
                                                        errorText={this.state.newPriceError}
                                                        type="text"
                                                    />
                                                    {/* <input type='text' placeholder='New price' onInput={(v) => this.handleChangeInput(v, 'NewPriceM')} />
                                                    <span className='dollarSign' >$</span> */}
                                                </div>
                                                <div className='inputContainer' >
                                                    <TextField
                                                        name="description"
                                                        hintText="Description"
                                                        value={this.state.description}
                                                        onChange={e => this.updateInput(e, 'description')}
                                                        errorText={this.state.descriptionError}
                                                        multiLine={true}
                                                        rows={2}
                                                        type="text"
                                                    />
                                                    {/* <textarea placeholder='Description' className='addListDescription' cols="40" rows="8"></textarea> */}
                                                </div>
                                            </div>
                                            :
                                            <div>
                                                <div className='addListFirstQuestion' >Item(s) discounted (ex: all drinks, all appetizers, all beers): </div>
                                                <div className='inputContainer'  >
                                                    <TextField
                                                        name="title"
                                                        hintText="All apetizers"
                                                        value={this.state.title}
                                                        onChange={e => this.updateInput(e, 'title')}
                                                        errorText={this.state.titleError}
                                                        type="text"
                                                    />
                                                    {/* <input type='text' placeholder='All apetizers' /> */}
                                                </div>
                                                <div className='addListInputContGroup' >
                                                    <div className='dealInputCont percentOffCont' >
                                                        <TextField
                                                            name="discount"
                                                            hintText="Deal (% off)"
                                                            value={this.state.discount}
                                                            onChange={e => this.updateInput(e, 'discount')}
                                                            errorText={this.state.discountError}
                                                            type="text"
                                                        />
                                                        {/* <input type='text' placeholder='Deal' />
                                                        <span>% off</span> */}
                                                    </div>
                                                    <div className='addListInputRightCont priceHH' >
                                                        <TextField
                                                            name="newPrice"
                                                            hintText="$ Price"
                                                            value={this.state.newPrice}
                                                            onChange={e => this.updateInput(e, 'newPrice')}
                                                            errorText={this.state.newPriceError}
                                                            type="text"
                                                        />
                                                        {/* <input type='text' placeholder='Price' onInput={(v) => this.handleChangeInput(v)} />
                                                        <span className='dollarSign' >$</span> */}
                                                    </div>
                                                    <span>OR</span>
                                                </div>
                                                <div className='inputContainer' >
                                                    <TextField
                                                        name="description"
                                                        hintText="Description"
                                                        value={this.state.description}
                                                        onChange={e => this.updateInput(e, 'description')}
                                                        errorText={this.state.descriptionError}
                                                        multiLine={true}
                                                        rows={2}
                                                        type="text"
                                                    />
                                                    {/* <textarea placeholder='Description' className='addListDescription' cols="40" rows="8"></textarea> */}
                                                </div>
                                            </div>
                                    }
                                    <div className='btnContainer' >
                                        <a className="btn orangeBtn" onClick={(e) => this.next(e)}>Next</a>
                                    </div>
                                </div>
                            </MuiThemeProvider>

                        </form>
                    </div>
                    <div>
                    </div>

                </AnimateHeight>
            </div>
        )
    }
}

export default Section1;