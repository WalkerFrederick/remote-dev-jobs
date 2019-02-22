import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1>Remote Dev Jobs</h1>
        <p>These are all the jobs labled as Remote via the github Jobs api</p>
        <SearchBar callback={this.props.callback}/>
      </div>
    );
  }
}

export default Header;