import React from 'react';
import { FiMenu } from "react-icons/fi";

function Menu(props) {
  const state = props.open ? ' open' : '';

  return (
    <menu className={`menu${state}`}>
      <button className="menu__button" onClick={props.onClick}>
        <FiMenu />
      </button>
      {/* <div className="menu__text">
        <span>Switch Times</span>
      </div> */}
    </menu>
  );
}

export default Menu;
