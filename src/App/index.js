import React, { Component } from 'react';
import Schedule from './Schedule';
import Sponsors from './Sponsors';
import './styles.css';
import leftImage from './left.png';
import rightImage from './right.png';

export default class App extends Component {
  state = { data: null };

  async componentDidMount() {
    const response = await fetch(this.props.config.fetchUrl);
    const data = await response.json();

    this.setState({
      data,
    });
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return null;
    }

    const { config } = this.props;

    return (
      <main>
        <header>
          <img src={data.event.logoUrl} alt="" className="logo" />
          <img src={leftImage} alt="" className="left" />
          <img src={rightImage} alt="" className="right" />
        </header>
        <Schedule config={config} sessions={data.sessions} />
        <Sponsors config={config} sponsors={data.sponsors} />
      </main>
    );
  }
}
