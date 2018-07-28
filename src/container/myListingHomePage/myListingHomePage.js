import React, { Component } from 'react';
import './myListingHomePage.css';
import CreateNewListingNavBar from '../../components/navs/CreateNewListingScreenNav/CreateNewListingScreenNav';
import { Route, Link } from 'react-router-dom';
import MyList from './mylist';
import { BASE_URL } from "../../data/api";

class myListingHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        // {
        //     name: '$5 Curry Chicken',
        //     type: 'Meal',
        //     date: '6/28/18-6/28/18',
        //     time: '5pm-7pm',
        //     recurring: 'No',
        //     status: 'Ended',
        //     dropdown: false,
        // },
        // {
        //     name: '40% all beer',
        //     type: 'Happy Hour',
        //     date: '4/30/18-8/30/18',
        //     time: '3pm-5pm',
        //     recurring: 'Monday',
        //     status: 'Active',
        //     dropdown: false,
        // },
        // {
        //     name: '$6 all appetizers',
        //     type: 'Happy Hour',
        //     date: '8/12/18-9/12/18',
        //     time: '1pm-4pm',
        //     recurring: 'Sunday, Monday',
        //     status: 'Scheduled',
        //     dropdown: false,
        // },

        this.businessId = parseInt(this.props.match.params.businessId);
    }

    getMyLists = () => {
        fetch(BASE_URL + 'listing/all', {
            method: 'POST',
            body: JSON.stringify({
                status: "all",
                businessId: this.businessId
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.code === 400 || responseJson.code === 500) {
                    alert(responseJson.message);
                    return;
                }

                this.setState({ list: responseJson.Result });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getMyLists();
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

    deleteListing = (id) => {
        fetch(BASE_URL + 'listing/delete', {
            method: 'POST',
            body: JSON.stringify({
                listingId: id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                if (responseJson.code === 400 || responseJson.code === 500) {
                    alert(responseJson.message);
                    return;
                }

                let clonedList = Object.assign({}, this.state.list);
                let remainingItems = [];
                for (var i = 0; i < this.state.list.length; i++) {
                    if (clonedList[i].listingId != id) {
                        remainingItems.push(clonedList[i]);
                    }
                }

                this.setState({ list: remainingItems });
            })
            .catch((error) => {
                console.log(error);
            });
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
                            <Link to={`/MyListing/${this.businessId}/all`} >All</Link>
                        </li>
                        <li className='MAheaderTab2 MLhaederTab' >
                            <Link to={`/MyListing/${this.businessId}/active`}  >Active</Link>
                        </li>
                        <li className='MAheaderTab2' >
                            <Link to={`/MyListing/${this.businessId}/scheduled`}  >Scheduled</Link>
                        </li>
                        <li className='MAheaderTab2' >
                            <Link to={`/MyListing/${this.businessId}/ended`} >Ended</Link>
                        </li>
                    </ul>

                    <div>
                        <Route path='/MyListing/:businessId/all' exact render={(props) => <MyList {...props} handleDropDown={this.handleDropDown.bind(this)} list={this.state.list} status="all" deleteListing={(id) => this.deleteListing(id)} />} />
                        <Route path='/MyListing/:businessId/active' render={(props) => <MyList {...props} handleDropDown={this.handleDropDown.bind(this)} list={this.state.list} status="active" deleteListing={(id) => this.deleteListing(id)} />} />
                        <Route path='/MyListing/:businessId/scheduled' render={(props) => <MyList {...props} handleDropDown={this.handleDropDown.bind(this)} list={this.state.list} status="scheduled" deleteListing={(id) => this.deleteListing(id)} />} />
                        <Route path='/MyListing/:businessId/ended' render={(props) => <MyList {...props} handleDropDown={this.handleDropDown.bind(this)} list={this.state.list} status="ended" deleteListing={(id) => this.deleteListing(id)} />}  />
                    </div>
                    <div className='btnContainer' >
                        <Link className="btn orangeBtn" to={`/CreateList/${this.businessId}`} >Create new listing</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default myListingHomePage;
