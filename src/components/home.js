import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from "axios";
// import { simpleAction } from '../actions/action';
// import '../styles/app.scss';
import { Header } from './header/header';
import Login from './login/login';
import ChatApp from './chat-app-screen/chat-app';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      currentUserId: '',
      currentUsername: '',
    };
  }

  // simpleAction(event) {
  //   this.props.simpleAction();
  //  }
  //-----------------------------------
  // Methods
  //-----------------------------------

   submitLoginCredential(username) {
    let url = `http://localhost:3001/users`;
    axios.post(
      url, username ,{
        headers: {
          'Content-Type': 'application/json',
        },
      })
    .then(response => {
      const successResponse = response.data;
      this.setState({
          currentUserId: username.username,
          currentUsername: username.username,
          isUserNameSubmitted: true
        })
    })
    .catch(error => {
      const errorResponse = error;
      });
  }


  render() {
    const { currentUsername, currentUserId, isUserNameSubmitted } = this.state;
    return (
      <div className="chat-app-home">
        <Header />
        {!isUserNameSubmitted ?
          <Login
          submitUserNameCallback = {(loginDetails) => this.submitLoginCredential(loginDetails)}/>
          :
          <ChatApp username={currentUsername} currentUserId={currentUserId} />
        }
      
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state,
  // simpleActionResponse: state.reducer.get("simpleActionResponse")
})

 const mapDispatchToProps = dispatch => ({
  // simpleAction: () => dispatch(simpleAction())
 })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
