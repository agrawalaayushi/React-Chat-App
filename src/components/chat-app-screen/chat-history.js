import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatHistory extends Component {
  constructor(props) {
    super(props);
  
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

  render() {
    // const { simpleActionResponse } = this.props;
    return (
      <div className="chat-message-container">
        This is Chat History
       
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

export default connect(null)(ChatHistory);
