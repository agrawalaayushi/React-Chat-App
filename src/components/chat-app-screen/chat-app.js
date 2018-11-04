import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ChatManager, TokenProvider } from '@pusher/chatkit';

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

  componentDidMount() {
    const chatkit = new ChatManager({
      instanceLocator: 'v1:us1:152e35ba-cb48-47b3-97c6-70f534ddd337',
      userId: 'aayushiagrawal',
      // userId: this.props.currentId,
      tokenProvider: new TokenProvider({
        url:
        'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/152e35ba-cb48-47b3-97c6-70f534ddd337/token'
      })
    })

    chatkit
      .connect()
      .then(currentUser => {
        this.setState({ currentUser })
        console.log('Bleep bloop 🤖 You are connected to Chatkit')
      })
      .catch(error => console.error('error', error))
  }

  render() {
    // const { simpleActionResponse } = this.props;
    return (
      <div className="chat-app-container">
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
