import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };

    // Bind 'this' to event handlers. 
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  //-----------------------------------
  // Methods
  //-----------------------------------

  handleInputChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const params = {
      isUserNameSubmitted: true,
      username: this.state.username
    }
    this.props.submitUserNameCallback(params);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="login-container">
        <div className="username-wrapper">
          <div>
            <input
              placeholder="Enter a username..."
              type="text"
              onChange={this.handleInputChange}
              className="username"
              required />
          </div>
          <div className="btn-wrapper"> 
            <input type="submit" value="Start" className="submit-btn"/>
          </div>
        </div>
      </form>
    );
  }
}


export default connect(null)(Login);
