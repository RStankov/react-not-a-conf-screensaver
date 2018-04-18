import React, { Component } from 'react';
import { formatTime } from './utils';

export default class Timer extends Component {
  state = { time: this.getTime() };

  getTime() {
    return formatTime(new Date(this.props.config.seedDate));
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({ time: this.getTime() });
  };

  render() {
    return (
      <time>
        {this.state.time}
      </time>
    );
  }
}
