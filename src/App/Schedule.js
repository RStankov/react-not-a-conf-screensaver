import React, { Component } from 'react';
import { formatTime, filterSessions } from './utils';

export default class Schedule extends Component {
  render() {
    const currentTime = new Date(this.props.config.seedDate);

    return (
      <section className="schedule">
        <h2>Schedule</h2>
        <ul>
          {Object.values(this.props.sessions).map(track =>
            filterSessions(currentTime, track).map(session =>
              <li key={session.id}>
                {formatTime(session.startTime)}
                -
                {formatTime(session.endTime)}:
                {session.title}
                {session.isOver && <strong>[over]</strong>}
                {session.isNext && <strong>[next]</strong>}
                {session.isStarted && <strong>[started]</strong>}
              </li>,
            ),
          )}
        </ul>
      </section>
    );
  }
}
