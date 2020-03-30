import React from 'react';
import Menu from "./components/Menu";
import Selected from './components/Selected';
import Counter from './components/Counter';
import Control from './components/Control';
import Times from './data/times';
import TimeSelect from './components/TimeSelect';

// This is just for testing and should be removed
import { MdPlayArrow } from "react-icons/md";
import { MdFastForward } from "react-icons/md";

function timeIntake(times) {
  const sections = times.sections.slice(0);

  sections.unshift({
    name: "custom",
    title: "My Custom Times",
    times: []
  });

  return {
    sections: sections
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.initial = {
      seconds: 0,
      counting: false,
      menuOpen: false
    };
    this.default = {
      sectionID: 1,
      timeID: 0,
      prevSectionID: 1,
      prevTimeID: 0,
      times: timeIntake(Times),
      testFF: false
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

  closeMenu() {
    this.setState({
      menuOpen: false
    })
  }

  getMax() {
    return this.state.times.sections[this.state.sectionID].times[this.state.timeID]
      .max;
  }

  getMin() {
    return this.state.times.sections[this.state.sectionID].times[this.state.timeID]
      .min;
  }

  getSection() {
    return this.state.times.sections[this.state.sectionID].title;
  }

  getTime() {
    return this.state.times.sections[this.state.sectionID].times[this.state.timeID]
      .label;
  }

  onTimeAdd(timeName, timeMin, timeMax) {
    const sections = this.state.times.sections;

    sections[0].times.push({
      label: timeName,
      min: Math.round(parseFloat(timeMin) * 60),
      max: Math.round(parseFloat(timeMax) * 60)
    });

    this.setState({
      times: {
        sections: sections
      }
    });
  }

  onTimeRemove(removeID) {
    const sections = this.state.times.sections;

    sections[0].times.splice(removeID, 1);

    this.setState(state => ({
      sectionID: state.prevSectionID,
      timeID: state.prevTimeID,
      times: {
        sections: sections
      }
    }));
  }

  onTimeClick(sectionID, timeID) {
    this.setState(state => ({
      sectionID: sectionID,
      timeID: timeID,
      prevSectionID: state.sectionID,
      prevTimeID: state.timeID,
      menuOpen: false
    }));
  }

  pauseCount() {
    clearInterval(this.timerID);
  }

  startCount() {
    const speed = this.state.testFF ? 100 : 1000;

    this.timerID = setInterval(() => this.tick(), speed);
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

  toggleSpeed() {
    this.setState(state => ({
      testFF: !state.testFF
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
    // Testing - Remove
    let showTestIcon = this.state.testFF ? <MdPlayArrow /> : <MdFastForward />;

    const min = this.getMin();
    const max = this.getMax();
    const minInt = parseInt(min, 10);
    const maxInt = parseInt(max, 10);
    const midpoint = Math.round((minInt + maxInt) / 2);
    const flashPoint = maxInt >= 60 ? 30 : Math.round((maxInt - minInt) / 2);
    const color = (() => {
      if (this.state.seconds >= maxInt + flashPoint) {
        return " red-alt";
      } else if (this.state.seconds >= maxInt) {
        return " red";
      } else if (this.state.seconds >= midpoint) {
        return " yellow";
      } else if (this.state.seconds >= minInt) {
        return " green";
      }

      return '';
    })();

    return (
      <div className={`App${color}`}>
        <div className="display">
          <Menu open={this.state.menuOpen} onClick={() => this.toggleMenu()} />
          <div className="content">
            <div className="container">
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
                times={this.state.times}
                onClick={(sectionID, timeID) =>
                  this.onTimeClick(sectionID, timeID)
                }
                addTime={(timeName, timeMin, timeMax) =>
                  this.onTimeAdd(timeName, timeMin, timeMax)
                }
                removeTime={removeID => this.onTimeRemove(removeID)}
                closeMenu={() => this.closeMenu()}
              />
            </div>
          </div>
        </div>
        <div className="testing" onClick={() => this.toggleSpeed()}>
          {showTestIcon}
        </div>
      </div>
    );
  }
}

export default App;
