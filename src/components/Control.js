import React from 'react';
import { MdDelete } from 'react-icons/md';
import { MdPlayArrow } from 'react-icons/md';
import { MdPause } from 'react-icons/md';

function Control(props) {
  const playPauseBtn  = props.counting ? <MdPause /> : <MdPlayArrow />;
  const playPauseText = props.counting ? 'Pause' : 'Start';

  return (
    <div className="control">
      <button className="control__item standard" onClick={props.toggleCount}>
        <span className="control__icon">{playPauseBtn}</span>
        <span className="control__text">{playPauseText}</span>
      </button>

      <button className="control__item standard" onClick={props.clearCount}>
        <span className="control__icon">
          <MdDelete />
        </span>
        <span className="control__text">Clear</span>
      </button>
    </div>
  );
}

export default Control;
