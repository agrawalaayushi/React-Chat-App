import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);
      this.state = {
        query: ''
      };
      this.handleInputChange = this.handleInputChange.bind(this)
    }

  //-----------------------------------
  // Methods
  //-----------------------------------

  handleInputChange(evt) {
    this.setState({
      query: evt.target.value
    }, () => {
      this.props.handleSearchQueryCallback(this.state.query);
    })
  }

  render() {
    return (
      <div className='search-bar'>
      <input
        placeholder="Search contact.."
        onChange={this.handleInputChange}
      />
    </div>
    );
  }
}


export default connect(null)(SearchBar);
