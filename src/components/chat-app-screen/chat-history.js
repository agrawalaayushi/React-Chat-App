import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CHAT_MESSAGES } from '../../constants/dummy-array';

import MessageInput from './message-input';
import ChatMessages from './chat-messages';

class ChatHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: CHAT_MESSAGES
    }
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  sendMessage(message) {
  }

  //-----------------------------------
  // Views
  //-----------------------------------

  //-----------------------------------
  // Lifecycles
  //-----------------------------------

  render() {
    const { messages } = this.state;
    return (
      <div className="chat-message-container">
        <ChatMessages messages={messages}/>
        <MessageInput
          placeholder="Write a message.." 
          handleSendMessageCallback={(message) => this.sendMessage(message)}
        />
      </div>
    );
  }
}


export default connect(null)(ChatHistory);
