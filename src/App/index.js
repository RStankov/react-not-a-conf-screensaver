import React, { Component } from 'react';
import './styles.css';
import Timer from './Timer';
import { formatTime } from './utils';

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
        <section>
          <h2>Schedule</h2>
          <ul>
            {Object.values(data.sessions).map(track =>
              track.map(session =>
                <li key={session.id}>
                  {formatTime(session.startTime)}
                  -
                  {formatTime(session.endTime)}:
                  {session.title}
                </li>,
              ),
            )}
          </ul>
        </section>
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
