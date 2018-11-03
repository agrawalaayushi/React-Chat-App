import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { simpleAction } from '../actions/action';
// import '../styles/app.scss';
// import { Header } from './header/header';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    // Bind 'this' to event handlers. 
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }


  //-----------------------------------
  // Methods
  //-----------------------------------


  usernameChangeHandler(event) {
    this.setState({ username: event.target.value });
  }

  usernameSubmitHandler(event) {
    event.preventDefault();
    const params = {
      isUserNameSubmitted: true,
      username: this.state.username
    }
    // this.setState({ username: this.state.username });
    this.props.submitUserNameCallback(params);
  }

  //-----------------------------------
  // Views
  //-----------------------------------

  //-----------------------------------
  // Lifecycles
  //-----------------------------------

  render() {
    // const { simpleActionResponse } = this.props;
    return (
      <form onSubmit={this.usernameSubmitHandler} className="username-container">
        <div>
          <input
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required />
        </div>
        <input type="submit" value="Submit" />
      </form>
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

export default connect(null)(Login);
