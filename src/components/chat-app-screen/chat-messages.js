import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../common/loader-view/loader-view';
import Message from '../common/message/message';

class ChatMessages extends Component {


  //-----------------------------------
  // Views
  //-----------------------------------
  getLoaderView() {
    return(
      <Loader />
    )
  }

  getMessageView(message, index) {
    const { currentUserId } = this.props;
    return (
      <Message
        key={index.toString()}
        username={message.senderId}
        message={message.text}
        currentUserId={currentUserId}
      />
    );
  }

  //-----------------------------------
  // Lifecycle
  //-----------------------------------
  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const div = document.getElementById('messageList');
    div.scrollTop = div.scrollHeight;
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="chat-messages" id="messageList">
        {messages.map((message, index) => this.getMessageView(message, index))}
      </div>
    );
  }
}

export default connect(null)(ChatMessages);
