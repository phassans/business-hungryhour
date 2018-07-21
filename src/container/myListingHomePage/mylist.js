import React, { Component } from 'react';
import './mylist.css';
import { Route, Link } from 'react-router-dom';

class MyList extends Component {
    render() {
        // console.log(this.props.list)
        return (
            <div className='mainContainer' >
                <table className="table table-hover table-bordered myListTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Start & end date</th>
                            <th>Start & end time</th>
                            <th>Recurring</th>
                            <th>Status</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.list.map((v, i) => {
                                return (
                                    <tr key={i} >
                                        <th scope="row">{v.name}</th>
                                        <td>{v.type}</td>
                                        <td>{v.date}</td>
                                        <td>{v.time}</td>
                                        <td>{v.recurring}</td>
                                        <td>{v.status}</td>
                                        <td>
                                            <div className="dropdownML" >
                                                <a href='javascript:void(0)' onClick={() => this.props.handleDropDown(i)} >
                                                    <i style={{ color: '#000000' }} className="fas fa-ellipsis-h"></i>
                                                </a>
                                                <div className={`dropdown-content ${v.dropdown ? 'makeBlock' : ''}`}>
                                                    <Link to='/CreateList' >Edit</Link>
                                                    <a href="javascript:void(0)" >Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MyList;
