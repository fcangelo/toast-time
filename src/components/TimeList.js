import React from 'react';

function TimeList(props) {
  return (
    <ul className="time-list">
      {props.children}
    </ul>
  );
}

export default TimeList;
