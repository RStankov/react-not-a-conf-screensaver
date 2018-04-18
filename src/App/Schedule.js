import React, { Component } from 'react';
import { formatTime, filterSessions } from './utils';

export default class Schedule extends Component {
  state = { data: null };

  render() {
    return (
      <section>
        <h2>Schedule</h2>
        <ul>
          {Object.values(this.props.sessions).map(track =>
            filterSessions(track).map(session =>
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
