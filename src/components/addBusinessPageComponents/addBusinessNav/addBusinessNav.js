import React, { Component } from 'react';
import './addBusinessNav.css';
import AnimateHeight from 'react-animate-height';

class AddBusinessNav extends Component {
constructor(){
    super();
    this.state ={
        dropdown: false,
    }
}

    render() {
        let makeBlock = this.state.dropdown ? 'makeBlock' : '';
        return (
            <div className="navWithDropdown" >
                <div className='navLogo' >Logo</div>
                <div className="dropdown" >
                    <button type="button" >
                        <span className="glyphicon glyphicon-user"></span>
                    </button>
                    <a href="#" onClick={() => this.setState({dropdown: !this.state.dropdown })} ><i className="fas fa-caret-down"></i></a>
                    <div className={`dropdown-content ${makeBlock}`}>
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                    <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a className="dropdown-item" href="#!">Dropdown link</a>
                        <a className="dropdown-item" href="#!">Dropdown link</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBusinessNav;
