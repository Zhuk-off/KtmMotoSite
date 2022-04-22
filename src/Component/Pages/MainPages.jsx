import { Header } from '../ElementPage/Header';
import { MotoBar } from '../ElementPage/MotoBar/MotoBar';
import { MotoList } from '../ElementPage/MotoList';

const MainPage = (props) => {
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
};

export { MainPage };
