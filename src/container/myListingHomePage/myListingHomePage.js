import React, { Component } from 'react';
import './myListingHomePage.css';
import CreateNewListingNavBar from '../../components/navs/CreateNewListingScreenNav/CreateNewListingScreenNav';
import { Route, Link } from 'react-router-dom';
import MyList from './mylist';

class myListingHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                name: '$5 Curry Chicken',
                type: 'Meal',
                date: '6/28/18-6/28/18',
                time: '5pm-7pm',
                recurring: 'No',
                status: 'Ended',
                dropdown: false,
            },
            {
                name: '40% all beer',
                type: 'Happy Hour',
                date: '4/30/18-8/30/18',
                time: '3pm-5pm',
                recurring: 'Monday',
                status: 'Active',
                dropdown: false,
            },
            {
                name: '$6 all appetizers',
                type: 'Happy Hour',
                date: '8/12/18-9/12/18',
                time: '1pm-4pm',
                recurring: 'Sunday, Monday',
                status: 'Scheduled',
                dropdown: false,
            },
            ]
        }
    }

    handleDropDown(i) {
        let list = this.state.list;
        console.log(list[i].dropdown)
        if (list[i].dropdown) {
            list[i].dropdown = !list[i].dropdown
        } else {
            for (var v = 0; v < list.length; v++) {
                if (list[v].dropdown) {
                    list[v].dropdown = false
                    break;
                }
            }
            list[i].dropdown = !list[i].dropdown;
        }
        this.setState({ list })
    }

    render() {
        return (
            <div className='mainContainer' >
                <CreateNewListingNavBar />
                <div className='MyAccountContainer' >
                    <div className='MAHeading' >My Listings</div>
                    <div>3 listings</div>
                    <ul className='MAheaderTab' >
                        <li className='MAheaderTab1' >
                            <Link to='/MyListing/all' >All</Link>
                        </li>
                        <li className='MAheaderTab2 MLhaederTab' >
                            <Link to='/MyListing/active' >Active</Link>
                        </li>
                        <li className='MAheaderTab2' >
                            <Link to='/MyListing/scheduled' >Scheduled</Link>
                        </li>
                        <li className='MAheaderTab2' >
                            <Link to='/MyListing/ended' >Ended</Link>
                        </li>
                    </ul>

                    <div>
                        <Route path='/MyListing/all' exact render={(props) => <MyList {...props} handleDropDown={this.handleDropDown.bind(this)} list={this.state.list} />} />
                        <Route path='/MyListing/active' render={(props) => <MyList {...props} list={this.state.list} />} />
                        <Route path='/MyListing/scheduled' render={(props) => <MyList {...props} list={this.state.list} />} />
                        <Route path='/MyListing/ended' render={(props) => <MyList {...props} list={this.state.list} />} />
                    </div>
                    <div className='btnContainer' >
                        <Link className="btn orangeBtn" to='/CreateList' >Create new listing</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default myListingHomePage;
