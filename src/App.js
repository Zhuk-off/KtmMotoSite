import { Component } from 'react';
import './App.css';
import Moto from './Component/Moto';
import ListBuy from './Component/ListBuy';
import MotoBar from './Component/MotoBar/MotoBar';

class App extends Component {
  state = {
    moto: [
      {
        buy: false,
        id: 'KTM 125 DUKE 2022',
        name: 'KTM 125 DUKE 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-125-duke-2018/black/2802/315743_125-Duke-ALL-OVER-THE-WORLD-2021_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Naked',
      },
      {
        buy: false,
        id: 'KTM 390 DUKE 2022',
        name: 'KTM 390 DUKE 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-390-duke-2020-1/white/2920/315806_390-Duke-INDIA-2020-ALL-OVER-THE-WORLD-2021_210611_102144_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Naked',
      },
      {
        buy: false,
        id: 'KTM 890 DUKE 2022',
        name: 'KTM 890 DUKE 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-790-duke-2018-1/orange/2715/372812_890-Duke-ORANGE-MY21-90-Right_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Naked',
      },
      {
        buy: false,
        id: 'KTM 890 DUKE R 2022',
        name: 'KTM 890 DUKE R 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-890-duke-r-2020/orange/2443/318846_890R-Duke-2020_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Naked',
      },
      {
        buy: false,
        id: 'KTM 1290 SUPER DUKE R 2022',
        name: 'KTM 1290 SUPER DUKE R 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-1290-super-duke-r-2018/orange/3058/415773_MY22-KTM-1290-SUPER-DUKE-R-_90_-right_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Naked',
      },
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
    category: 'Naked',
    goToBasket: false,
  };

  buttonClickHandler = (id) => {
    let bikeArrayClick = this.state.moto.filter((bike) => bike.id == id);
    let bikeClick = bikeArrayClick[0];
    let bikeIndex = this.state.moto.indexOf(bikeClick);
    const moto = [...this.state.moto];
    let bike = moto[bikeIndex];
    // console.log(bike.buy);
    if (bike.buy) {
      console.log('оформить');
      this.setState({ goToBasket: true });
    } else {
      console.log('не оформить');
      bike.buy = !bike.buy;
      // console.log(bike.buy);
      // console.log(bikeIndex, bike, moto[bikeIndex]);
      moto[bikeIndex] = bike;
      this.setState({ moto });
      // console.log(bikeIndex, bike, moto[bikeIndex]);
    }
  };

  submitHandler = () => {
    const motoOld = [...this.state.moto];
    // console.log(motoOld);
    const moto = motoOld.map((bike) => {
      bike.buy = false;
      return bike;
    });
    // console.log(moto);

    this.setState({ moto: moto, goToBasket: false });
    // console.log('ok');
  };

  render() {
    console.log('render');
    let moto = [...this.state.moto];
    // console.log(moto);
    if (this.state.goToBasket) {
      moto = moto.filter((bike) => bike.buy === true);
      // console.log(moto);
      // console.log('motoBuy', moto.length);
    }
    return (
      <div className="App">
        <div className="pageHeading">
          <div className="pageHeading__text">
            <h1>KTM {this.state.category} Bikes</h1>
            <h2>Городские мотоциклы-стритфайтеры</h2>
            <h3>{moto.length} моделей</h3>
          </div>
        </div>

        <MotoBar />
        <div className="motoList">
          {this.state.goToBasket ? (
            <div className="listBuy">
              <ListBuy moto={moto} submitHandler={() => this.submitHandler()} />
            </div>
          ) : (
            moto.map((moto) => {
              return (
                <Moto
                  key={moto.id}
                  name={moto.name}
                  img={moto.photolink}
                  buy={moto.buy}
                  buttonClickHandler={() => this.buttonClickHandler(moto.id)}
                />
              );
            })
          )}
        </div>
      </div>
    );
  }
}

export default App;
