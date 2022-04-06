import { Component } from 'react';
import './App.css';
import Moto from './Component/Moto';
import ListBuy from './Component/ListBuy';
import MotoBar from './Component/MotoBar/MotoBar';
import { Routes, Route } from 'react-router-dom';
import { Header } from './Component/Header';
import { Mx } from './Component/Pages/Mx';
import { MotoList } from './Component/MotoList';

class App extends Component {
  state = {
    moto: [
      {
        buy: false,
        id: 'KTM SX-E 5 2022',
        name: 'KTM SX-E 5 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-sx-e-5-17-14-2018/orange/2959/PHO_BIKE_90_RE_SX-E5-MY20_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'MX',
      },
      {
        buy: false,
        id: 'KTM 50 SX 2022',
        name: 'KTM 50 SX 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-50-sx-2021/white/2921/PHO_BIKE_90_RE_50-SX-MY21_SALL_AEPI_V1_210621_152436_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'MX',
      },
      {
        buy: false,
        id: 'KTM 65 SX 2022',
        name: 'KTM 65 SX 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-65-sx-2021/orange/2480/PHO_BIKE_90_RE_65-SX-MY21_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'MX',
      },
      {
        buy: false,
        id: 'KTM 85 SX 19/16 2022',
        name: 'KTM 85 SX 19/16 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-85-sx-2021/orange/2492/PHO_BIKE_90_RE_85-SX-MY21_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'MX',
      },
      {
        buy: false,
        id: 'KTM 125 SX 2022',
        name: 'KTM 125 SX 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-125-sx-2019/orange/2935/PHO_BIKE_90_RE_125-sx-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'MX',
      },
      {
        buy: false,
        id: 'KTM 150 SX 2022',
        name: 'KTM 150 SX 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-150-sx-2019/orange/2939/PHO_BIKE_90_RE_150-sx-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'MX',
      },
      {
        buy: false,
        id: 'KTM 250 SX 2022',
        name: 'KTM 250 SX 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-250-sx-2019/orange/2942/PHO_BIKE_90_RE_250-sx-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'MX',
      },
      {
        buy: false,
        id: 'KTM 250 SX-F 2022',
        name: 'KTM 250 SX-F 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-250-sx-f-2019/orange/2945/PHO_BIKE_90_RE_250-sxf-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'MX',
      },
      {
        buy: false,
        id: 'KTM 350 SX-F 2022',
        name: 'KTM 350 SX-F 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-350-sx-f-2019/orange/2949/PHO_BIKE_90_RE_450-sxf-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'MX',
      },
      {
        buy: false,
        id: 'KTM 450 SX-F 2022',
        name: 'KTM 450 SX-F 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-450-sx-f-2021/orange/2953/PHO_BIKE_90_RE_450-sxf-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'MX',
      },
      {
        buy: false,
        id: 'KTM 150 EXC-TPI 2022',
        name: 'KTM 150 EXC-TPI 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-150-exc-tpi-2021/orange/2964/PHO_BIKE_90_RE_150-exc-tpi-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 250 EXC TPI 2022',
        name: 'KTM 250 EXC TPI 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-250-exc-tpi-2019/orange/2967/PHO_BIKE_90_RE_250-exc-tpi-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 250 EXC TPI Six Days 2022',
        name: 'KTM 250 EXC TPI Six Days 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-250-exc-tpi-six-days-2019/orange/2970/PHO_BIKE_90_RE_250-exc-tpi-sd-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 300 EXC TPI 2022',
        name: 'KTM 300 EXC TPI 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-300-exc-tpi-2019/orange/2974/PHO_BIKE_90_RE_300-exc-tpi-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 300 EXC TPI Six Days 2022',
        name: 'KTM 300 EXC TPI Six Days 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-300-exc-tpi-six-days-2018/orange/2978/PHO_BIKE_90_RE_300-exc-tpi-sd-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 300 EXC TPI ERZBERGRODEO 2022',
        name: 'KTM 300 EXC TPI ERZBERGRODEO 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-300-exc-tpi-six-days-2019/orange/2981/PHO_BIKE_90_RE_300-exc-tpi-22-erzberg-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 250 EXC-F 2022',
        name: 'KTM 250 EXC-F 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-250-exc-tpi-six-days-2018/blue/2983/PHO_BIKE_90_RE_250-excf-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 250 EXC-F Six Days 2022',
        name: 'KTM 250 EXC-F Six Days 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-250-exc-f-six-days-2019/orange/2986/PHO_BIKE_90_RE_250-excf-sd-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 350 EXC-F 2022',
        name: 'KTM 350 EXC-F 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-350-exc-f-2019/orange/2989/PHO_BIKE_90_RE_350-excf-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 350 EXC-F Six Days 2022',
        name: 'KTM 350 EXC-F Six Days 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-350-exc-f-six-days-2019/orange/2994/PHO_BIKE_90_RE_350-excf-sd-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 450 EXC-F 2022',
        name: 'KTM 450 EXC-F 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-450-exc-f-2019/orange/2998/PHO_BIKE_90_RE_450-excf-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 450 EXC-F Six Days 2022',
        name: 'KTM 450 EXC-F Six Days 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-450-exc-f-six-days-2019/orange/3002/PHO_BIKE_90_RE_450-excf-sd-22-90re_SALL_AEPI_V1_30313d26236d139f4f81ffc0ef58aaf2.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 500 EXC-F 2022',
        name: 'KTM 500 EXC-F 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-500-exc-f-2019/orange/3006/PHO_BIKE_90_RE_500-excf-22-90re_SALL_AEPI_V1_4446a2507dc240d370cee69e4c62a333.png',
        counter: 1,
        category: 'Enduro',
      },
      {
        buy: false,
        id: 'KTM 500 EXC-F Six Days 2022',
        name: 'KTM 500 EXC-F Six Days 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-500-exc-f-six-days-2019/orange/3009/PHO_BIKE_90_RE_500-excf-sd-22-90re_SALL_AEPI_V1_4446a2507dc240d370cee69e4c62a333.png',
        counter: 1,
        category: 'Enduro',
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
      {
        buy: false,
        id: 'KTM 125 Duke 2022',
        name: 'KTM 125 Duke 2022',
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
        id: 'KTM 890 Duke 2022',
        name: 'KTM 890 Duke 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-790-duke-2018-1/orange/2715/372812_890-Duke-ORANGE-MY21-90-Right_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Naked',
      },
      {
        buy: false,
        id: 'KTM 890 Duke R 2022',
        name: 'KTM 890 Duke R 2022',
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
        id: 'KTM 690 Enduro R 2022',
        name: 'KTM 690 Enduro R 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-690-enduro-r-2021/orange/2666/350478_690-ENDURO-R-2021_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Travel',
      },
      {
        buy: false,
        id: 'KTM 390 Adventure 2022',
        name: 'KTM 390 Adventure 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-200-duke-2018/orange/3035/417272_KTM-Adventure-390-MY22-BLUE-90-Right_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Travel',
      },
      {
        buy: false,
        id: 'KTM 890 Adventure 2022',
        name: 'KTM 890 Adventure 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-890-adventure-2021/orange/2618/349190_890-Adventure-ORANGE-MY21-90-RightMY21-KTM-890-ADVENTURE-Model-Range-Studio_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Travel',
      },
      {
        buy: false,
        id: 'KTM 890 Adventure R 2022',
        name: 'KTM 890 Adventure R 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-890-adventure-r/orange/2652/349178_890-R-Adventure-MY21-90-RightMY21-KTM-890-ADVENTURE-Model-Range-Studio_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Travel',
      },
      {
        buy: false,
        id: 'KTM 1290 Super Adventure S 2022',
        name: 'KTM 1290 Super Adventure S 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-1290-super-adventure-s-2018/black/2691/370744_MY21-KTM-1290-SUPER-ADVENTURE-S-90-Right_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Travel',
      },
      {
        buy: false,
        id: 'KTM 1290 Super Adventure R 2022',
        name: 'KTM 1290 Super Adventure R 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-1290-super-adventure-r-2018/blue/2745/370540_MY21-KTM-1290-SUPER-ADVENTURE-R-90-Right_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Travel',
      },
      {
        buy: false,
        id: 'KTM 1290 SUPER DUKE GT 2022',
        name: 'KTM 1290 SUPER DUKE GT 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-1290-super-duke-gt-2018/gray/3080/416761_MY22-KTM-1290-SUPER-DUKE-GT-_90_-right_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Sport Tourer',
      },
      {
        buy: false,
        id: 'KTM 690 SMC R 2022',
        name: 'KTM 690 SMC R 2022',
        photolink:
          'http://ktm.by/images/made/images/moto/ktm-690-smc-r-2019/gray/3101/350480_MY-21-KTM-690-SMC-R_30313d26236d139f4f81ffc0ef58aaf2.jpg',
        counter: 1,
        category: 'Supermoto',
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

  motoCategoryFilter = (category) => {
    let moto = [...this.state.moto];
    moto = moto.filter((bike) => bike.category === category);
    console.log(moto, category);
    return moto;
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
        <Routes>
          <Route
            path="/mx"
            element={
              <Mx
                category={'КТМ МХ'}
                description={'Кроссовые мотоциклы'}
                moto={this.motoCategoryFilter('MX')}
                background={
                  'http://ktm.by/images/made/images/bg/2877/342521_KTM-450-SX-F-2021_2f552fd4e6f76672742481ebb95c4027.jpeg'
                }
              />
            }
          />
          <Route
            path="/enduro"
            element={
              <Mx
                category={'Эндуро мотоциклы'}
                description={''}
                moto={this.motoCategoryFilter('Enduro')}
                background={
                  'http://ktm.by/images/made/images/bg/2556/177270_KTM-350-EXC-F-MY-2018_2f552fd4e6f76672742481ebb95c4027.jpeg'
                }
              />
            }
          />
          <Route
            path="/freeride"
            element={
              <Mx
                category={'КТМ Freeride'}
                description={''}
                moto={this.motoCategoryFilter('Freeride')}
                background={
                  'http://ktm.by/images/made/images/bg/204/ktm-freeride-bg_ad6eb9c0c6ed2f5a9a6c47eb21446e71.jpeg'
                }
              />
            }
          />
          <Route
            path="/naked"
            element={
              <Mx
                category={'KTM Naked Bikes'}
                description={'Городские мотоциклы-стритфайтеры'}
                moto={this.motoCategoryFilter('Naked')}
                background={
                  'http://ktm.by/images/made/images/bg/2473/1290-SUPER-DUKE-R-2020-cover_2f552fd4e6f76672742481ebb95c4027.jpeg'
                }
              />
            }
          />
          <Route
            path="/sport-tourer"
            element={
              <Mx
                category={'KTM Sport Tourer'}
                description={''}
                moto={this.motoCategoryFilter('Sport Tourer')}
                background={
                  'http://ktm.by/images/made/images/bg/201/ktm-sporttourer-bg_2726790696f4b9be347c2f7d527d3512.jpeg'
                }
              />
            }
          />
          <Route
            path="/supermoto"
            element={
              <Mx
                category={'Supermoto'}
                description={''}
                moto={this.motoCategoryFilter('Supermoto')}
                background={
                  'http://ktm.by/images/made/images/bg/3124/351791_KTM-690-SMC-R-2021_2f552fd4e6f76672742481ebb95c4027.jpeg'
                }
              />
            }
          />
          <Route
            path="/travel"
            element={
              <Mx
                category={'KTM Travel'}
                description={''}
                moto={this.motoCategoryFilter('Travel')}
                background={
                  'http://ktm.by/images/made/images/bg/2908/371538_MY21-KTM-1290-SUPER-ADVENTURE-R_-Action_2f552fd4e6f76672742481ebb95c4027.jpeg'
                }
              />
            }
          />
          <Route
            path="/"
            element={
              <Mx
                category={'KTM Naked Bikes'}
                description={'Городские мотоциклы-стритфайтеры'}
                moto={this.motoCategoryFilter('Naked')}
                background={
                  'http://ktm.by/images/made/images/bg/2473/1290-SUPER-DUKE-R-2020-cover_2f552fd4e6f76672742481ebb95c4027.jpeg'
                }
              />
            }
          />
        </Routes>
        {/* <MotoBar />
        <MotoList moto={moto} /> */}

        {/* <div className="motoList">
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
        </div> */}
      </div>
    );
  }
}

export default App;
