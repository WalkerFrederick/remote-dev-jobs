import React, { Component } from 'react';
import Header from './components/Header/Header';
import ScrollView from './components/ScrollView/ScrollView';
import {provider, connect} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { fetchJobs } from './Actions/postActions';

import './App.css';

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {

  constructor(props) {
        
    super(props);

    this.state = {
      data: [],
    }

  }

  componentWillMount() {
    fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=&location=remote')
    .then(res => res.json())
    .then(data => this.setState({data: data,}))
  }

  getSearch(term) {
    this.setState({data: [],})
    fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description='+ term + '&location=remote')
    .then(res => res.json())
    .then(data => this.setState({data: data,}))
  }

  render() {
    return (
      <div className="App">
        <Header callback={this.getSearch.bind(this)}/>
        <ScrollView jobs={this.state.data} />
      </div>
    );
  }
}

export default App;
