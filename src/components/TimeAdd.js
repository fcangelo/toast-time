import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';

function getErrorState(errorState) {
  return errorState ? ' error' : '';
}

class TimeAdd extends React.Component {
  constructor(props) {
    super(props);

    this.default = {
      name: '',
      min: '',
      max: '',
      nameError: false,
      minError: false,
      maxError: false
    };
    this.state = this.default;
  }

  addTime(name, min, max) {
    let matchingName = false;

    for (let i = 0; i < this.props.myTimes.length; i++) {
      const time = this.props.myTimes[i].label;

      if (name === time) {
        matchingName = true;
        break;
      }
    }

    const minNotNum = isNaN(min);
    const maxNotNum = isNaN(max);
    const minMoreMax = parseFloat(min) > parseFloat(max);

    if (
      name === "" ||
      min === "" ||
      max === "" ||
      minNotNum ||
      maxNotNum ||
      minMoreMax ||
      matchingName
    ) {
      this.setState({
        nameError: name === "" || matchingName,
        minError: min === "" || minNotNum || minMoreMax,
        maxError: max === "" || maxNotNum || minMoreMax
      });
    } else {
      this.props.addTime(name, min, max);
      this.setState(this.default);
    }
  }

  handleInputChange(event) {
    const key = event.target.name;

    this.setState({
      [key]: event.target.value
    });
  }

  render() {
    const name = this.state.name;
    const min = this.state.min;
    const max = this.state.max;

    return (
      <div className="time-add">
        <div className="time-add__title">Add a time:</div>
        <div className="time-add__form-block">
          <div className="time-add__form-entry">
            <label htmlFor="name" className="time-add__label">
              Name for the time
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className={`time-add__input${getErrorState(this.state.nameError)}`}
              value={name}
              onChange={event => this.handleInputChange(event)}
            />
          </div>
          <div className="time-add__form-entry">
            <label htmlFor="min" className="time-add__label">
              The minimum it should take
            </label>
            <input
              type="text"
              name="min"
              id="min"
              placeholder="Min"
              className={`time-add__input${getErrorState(this.state.minError)}`}
              value={min}
              onChange={event => this.handleInputChange(event)}
            />
          </div>
          <div className="time-add__form-entry">
            <label htmlFor="max" className="time-add__label">
              The maximum it should take
            </label>
            <input
              type="text"
              name="max"
              id="max"
              placeholder="Max"
              className={`time-add__input${getErrorState(this.state.maxError)}`}
              value={max}
              onChange={event => this.handleInputChange(event)}
            />
          </div>
          <button
            className="time-add__button"
            onClick={() => this.addTime(name, min, max)}
          >
            <IoMdAddCircleOutline />
          </button>
        </div>
      </div>
    );
  }
}

export default TimeAdd;
