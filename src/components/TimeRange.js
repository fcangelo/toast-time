import React from 'react';

function TimeRange(props) {
  return (
      <span
        className="time-range"
      >
        {props.title} ({Math.round(props.min / 60)} -{' '}
        {Math.round(props.max / 60)} mins)
      </span>
  );
}

export default TimeRange;
