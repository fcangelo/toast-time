import React from 'react';
import TimeMenu from './components/TimeMenu';
import Counter from "./components/Counter";
import Control from "./components/Control";
import './styles/main.scss';

function App() {
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

export default App;
