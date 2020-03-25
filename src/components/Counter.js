import React from 'react';

function addZero(time) {
  return time < 10 ? `0${time}` : time;
}

function Counter(props) {
  const minSec = `${addZero(props.minutes)}:${addZero(props.seconds)}`;
  const timeString = props.hours > 0 ? `${addZero(props.hours)}:${minSec}` : minSec;

  return <div className="counter">{timeString}</div>;
}

export default Counter;
