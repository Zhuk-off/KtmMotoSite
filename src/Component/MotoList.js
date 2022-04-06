import React from 'react';
import ListBuy from './ListBuy';
import Moto from './Moto';
import './MotoList.css';

const MotoList = (props) => {
  const moto = props.moto;
  console.log(moto);
  let goToBasket = false;

  return (
    <div className="motoList">
      {moto.map((moto) => {
        return (
          <Moto
            key={moto.id}
            name={moto.name}
            img={moto.photolink}
            buy={moto.buy}
            buttonClickHandler={() => this.buttonClickHandler(moto.id)}
          />
        );
      })}
    </div>
  );
};

export { MotoList };
