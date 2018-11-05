import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendList from './friend-list';
import ChatHistory from './chat-history';

class ChatApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
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
    const { username, currentUserId } = this.props;
    return (
      <div className="chat-app-container">
        <FriendList />
        <ChatHistory username = {username} currentUserId={currentUserId}/>
      </div>
    );
  }
}

export default connect(null)(ChatApp);
