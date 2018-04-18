import moment from 'moment';

export function formatTime(time) {
  return time ? moment(time).format('HH:mm') : null;
}
