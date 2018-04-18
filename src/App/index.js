import React, { Component } from 'react';
import './styles.css';
import Timer from './Timer';
import Schedule from './Schedule';

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

    return (
      <main>
        <header>
          <img src={data.event.logoUrl} alt="" />
          <h1>
            {data.event.name}
          </h1>
          <Timer />
        </header>
        <Schedule sessions={data.sessions} />
        <section>
          <h2>Partners</h2>
          {data.sponsors.map(sponsor =>
            <img
              key={sponsor.id}
              src={sponsor.logoUrl}
              alt=""
              height={this.props.config.sponsorLogoHeight}
            />,
          )}
        </section>
      </main>
    );
  }
}
