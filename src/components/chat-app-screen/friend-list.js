import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../common/search-bar/search-bar';
import { EmptyView } from '../common/empty-view/empty-view';
import { ContactName } from '../common/contact-name/contact-name';
import { CHAT_FRIENDS } from '../../constants/dummy-array';


function searchingFor(searchName) {
  return function(x) {
    return x.first.toLowerCase().includes(searchName.toLowerCase()) || !searchName;
  }
}

class FriendList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friendsList : CHAT_FRIENDS,
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
      <ContactName friend={friend} key={friend.id}/>
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
        <SearchBar handleSearchQueryCallback={(searchDetails) => this.handleSearchInput(searchDetails)} />
        
        { filteredContacts.length ? filteredContacts.map((friend, index)=> this.getContactName(friend)):
          (this.getEmptyView()) }

      </div>
    );
  }
}

export default connect(null)(FriendList);
