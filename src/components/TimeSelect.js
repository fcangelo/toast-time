import React from 'react';
import TimeAdd from './TimeAdd';
import TimeList from "./TimeList";
import TimeListItem from './TimeListItem';

function TimeSelect(props) {
  const state = props.open ? ' open' : '';
  const allTimes = props.times.sections.map((section, sectionID) => {
    const times = section.times.map((time, timeID) => {
      return (
        <TimeListItem
          key={timeID}
          onClick={() => props.onClick(sectionID, timeID)}
          title={time.label}
          min={time.min}
          max={time.max}
        />
      );
    });

    return (
      <TimeListItem key={sectionID} title={section.title}>
        <TimeList>{times}</TimeList>
      </TimeListItem>
    );
  });

  return (
    <div className={`time-select${state}`}>
      <TimeAdd />
      <TimeList>{allTimes}</TimeList>
    </div>
  );
}

export default TimeSelect;
