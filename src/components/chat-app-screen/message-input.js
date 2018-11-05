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
  handleSubmit(e) {
     // Stop the form from refreshing the page on submit
    e.preventDefault();
    const { message } = this.state;

     // Clear the input field after send message
    this.setState({ message: '' });

    //  Send the value of chat input message to the parent class
    this.props.handleSendMessageCallback(message);
  }

  handleInputChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <form  className="message-input-wrp" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={message}
            placeholder="Type your message here and press Enter.."
            onChange={this.handleInputChange}
            className="message-input"
            required
          />
        </form>
      </div>
    );
  }
}


export default connect(null)(MessageInput);
