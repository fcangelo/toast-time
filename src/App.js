import React from 'react';
import TimeMenu from './components/TimeMenu';
import Counter from './components/Counter';
import Control from './components/Control';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      counting: false
    };
  }

  toggleCount() {
    this.setState(state => ({
      counting: !state.counting
    }));
  }

  clearCount() {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  }

  render() {
    return (
      <div className="App">
        <div className="display">
          <TimeMenu />
          <Counter
            hours={this.state.hours}
            minutes={this.state.minutes}
            seconds={this.state.seconds}
          />
          <Control
            toggleCount={() => this.toggleCount()}
            clearCount={() => this.clearCount()}
          />
        </div>
      </div>
    );
  }
}

export default App;
