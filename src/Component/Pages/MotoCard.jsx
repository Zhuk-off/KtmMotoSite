import { useParams, Link } from 'react-router-dom';
import { Button } from '../ElementPage/Button';
import { Header } from '../ElementPage/Header';
import './MotoCard.css';

const MotoCard = (props) => {
  const { id } = useParams();
  console.log(useParams());
  const moto = props.moto.find((moto) => moto.id === id);
  return (
    <div>
      <Header background={moto.background} />
      <div className="motoCard">
        <div className="motoCard__header">
          <div className="motoCard__headerContent">
            <div className="motoCard__name">
              <h1>{moto.name}</h1>
            </div>
            <div className="motoCard__pricearea">
              <div className="motoCard__price">
                <h2>{moto.price}</h2>
              </div>
              <Link
                key={id}
                to={`/${moto.category}/${moto.id}/order`}
                moto={moto}
              >
                <Button title={'Заказать'} />
              </Link>
            </div>
          </div>
        </div>
        <div className="motoCard__content">
          <div className="motoCard__pic">
            <img src={moto.photolink} alt={moto.name} />
          </div>
          <div className="motoCard__description">
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
};

export { MotoCard };
