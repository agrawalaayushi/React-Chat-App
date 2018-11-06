import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "axios";

import { Header } from './header/header';
import Login from './login/login';
import ChatApp from './chat-app-screen/chat-app';
import { Loader } from './common/loader-view/loader-view';

const URL = 'http://localhost:3001/users';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUserId: '',
      currentUsername: '',
      isLoader: false
    };
  }


  //-----------------------------------
  // Methods
  //-----------------------------------
   submitLoginCredential(username) {
     this.setState({
       isLoader: true
     })
    let url = URL;
    axios.post(
      url, username, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    .then(response => {
      const successResponse = response.data;
      // User id and user name are taken same 
      this.setState({
        currentUserId: username.username,
        currentUsername: username.username,
        isUsernameSubmitted: true,
        isLoader: false
      })
    })
    .catch(error => {
      this.setState({
        isLoader: false
      })
      const errorResponse = error;
    });
  }

  getLoaderView() {
    return <Loader/>
  }


  render() {
    const { isLoader, currentUsername, currentUserId, isUsernameSubmitted } = this.state;
    return (
      <div className="chat-app-home">
        <Header />
        {isLoader && this.getLoaderView()}
        {!isUsernameSubmitted ?
          <Login
          submitUserNameCallback = {(loginDetails) => this.submitLoginCredential(loginDetails)}/>
          :
          <ChatApp username={currentUsername} currentUserId={currentUserId} />
        }
       
      </div>
    );
  }
}


export default connect(null)(Home);
