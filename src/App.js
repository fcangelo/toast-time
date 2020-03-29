import React from 'react';
import Menu from "./components/Menu";
import Selected from './components/Selected';
import Counter from './components/Counter';
import Control from './components/Control';
import Times from './data/times';
import TimeSelect from './components/TimeSelect';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.times = Times;
    this.initial = {
      seconds: 0,
      counting: false,
      menuOpen: false
    };
    this.default = {
      sectionID: 0,
      timeID: 0
    };
    this.state = {
      ...this.initial,
      ...this.default
    };
  }

  clearCount() {
    this.setState(this.initial);
    this.pauseCount();
  }

  getMax() {
    return this.times.sections[this.state.sectionID].times[this.state.timeID]
      .max;
  }

  getMin() {
    return this.times.sections[this.state.sectionID].times[this.state.timeID]
      .min;
  }

  getSection() {
    return this.times.sections[this.state.sectionID].title;
  }

  getTime() {
    return this.times.sections[this.state.sectionID].times[this.state.timeID]
      .label;
  }

  onTimeClick(sectionID, timeID) {
    this.setState({
      sectionID: sectionID,
      timeID: timeID,
      menuOpen: false
    });
  }

  pauseCount() {
    clearInterval(this.timerID);
  }

  startCount() {
    this.timerID = setInterval(() => this.tick(), 100);
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  toggleCounting() {
    this.setState(state => ({
      counting: !state.counting
    }));
  }

  toggleMenu() {
    this.setState(state => ({
      menuOpen: !state.menuOpen
    }));
  }

  toggleStartStop() {
    if (this.state.counting) {
      this.pauseCount();
    } else {
      this.startCount();
    }

    this.toggleCounting();
  }

  render() {
    const min = this.getMin();
    const max = this.getMax();
    const color = (() => {
      const midpoint = Math.round((min + max) / 2);

      if (this.state.seconds >= max + 30) {
        return ' red-alt';
      } else if (this.state.seconds >= max) {
        return ' red';
      } else if (this.state.seconds >= midpoint) {
        return ' yellow';
      } else if (this.state.seconds >= min) {
        return ' green';
      }

      return '';
    })();

    return (
      <div className={`App${color}`}>
        <div className="display">
          <Menu open={this.state.menuOpen} onClick={() => this.toggleMenu()} />
          <Selected
            section={this.getSection()}
            time={this.getTime()}
            min={min}
            max={max}
          />
          <Counter seconds={this.state.seconds} />
          <Control
            counting={this.state.counting}
            toggleCount={() => this.toggleStartStop()}
            clearCount={() => this.clearCount()}
          />
          <TimeSelect
            open={this.state.menuOpen}
            times={this.times}
            onClick={(sectionID, timeID) => this.onTimeClick(sectionID, timeID)}
          />
        </div>
      </div>
    );
  }
}

export default App;
