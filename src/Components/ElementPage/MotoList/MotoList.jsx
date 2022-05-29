import { Link } from 'react-router-dom';
import { Moto } from '../Moto';
import styles from './MotoList.module.scss';

const MotoList = (props) => {
  const moto = props.moto;
  return (
    <div className={styles.list}>
      {moto.map((moto) => {
        return (
          <Link key={moto.id} to={`/${moto.category}/${moto.id}`}>
            <Moto name={moto.name} img={moto.photolink} />
          </Link>
        );
      })}
    </div>
  );
};

export { MotoList };
