import React, { Component } from 'react';
import { formatTime } from './utils';
import clockImage from './clock.svg';

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
      <time className="timer">
        <img src={clockImage} height="35" alt="" />
        {this.state.time}
      </time>
    );
  }
}
