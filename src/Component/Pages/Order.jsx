import { useParams, Link } from 'react-router-dom';
import { Header } from '../Header';
import './Order.css';

const Order = (props) => {
  const { id } = useParams();
  const moto = props.moto.find((moto) => moto.id === id);

  console.log(moto, id, moto.background);
  return (
    <div className="order">
      <Header background={moto.background} />
      <form action="#" className="order__form">
        <div className="order__container">
          <div className="order__img">
            <img src={moto.photolink} alt={moto.name} />
          </div>
          <div className="order__userInfo">
            <Link to={`/${moto.category}/${id}`}>
              <div className="order__back">
                <a href={`/${moto.category}/${id}`}>x</a>
              </div>
            </Link>

            <h2>Обратная связь</h2>

            <input type="text" id="userName" placeholder="Ваши имя и фамилия" />

            <input
              type="tel"
              id="phone"
              placeholder="Номер телефона*"
              name="phone"
            />

            <input type="email" id="email" placeholder="Ваш email*" />

            <textarea id="message" rows="2" cols="5">
              {`Я хочу приобрести мотоцикл ${moto.name}`}
            </textarea>

            <button type="submit">Отправить заявку</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Order };
