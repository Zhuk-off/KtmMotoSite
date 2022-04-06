import { Component } from 'react';
import { Header } from '../Header';
import MotoBar from '../MotoBar/MotoBar';
import { MotoList } from '../MotoList';

const Mx = (props) => {
  const moto = props.moto;
  console.log(moto.length);
  return (
    <div>
      <Header
        category={props.category}
        description={props.description}
        length={moto.length}
        background={props.background}
      />
      <MotoBar />

      <MotoList moto={moto} />
    </div>
  );
};

export { Mx };
