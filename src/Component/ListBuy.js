import React from 'react';
import './ListBuy.css';
import MotoInList from './MotoInList';

export default (props) => {
  //   console.log(props);
  const moto = props.moto;

  return (
    <div className="ListBuy">
      <h2>Список к покупке</h2>
      {moto.map((moto) => {
        return (
          <MotoInList key={moto.id} name={moto.name} img={moto.photolink} />
        );
      })}
      <button className="buttonSubmit" onClick={props.submitHandler}>
        Отправить заказ
      </button>
    </div>
  );
};
