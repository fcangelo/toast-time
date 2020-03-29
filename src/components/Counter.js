import React from 'react';

function addZero(time) {
  return time < 10 ? `0${time}` : time;
}

function timeFromSeconds(rawSeconds) {
  const rawMinutes = Math.floor(rawSeconds / 60);
  const seconds = rawSeconds % 60;
  const minutes = rawMinutes % 60;
  const hours = Math.floor(rawMinutes / 60);
  const minSec = `${addZero(minutes)}:${addZero(seconds)}`;

  return hours > 0 ? `${addZero(hours)}:${minSec}` : minSec;
}

function Counter(props) {
  return <div className="counter">{timeFromSeconds(props.seconds)}</div>;
}

export default Counter;
