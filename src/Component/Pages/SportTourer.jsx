import { Component } from 'react';

export class SportTourer extends Component {
  state = {
    moto: [
      {
        buy: false,
        id: 'KTM Freeride E-XC 2022',
        name: 'KTM Freeride E-XC 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-freeride-250-f-2018/orange/3019/350483_KTM-Freeride-E-XC-2020_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Freeride',
      },
    ],
    category: 'Sport Tourer',
    goToBasket: false,
  };
  render() {
    return (
      <div>
        <h1> Sport Tourer </h1>
        <p>tra-ra-ra</p>
      </div>
    );
  }
}
