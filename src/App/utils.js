import moment from 'moment';

export function formatTime(time) {
  return time
    ? moment(time)
        .utc(false)
        .format('HH:mm')
    : null;
}

function getStatus(currentTime, startTime, endTime) {
  const time = moment(currentTime).utc(false);

  if (time.isBefore(startTime, 'seconds')) {
    return 'idle';
  }

  if (!endTime) {
    return 'live';
  }

  return time.isAfter(endTime, 'seconds') ? 'over' : 'live';
}

export function filterSessions(currentTime, sessions) {
  let decorated = sessions.map((session, i) => {
    const status = getStatus(
      currentTime,
      session.startTime,
      session.endTime || (sessions[i + 1] && sessions[i + 1].startTime),
    );

    return {
      ...session,
      isNext: false,
      isOver: status === 'over',
      isLive: status === 'live',
    };
  });

  decorated = decorated.filter(
    (session, i) =>
      !session.isOver || (decorated[i + 1] && !decorated[i + 1].isOver),
  );

  decorated = decorated.map((session, i) => {
    const isNext =
      !session.isLive &&
      !session.isOver &&
      decorated[i - 1] &&
      (decorated[i - 1].isOver || decorated[i - 1].isLive);

    if (isNext) {
      return { ...session, isNext };
    }

    return session;
  });

  return decorated;
}
