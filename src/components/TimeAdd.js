import React from 'react';

function TimeAdd() {
  return (
    <div className="time-add">
      <div className="time-add__title">Add a time:</div>
      <label htmlFor="min" className="time-add__label">
        Min
      </label>
      <input
        type="text"
        name="min"
        id="min"
        placeholder="Min"
        className="time-add__input"
      />
      <label htmlFor="max" className="time-add__label">
        Max
      </label>
      <input
        type="text"
        name="max"
        id="max"
        placeholder="Max"
        className="time-add__input"
      />
      <button className="time-add__button">Add</button>
    </div>
  );
}

export default TimeAdd;
