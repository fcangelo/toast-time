import React from 'react';
import TimeRange from './TimeRange';

function Selected(props) {
  return (
    <div className="selected">
      <div className="selected__section">
        <h5 className="selected__category">Category: {props.section}</h5>
        <h1 className="selected__time">
          Time: {props.time}
          <TimeRange
            min={props.min}
            max={props.max}
          />
        </h1>
      </div>
    </div>
  );
}

export default Selected;
