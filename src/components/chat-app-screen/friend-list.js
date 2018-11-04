import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../common/search-bar/search-bar';
import { EmptyView } from '../common/empty-view/empty-view';
import { ContactName } from '../common/contact-name/contact-name';


function searchingFor(searchName) {
  return function(x) {
    return x.first.toLowerCase().includes(searchName.toLowerCase()) || !searchName;
  }
}

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList : [
        {
          id: 0, 
          first: "Mark",
          userName: "Mark Jordan"
        },
        {
          id: 1, 
          first: "Linda",
          userName: "Linda"
        },
        {
          id: 2, 
          first: "Monica",
          userName: "Monica"
        },
      ],
      searchName: ''
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  handleSearchInput(searchQuery) {
    this.setState ({
      searchName: searchQuery
    })
  }

  //-----------------------------------
  // Views
  //-----------------------------------

  getContactName(friend) {
    return (
      <ContactName friend={friend}/>
    )
  }

  getEmptyView() {
    return(
      <EmptyView field="No contacts found"/>
    )
  }

  //-----------------------------------
  // Lifecycles
  //-----------------------------------

  render() {
    const { friendsList, searchName } = this.state;
    var filteredContacts  =  friendsList.filter(searchingFor(searchName));

    return (
      <div className="friend-list-container">
        <div className="left-col-header">
          
        </div>
        <SearchBar handleSearchQueryCallback={(searchDetails) => this.handleSearchInput(searchDetails)} />
        
        { filteredContacts.length ? filteredContacts.map((friend, index)=> this.getContactName(friend)):
          (this.getEmptyView()) }

      </div>
    );
  }
}

export default connect(null)(FriendList);
