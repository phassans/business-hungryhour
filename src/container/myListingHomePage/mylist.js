import React, { Component } from 'react';
import './mylist.css';
import { Route, Link } from 'react-router-dom';
import moment from 'moment';

class MyList extends Component {
    componentDidMount() {
        console.log( this.props.list);
    }
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
                                    (this.props.status === 'all' || v.listingStatus === this.props.status) && (
                                        <tr key={i} >
                                            <th scope="row">{v.title}</th>
                                            <td>{v.listingType}</td>
                                            <td>{moment(v.startDate).format('MM/DD/YYYY')}-{moment(v.endDate).format('MM/DD/YYYY')}</td>
                                            <td>{moment(v.startTime).format('HH:mm')}-{moment(v.endTime).format('HH:mm')}</td>
                                            <td>{v.recurring ? 'Yes' : 'No'}</td>
                                            <td>{v.listingStatus}</td>
                                            <td>
                                                <div className="dropdownML" >
                                                    <a href='javascript:void(0)' onClick={() => this.props.handleDropDown(i)} >
                                                        <i style={{ color: '#000000' }} className="fas fa-ellipsis-h"></i>
                                                    </a>
                                                    <div className={`dropdown-content ${v.dropdown ? 'makeBlock' : ''}`}>
                                                        <Link to={`/EditList/${v.listingId}/${this.props.match.params.businessId}`} >Edit</Link>
                                                        <a href="javascript:void(0)" onClick={() => this.props.deleteListing(v.listingId)}>Delete</a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )

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
