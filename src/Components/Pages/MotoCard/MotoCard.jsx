import { useParams, Link } from 'react-router-dom';
import { Button } from '../../ElementPage/Button';
import { Header } from '../../ElementPage/Header';
import styles from './MotoCard.module.scss';
import { PageNotFound } from '../PageNotFound';

const MotoCard = (props) => {
  // console.log('props-----', props);
  const { id } = useParams();
  const moto = props.moto.find((moto) => moto.id === id);
  // console.log('id-----', id);
  // console.log('moto find id-----', moto);
  if (moto !== undefined) {
    return (
      <div>
        <Header background={moto.background} />
        <div className={styles.motoCardBase}>
          <div className={styles.header}>
            <div className={styles.headerContent}>
              <div className={styles.name}>
                <h1>{moto.name}</h1>
              </div>
              <div className={styles.pricearea}>
                <div className={styles.price}>
                  <h2>{moto.price}</h2>
                </div>
                <Link key={id} to={`/${moto.category}/${moto.id}/order`}>
                  <Button title={'Заказать'} />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.pic}>
              <img src={moto.photolink} alt={moto.name} />
            </div>
            <div className={styles.description}>
              <h2>{moto.titleCard}</h2>
              <p>{moto.descriptionMoto}</p>
            </div>
          </div>
          <Link to={`/${moto.category}`}>
            <Button title={'Вернуться назад - Посмотреть другие модели KTM'} />
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <PageNotFound />;
      </>
    );
  }
};

export { MotoCard };
