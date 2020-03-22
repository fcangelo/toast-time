import React from 'react';

function TimeAdd() {
  return (
    <div className="time-add">
      <div class="time-add__title">Add a time:</div>
      <label for="min" class="time-add__label">
        Min
      </label>
      <input
        type="text"
        name="min"
        id="min"
        placeholder="Min"
        class="time-add__input"
      />
      <label for="max" class="time-add__label">
        Max
      </label>
      <input
        type="text"
        name="max"
        id="max"
        placeholder="Max"
        class="time-add__input"
      />
      <button class="time-add__button">Add</button>
    </div>
  );
}

export default TimeAdd;
