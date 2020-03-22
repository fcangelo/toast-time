import React from 'react';
import TimeSelect from "./TimeSelect";
import TimeAdd from "./TimeAdd";

function TimeMenu() {
  return (
    <div className="time-menu">
      <TimeSelect></TimeSelect>
      <div class="time-menu__add">Add a time</div>
      <TimeAdd></TimeAdd>
    </div>
  );
}

export default TimeMenu;
