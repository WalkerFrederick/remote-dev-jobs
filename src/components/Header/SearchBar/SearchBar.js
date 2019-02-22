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
    this.props.callback(this.state.search);
  }

  render() {
    return (
      <div className="SearchBar">
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" name='search' onChange={this.onChange.bind(this)} value={this.state.search}></input>
          <button className={'submit'} type="submit" name="submit" onSubmit={this.onSubmit.bind(this)}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;