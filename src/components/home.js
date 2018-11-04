import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { simpleAction } from '../actions/action';
// import '../styles/app.scss';
import { Header } from './header/header';
import Login from './login/login';
import ChatApp from './chat-app-screen/chat-app';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = { username: ''   };
  }

  // simpleAction(event) {
  //   this.props.simpleAction();
  //  }
  //-----------------------------------
  // Methods
  //-----------------------------------
   submitLoginCredential(loginDetails) {
    this.setState({ 
      isUserNameSubmitted: loginDetails.isUserNameSubmitted, 
      username: loginDetails.username 
    });
   }

  //-----------------------------------
  // Methods
  //-----------------------------------
  //-----------------------------------
  // Methods
  //-----------------------------------

  render() {
    const { username, isUserNameSubmitted } = this.state;

    return (
      <div className="chat-app-home">
        <Header />
        {/* {!isUserNameSubmitted ?
          <Login
          submitUserNameCallback = {(loginDetails) => this.submitLoginCredential(loginDetails)}/>
          : */}
          <ChatApp />
        {/* } */}
      
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
