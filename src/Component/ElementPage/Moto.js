import React, { Component } from 'react';
import './Moto.css';

export default (props) => {
  let motoClasses = ['Moto'];
  // if (props.buy) {
  //   // console.log('IF MOTO    ', props.name, props.buy);
  //   motoClasses.push('buy');
  //   motoClasses = motoClasses.join(' ');
  //   // console.log(motoClasses);
  // }

  return (
    <div className={motoClasses}>
      <h2>{props.name}</h2>
      <img className="Moto__imgMoto" src={props.img} />
      {/* <button className="Moto__button" onClick={props.buttonClickHandler}>
        {props.buy ? 'Перейти к оформлению' : 'Купить'}
      </button> */}
    </div>
  );
};
