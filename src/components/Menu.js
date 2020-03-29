import React from 'react';
import { FiMenu } from "react-icons/fi";

function Menu() {
  return (
    <div className="menu">
      <button className="menu__button">
        <FiMenu />
      </button>
      <div className="menu__text">
        <span>Switch Times</span>
      </div>
    </div>
  );
}

export default Menu;
