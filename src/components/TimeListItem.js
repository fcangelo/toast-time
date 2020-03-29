import React from 'react';
import TimeRange from './TimeRange';

function TimeListItem(props) {
  let optionalRange = '';

  if (props.min && props.max) {
    optionalRange = (
      <TimeRange
        min={props.min}
        max={props.max}
      />
    );
  }

  return (
    <li className="time-list-item">
      <span className="time-list-item__title" onClick={props.onClick}>
        {props.title}
        {optionalRange}
      </span>
      {props.children}
    </li>
  );
}

export default TimeListItem;
