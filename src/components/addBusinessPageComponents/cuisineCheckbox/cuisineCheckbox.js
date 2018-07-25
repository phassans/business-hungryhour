import React, { Component } from 'react';

export class CuisineCheckBox extends Component {
    handleCheck = (event) => {
        var index = this.props.cuisine.indexOf(this.props.name);
        if (event.target.checked) {
            if (index === -1) 
            {
                this.props.cuisine.push(this.props.name);
            }
        } else {
            this.props.cuisine.splice(index, 1);
        }
    }

    render() {
        return (

            <label className="container" style={{ marginTop: '8px', marginBottom: '8px',color: '#000000' }} >
                {this.props.name}
                <input type="checkbox" onChange={(event) => this.handleCheck(event)} />
                <span style={{ marginLeft: '20%', marginTop: '4px', }} className="checkmark"></span>
            </label>

        )
    }
}