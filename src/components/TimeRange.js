import React from 'react';

function roundOne(num) {
  return Math.round(num * 10) / 10;
}

function TimeRange(props) {
  const intMin = parseInt(props.min, 10);
  const intMax = parseInt(props.max, 10);
  const isMinutes = intMin >= 60;
  let minTime = intMin;
  let maxTime = intMax;
  let timeString = 'secs';

  if (isMinutes) {
    minTime = roundOne(intMin / 60);
    maxTime = roundOne(intMax / 60);
    timeString = 'mins';
  }

  return (
    <span className="time-range">
      {props.title} ({minTime} - {maxTime} {timeString})
    </span>
  );
}

export default TimeRange;
