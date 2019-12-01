import React, { Component } from 'react';
import './search.css';

export default class Search extends Component{
  constructor() {
    super();
    this.state = {
      searchText: ''
    };
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(e) {
    const {onSearchChange} = this.props;
    const searchText = e.target.value;
    this.setState({searchText});
    onSearchChange(searchText);
  }

  render() {
    const {searchText} = this.state;
    return (
      <div className="filter__item">
        <input
          type="search"
          className="filter__search"
          placeholder="search by title"
          onChange={this.onSearchChange}
          value={searchText}
        />
      </div>
    );
  }
}
