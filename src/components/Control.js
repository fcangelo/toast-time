import React from 'react';

function Control(props) {
  return (
    <div className="control">
      <div
        className="control__item"
        onClick={props.toggleCount}
      >
        Play/Pause
      </div>
      <div
        className="control__item"
        onClick={props.clearCount}
      >
        Clear
      </div>
    </div>
  );
}

export default Control;
