import React, { Component } from 'react';
import { connect } from 'react-redux';

class MessageInput extends Component {
  constructor(props) {
    super(props);
      this.state = {
        message: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
    }


  //-----------------------------------
  // Methods
  //-----------------------------------
  handleSubmit(evt) {
     // Stop the form from refreshing the page on submit
    evt.preventDefault();
    const { message } = this.state;

     // Clear the input field
    this.setState({ message: '' });

    //  Send the value of chat input message to the parent class
    this.props.handleSendMessageCallback(message);
  }

  handleInputChange(evt) {
    this.setState({
      message: evt.target.value
    })
  }

  //-----------------------------------
  // Views
  //-----------------------------------

  //-----------------------------------
  // Lifecycles
  //-----------------------------------

  render() {
    const { message } = this.state;
    return (
      <form  className="message-input" onSubmit={this.handleSubmit}>
       <input
        type="text"
        value={message}
        placeholder="Type your message here.."
        onChange={this.handleInputChange}
        required
      />
      </form>
    );
  }
}


export default connect(null)(MessageInput);
