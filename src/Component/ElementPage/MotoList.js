import { Link } from 'react-router-dom';
import { Moto } from './Moto';
import './MotoList.css';

const MotoList = (props) => {
  const moto = props.moto;

  return (
    <div className="motoList">
      {moto.map((moto) => {
        return (
          <Link key={moto.id} to={`/${moto.category}/${moto.id}`} moto={moto}>
            <Moto name={moto.name} img={moto.photolink} />
          </Link>
        );
      })}
    </div>
  );
};

export { MotoList };
