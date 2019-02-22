import React, { Component } from 'react';
import Job from './Job/Job';
import './ScrollView.css';

class ScrollView extends Component {

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

  render() {
    return (
      <div className="ScrollView">
        {this.state.data.map(dataEl => {
            return <Job title={dataEl.title} org={dataEl.company}/>
        })}
      </div>
    );
  }
}

export default ScrollView;