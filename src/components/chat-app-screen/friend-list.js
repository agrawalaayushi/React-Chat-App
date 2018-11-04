import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../common/search-bar/search-bar';


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

  //-----------------------------------
  // Lifecycles
  //-----------------------------------

  render() {
    const { friendsList, searchName } = this.state;
    return (
      <div className="friend-list-container">
        <div className="left-col-header">
        
        </div>
          <SearchBar handleSearchQueryCallback={(searchDetails) => this.handleSearchInput(searchDetails)} />

        {
          friendsList && friendsList.filter(searchingFor(searchName)).map((friend, index) =>{
            return (
              <div className="friend-name-wrapper" key={friend.id.toString()}>
                <div className="profile-image"></div>
                <div className="friend-name"><span>{friend.userName}</span></div>
              </div>
            )
          })
        }
      </div>
    );
  }
}


// const mapStateToProps = state => ({
//   ...state,
//   // simpleActionResponse: state.reducer.get("simpleActionResponse")
// })

//  const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
//  })

export default connect(null)(FriendList);
