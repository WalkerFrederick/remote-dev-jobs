import React, { Component } from 'react';
import './Job.css';

class Job extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }

  }

  render() {
    return (
      <div className="Job">
        <h1>{this.props.title}</h1>
        <h2>{this.props.org}</h2>
        {this.props.description}
      </div>
    );
  }
}

export default Job;