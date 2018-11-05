import React from 'react';

class Message extends React.Component {

  render() {
    // If message sent by the current user, show those messages right side. 
    const fromMe = (this.props.currentUserId === this.props.username )? 'from-me' : '';
    return (
      <div className={`message-wrp ${fromMe}`}>
        <div className={`message ${fromMe}`}>
          <div>
            <div className='username'>
                { this.props.username }
              </div>
              <div className='message-content'>
                { this.props.message }
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

Message.defaultProps = {
  message: '',
  username: '',
};

export default Message;