import React, { Component } from 'react';
import Header from './components/Header/Header';
import ScrollView from './components/ScrollView/ScrollView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ScrollView/>
      </div>
    );
  }
}

export default App;
