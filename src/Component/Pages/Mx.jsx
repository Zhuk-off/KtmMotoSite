import { Component } from 'react';
import { Header } from '../Header';
import MotoBar from '../MotoBar/MotoBar';
import { MotoList } from '../MotoList';
import axios from 'axios';

const Mx = (props) => {
  {
    const moto = props.moto;
    return (
      <div>
        <Header
          category={props.category}
          description={props.description}
          length={moto.length}
          background={props.background}
        />
        <MotoBar />

        <MotoList moto={moto} category={props.category} />
      </div>
    );
  }
};

export { Mx };
