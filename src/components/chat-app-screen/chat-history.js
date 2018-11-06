import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChatManager, TokenProvider } from '@pusher/chatkit';
import { instanceLocator, testToken, roomId } from '../../config';
import { Loader } from '../common/loader-view/loader-view';

import MessageInput from './message-input';
import ChatMessages from './chat-messages';

class ChatHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      currentUser: null,
      currentRoom: {},
    }
    this.sendMessage = this.sendMessage.bind(this);
  }

  //-----------------------------------
  // Methods
  //-----------------------------------

  // For sending the messages
  sendMessage(message) {
    this.state.currentUser.sendMessage({
      text: message,
      roomId: this.state.currentRoom.id
    }, ()=> {
      console.log("message send successfully")
    })
  }

 
  //-----------------------------------
  // Views
  //-----------------------------------
  getLoaderView() {
    return (
      <Loader />
    )
  }

  //-----------------------------------
  // Lifecycles
  //-----------------------------------
  componentDidMount() {
    // conneect the user to the chat kit.
    const chatkit = new ChatManager({
      instanceLocator,
      userId: this.props.currentUserId,
      tokenProvider: new TokenProvider({
        url: testToken
      })
    })

    // For recieving the messages.
    chatkit
      .connect()
      .then(currentUser => {
        this.setState({ currentUser: currentUser })
        console.log('application connected to Chatkit')
        // We add a onNewMessage hook to the subscribeToRoom object. This hook will be triggered once a new message is sent. 
          return currentUser.subscribeToRoom({
              roomId: roomId, 
              messageLimit: 100,
              hooks: {
                onNewMessage: message => {
                  this.setState({
                  messages: [...this.state.messages, message]
                })
              }
            }
          })
        })
        .then(currentRoom => {
          this.setState({ currentRoom })
      })
      .catch(error => console.error('error', error))
  }


  render() {
    const { currentUserId } = this.props;
    const { messages } = this.state;  
    return (
      <div className="chat-message-container">
        <div className="chat-message-wrp">
          {messages.length  ? <ChatMessages messages={messages} currentUserId={currentUserId}/>: 
          this.getLoaderView()}
        </div>
        <MessageInput
          placeholder="Write a message.." 
          handleSendMessageCallback={(message) => this.sendMessage(message)}
        />
      </div>
    );
  }
}


export default connect(null)(ChatHistory);
