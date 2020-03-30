import React from 'react';
import TimeRange from './TimeRange';
import { MdDelete } from 'react-icons/md';

function TimeListItem(props) {
  const del = (
    <span className="time-list-item__delete" onClick={props.onRemove}>
      <MdDelete />
    </span>
  );
  const optionalRemove = props.remove ? del : "";
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
      {optionalRemove}
      {props.children}
    </li>
  );
}

export default TimeListItem;
