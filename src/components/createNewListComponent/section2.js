import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import './style.css';

class Section2 extends Component {
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
                            <button className="btn orangeBtn" onClick={() => handleNextBtnClick('second')}>Next</button>
                        </div>
                    </div>
                </AnimateHeight>
            </div>
        )
    }
}

export default Section2;