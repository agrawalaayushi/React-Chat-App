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
  sendMessage(message) {
    debugger
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
    console.log(roomId)
    debugger
    const chatkit = new ChatManager({
      // instanceLocator,
      instanceLocator: 'v1:us1:152e35ba-cb48-47b3-97c6-70f534ddd337',

      userId: this.props.currentUserId,
      tokenProvider: new TokenProvider({
        url:         'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/152e35ba-cb48-47b3-97c6-70f534ddd337/token'

      })
    })

    chatkit
      .connect()
      .then(currentUser => {
        this.setState({ currentUser: currentUser })
        console.log('application connected to Chatkit')
          return currentUser.subscribeToRoom({
              roomId: 19372771, 
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
