import React from 'react';
import TimeMenu from './components/TimeMenu';
import Counter from "./components/Counter";
import Control from "./components/Control";

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App">
        <div className="display">
          <TimeMenu></TimeMenu>
          <Counter></Counter>
          <Control></Control>
        </div>
      </div>
    );
  }
}

export default App;
