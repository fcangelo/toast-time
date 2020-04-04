import React from 'react';
import TimeAdd from './TimeAdd';
import TimeList from './TimeList';
import TimeListItem from './TimeListItem';
import { IoIosCloseCircleOutline } from "react-icons/io";
// import { IoMdAddCircleOutline } from "react-icons/io";

function TimeSelect(props) {
  const firstSection = props.times.sections[0];
  const myTimes = firstSection.times;
  const state = props.open ? ' open' : '';
  const allTimes = props.times.sections.map((section, sectionID) => {
    const isCustom = section.name === 'custom';
    const isEmpty = section.times.length === 0;
    const isCurSection = sectionID === props.curSectionID;
    const addTime = (
      <div className="time-select__add">
        <span>(Add a time below)</span>
        {/* <IoMdAddCircleOutline /> */}
      </div>
    );
    let times;

    if (isCustom && isEmpty) {
      times = (
        <TimeListItem
          title={addTime}
        ></TimeListItem>
      );
    } else {
      times = section.times.map((time, timeID) => {
        const isCurTime = isCurSection && timeID === props.curTimeID;

        return (
          <TimeListItem
            key={timeID}
            onClick={() => props.onClick(sectionID, timeID)}
            title={time.label}
            min={time.min}
            max={time.max}
            remove={isCustom}
            onRemove={() => props.removeTime(timeID)}
            isCurrent={isCurTime}
          />
        );
      });
    }

    return (
      <TimeListItem
        key={sectionID}
        title={section.title}
        isCurrent={isCurSection}
      >
        <TimeList>{times}</TimeList>
      </TimeListItem>
    );
  });

  return (
    <div className={`time-select${state}`}>
      <button className="time-select__close" onClick={props.closeMenu}>
        <IoIosCloseCircleOutline />
      </button>
      <div className="time-select__choose">Select a time:</div>
      <TimeList>{allTimes}</TimeList>
      <TimeAdd myTimes={myTimes} addTime={props.addTime} />
    </div>
  );
}

export default TimeSelect;
