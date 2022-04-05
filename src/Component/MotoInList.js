import React from 'react';
import './MotoInList.css';

export default (props) => {
  return (
    <div className="MotoInList">
      <div className="MotoInList__img">
        <img src={props.img} className="MotoInList__img" />
      </div>
      <span className="MotoInList__name">
        <h3>{props.name}</h3>
      </span>
    </div>
  );
};
