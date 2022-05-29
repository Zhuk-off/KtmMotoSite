import { Header } from '../../ElementPage/Header';
import { MotoBar } from '../../ElementPage/MotoBar';
import { MotoList } from '../../ElementPage/MotoList/index';

const MainPage = (props) => {
  const moto = props.moto;
  console.log(moto);
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

export { MainPage };
