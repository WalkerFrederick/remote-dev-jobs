import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('SUBMITTED')
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" name='search' onChange={this.onChange.bind(this)} value={this.state.search}></input>
          <input type="submit" name="submit" onSubmit={this.onSubmit.bind(this)}></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;