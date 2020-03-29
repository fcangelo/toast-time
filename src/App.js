import React from 'react';
import Menu from "./components/Menu";
import Selected from './components/Selected';
import Counter from './components/Counter';
import Control from './components/Control';
import Times from './data/times';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.times = Times;
    this.initial = {
      seconds: 0,
      counting: false
    };
    this.default = {
      time: this.times.sections[0].times[0].label,
      category: this.times.sections[0].title,
      min: this.times.sections[0].times[0].min,
      max: this.times.sections[0].times[0].max
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

  toggleStartStop() {
    if (this.state.counting) {
      this.pauseCount();
    } else {
      this.startCount();
    }

    this.toggleCounting();
  }

  render() {
    const color = (() => {
      const midpoint = Math.round((this.state.min + this.state.max) / 2);

      if (this.state.seconds >= this.state.max) {
        return ' red';
      } else if (this.state.seconds >= midpoint) {
        return ' yellow';
      } else if (this.state.seconds >= this.state.min) {
        return ' green';
      }

      return '';
    })();

    return (
      <div className={`App${color}`}>
        <div className="display">
          <Menu />
          <Selected
            category={this.state.category}
            time={this.state.time}
            min={this.state.min}
            max={this.state.max}
          />
          <Counter seconds={this.state.seconds} />
          <Control
            counting={this.state.counting}
            toggleCount={() => this.toggleStartStop()}
            clearCount={() => this.clearCount()}
          />
        </div>
      </div>
    );
  }
}

export default App;
