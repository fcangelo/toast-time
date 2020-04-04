import React from 'react';
import { FiMenu } from "react-icons/fi";

function Menu(props) {
  const state = props.open ? ' open' : '';

  return (
    <menu className={`menu${state}`}>
      <button className="menu__button" onClick={props.onClick}>
        <FiMenu />
      </button>
    </menu>
  );
}

export default Menu;
