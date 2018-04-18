import React, { Component } from 'react';
import './styles.css';
import Timer from './Timer';
import Schedule from './Schedule';
import Sponsors from './Sponsors';

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
          <img src={data.event.logoUrl} alt="" />
          <h1>
            {data.event.name}
          </h1>
          <Timer config={config} />
        </header>
        <Schedule config={config} sessions={data.sessions} />
        <Sponsors config={config} sponsors={data.sponsors} />
      </main>
    );
  }
}
