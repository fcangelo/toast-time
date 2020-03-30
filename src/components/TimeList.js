import React from 'react';

function TimeList(props) {
  return (
    <div className="time-list-container">
      <ul className="time-list">
        {props.children}
      </ul>
    </div>
  );
}

export default TimeList;
