import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { CHAT_MESSAGES } from '../../constants/dummy-array';
import { ChatManager, TokenProvider } from '@pusher/chatkit';

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
    this.state.currentUser.sendMessage({
      text: message,
      roomId: this.state.currentRoom.id
    }, ()=> {
      console.log("message send successfully")
    })
  }

 

  //-----------------------------------
  // Lifecycles
  //-----------------------------------
  componentDidMount() {
    console.log(this.props.currentUserId)
    const chatkit = new ChatManager({
      instanceLocator: 'v1:us1:152e35ba-cb48-47b3-97c6-70f534ddd337',
      userId: this.props.currentUserId,
      tokenProvider: new TokenProvider({
        url:
        'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/152e35ba-cb48-47b3-97c6-70f534ddd337/token'
      })
    })

    chatkit
      .connect()
      .then(currentUser => {
        this.setState({ currentUser: currentUser })
        console.log('Bleep bloop 🤖 You are connected to Chatkit')
          return currentUser.subscribeToRoom({
              roomId: 19372751, 
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
    const { messages, currentUser } = this.state;
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
