import React, { Component } from 'react';

export class CuisineCheckBox extends Component {
    render() {
        return (

            <label className="container" style={{ marginTop: '8px', marginBottom: '8px' }} >
                {this.props.name}
                <input type="checkbox" />
                <span style={{ marginLeft: '20%', marginTop: '4px', }} className="checkmark"></span>
            </label>

        )
    }
}