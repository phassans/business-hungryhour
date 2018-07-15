import React, { Component } from 'react';
import AnimateHeight from 'react-animate-height';
import './style.css';

class Section1 extends Component {
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
                    <div className='inputMainContainer full' style={{marginTop: 10}} >
                        {
                            question.select1 ?
                                <div>
                                    <div className='inputContainer'  >
                                        <input type='text' placeholder='Meal name' />
                                    </div>
                                    <div className='inputContainer' >
                                        <input type='text' placeholder='Old price' />
                                    </div>
                                    <div className='inputContainer' >
                                        <input type='text' placeholder='New price' />
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className='addListFirstQuestion' >Item(s) discounted (ex: all drinks, all appetizers, all beers): </div>
                                    <div className='inputContainer'  >
                                        <input type='text' placeholder='All apetizers' />
                                    </div>
                                    <div className='addListInputContGroup' >
                                        <div>
                                            <input type='text' placeholder='Deal % off ' />
                                        </div>
                                        <div className='addListInputRightCont' >
                                            <input type='text' placeholder='Price' />
                                        </div>
                                        <span>OR</span>
                                    </div>
                                </div>
                        }
                        <div className='inputContainer' >
                            <textarea placeholder='Description' className='addListDescription' cols="40" rows="8"></textarea>
                        </div>
                        <div className='btnContainer' >
                            <button className="btn orangeBtn" onClick={() => handleNextBtnClick()}>Next</button>
                        </div>
                    </div>
                    <div>
                    </div>
                    
                </AnimateHeight>
            </div>
        )
    }
}

export default Section1;