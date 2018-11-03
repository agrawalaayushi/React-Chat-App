import React, { Component } from 'react';
import { connect } from 'react-redux';
import FriendList from './friend-list';
import ChatHistory from './chat-history';

class ChatApp extends Component {
  constructor(props) {
    super(props);
  
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  //-----------------------------------
  // Views
  //-----------------------------------

  //-----------------------------------
  // Lifecycles
  //-----------------------------------

  render() {
    // const { simpleActionResponse } = this.props;
    return (
      <div className="chat-app-container">
        This is Chat App
        <FriendList />
        <ChatHistory />
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

export default connect(null)(ChatApp);
