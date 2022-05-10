import React from 'react';
import './MotoBar.css';
import { NavLink } from 'react-router-dom';

const MotoBar = () => {
  return (
    <div className="motoBar">
      <div className="tab">
        <NavLink to="/mx">MX</NavLink>
      </div>
      <div className="tab">
        <NavLink to="/enduro">Enduro</NavLink>
      </div>
      <div className="tab">
        <NavLink to="/freeride">Freeride</NavLink>
      </div>
      <div className="tab">
        <NavLink to="/naked">Naked</NavLink>
      </div>
      <div className="tab ">
        <NavLink to="/travel">Travel</NavLink>
      </div>
      <div className="tab ">
        <NavLink to="/sport-tourer">Sport Tourer</NavLink>
      </div>
      <div className="tab ">
        <NavLink to="/supermoto">Supermoto</NavLink>
      </div>
    </div>
  );
};

export { MotoBar };
