import React from 'react';

function Selected(props) {
  return (
    <div className="selected">
      <div className="selected__section">
        <h5 className="selected__category">Category: {props.category}</h5>
        <h1 className="selected__time">
          Time: {props.time} ({Math.round(props.min / 60)} - {Math.round(props.max / 60)} mins)
        </h1>
      </div>
    </div>
  );
}

export default Selected;
