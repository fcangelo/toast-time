import React from 'react';

function TimeSelect() {
  return (
    <div className="time-select">
      <label for="time-select__label">Choose a time:</label>
      <select name="time" id="time" class="time-select__menu">
        <option value="" selected disabled>
          Pick from list
        </option>
        <option value="table">Table Topics</option>
        <option value="speech">Speech</option>
      </select>
    </div>
  );
}

export default TimeSelect;
