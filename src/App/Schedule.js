import React, { Component } from 'react';
import classNames from 'classnames';
import { formatTime, filterSessions } from './utils';
import Timer from './Timer';
import rocketImage from './rocket.svg';

export default class Schedule extends Component {
  state = { sessions: this.getSessions() };

  getSessions() {
    const currentTime = new Date(this.props.config.seedDate);
    return filterSessions(currentTime, Object.values(this.props.sessions)[0]);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  tick = () => {
    this.setState({ sessions: this.getSessions() });
  };

  render() {
    return (
      <section className="schedule">
        <h2>Schedule</h2>
        <Timer config={this.props.config} />
        {this.state.sessions.map(session =>
          <div
            key={session.id}
            className={classNames('schedule-listing', {
              'is-next': session.isNext,
              'is-over': session.isOver,
              'is-live': session.isLive,
            })}>
            <span className="schedule-slot-time">
              {formatTime(session.startTime)}
              {session.endTime && ` - ${formatTime(session.endTime)}`}
            </span>
            <div className="schedule-slot-info">
              {session.speakers.map(
                speaker =>
                  speaker.avatarUrl &&
                  <img
                    alt=""
                    className="schedule-slot-speakers"
                    height="58"
                    key={speaker.id}
                    src={speaker.avatarUrl}
                    width="58"
                  />,
              )}
              <div className="schedule-slot-info-content">
                <h3 className="schedule-slot-title">
                  {session.title}
                </h3>
                {session.speakers.map(speaker =>
                  <h4 key={speaker.id} className="schedule-slot-speaker-name">
                    {speaker.name}
                  </h4>,
                )}
                {session.isLive &&
                  <div className="icon">
                    <img src={rocketImage} alt="" />
                  </div>}
              </div>
            </div>
          </div>,
        )}
      </section>
    );
  }
}
