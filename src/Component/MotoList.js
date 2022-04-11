import React from 'react';
import { Link } from 'react-router-dom';
import Moto from './Moto';
import './MotoList.css';

const MotoList = (props) => {
  const moto = props.moto;

  function motoClickHandler(id) {
    console.log(id);
  }

  return (
    <div className="motoList">
      {moto.map((moto) => {
        return (
          <Link key={moto.id} to={`/${moto.category}/${moto.id}`} moto={moto}>
            <Moto
              key={moto.id}
              name={moto.name}
              img={moto.photolink}
              buy={moto.buy}
              buttonClickHandler={() => this.buttonClickHandler(moto.id)}
              motoClickHandler={() => this.motoClickHandler(moto.id)}
            />
          </Link>
        );
      })}
    </div>
  );
};

export { MotoList };
