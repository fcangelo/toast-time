import React from 'react';
import Select from 'react-select';
import Times from '../data/times';

function processInput(data) {
  let formattedTimes = []

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
      <label className="time-select__label">
        Choose a time:
      </label>
      <Select options={processInput(Times)} className="time-select__menu"></Select>
    </div>
  );
}

export default TimeSelect;
