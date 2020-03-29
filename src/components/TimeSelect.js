import React from 'react';
import TimeAdd from './TimeAdd';

function processInput(data) {
  let formattedTimes = [];

  for (let section = 0; section < data.sections.length; section++) {
    const selectedSection = data.sections[section];
    let sectionTimes = [];

    for (let j = 0; j < selectedSection.times.length; j++) {
      const time = selectedSection.times[j];

      sectionTimes.push({
        label: time.label,
        value: `${time.min},${time.max}`
      });
    }

    formattedTimes.push({
      label: selectedSection.title,
      options: sectionTimes
    });
  }

  return formattedTimes;
}

function TimeSelect() {
  return (
    <div className="time-select">
      <TimeAdd />
    </div>
  );
}

export default TimeSelect;
