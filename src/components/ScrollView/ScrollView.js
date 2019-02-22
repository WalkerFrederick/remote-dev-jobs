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


    componentWillUpdate() {
        if(this.state.data !== this.props.jobs) {
            this.setState({
                data: this.props.jobs,
            })
        }
    }

    computeDaysSince() {

        return '2 days ago'
    }

  render() {
    return (
      <div className="ScrollView">
        {this.state.data.map(dataEl => {
            return <Job key={dataEl.id} title={dataEl.title} url={dataEl.url} org={dataEl.company} days={this.computeDaysSince(dataEl.created_at)}/>
        })}
      </div>
    );
  }
}

export default ScrollView;