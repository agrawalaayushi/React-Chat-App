import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './message';

class ChatMessages extends Component {
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

  componentDidUpdate() {
    // There is a new message in the state, scroll to bottom of list
    const objDiv = document.getElementById('messageList');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  render() {
    const { messages } = this.props;
    const messageList = messages.map((message, i) => {
      return (
        <Message
          key={i}
          userName={message.userName}
          message={message.message}
          fromMe={message.fromMe} />
      );
    });
    return (
      <div className="chat-messages" id="messageList">
        {messageList}
      </div>
    );
  }
}

export default connect(null)(ChatMessages);
