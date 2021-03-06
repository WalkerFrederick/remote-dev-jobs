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
        <h3>Posted {this.props.days}</h3>
        <h1>{this.props.title}</h1>
        <h2>@ {this.props.org}</h2>
        <p>{this.props.description}</p>
        <a className="Link" target="_blank" href={this.props.url }>
          <div className="link">
            View Source
          </div>
        </a>
      </div>
    );
  }
}

export default Job;