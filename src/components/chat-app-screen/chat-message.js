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
      <div className="chat-messages">
        {messageList}
      </div>
    );
  }
}

export default connect(null)(ChatMessages);
