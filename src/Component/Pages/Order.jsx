import { useParams, Link } from 'react-router-dom';
import { Input } from '../ElementPage/Input';
import { Header } from '../ElementPage/Header';
import './Order.css';

const Order = (props) => {
  const { id } = useParams();
  const moto = props.moto.find((moto) => moto.id === id);

  const submitHandler = (event) => {
    event.preventDafault();
    // debugger;
  };

  const submitButtonHandler = (event) => {};

  return (
    <div className="order">
      <Header background={moto.background} />
      <form className="order__form" onSubmit={submitHandler}>
        <div className="order__container">
          <div className="order__img">
            <img src={moto.photolink} alt={moto.name} />
          </div>
          <div className="order__userInfo">
            <Link to={`/${moto.category}/${id}`}>
              <div className="order__back">
                <p>x</p>
              </div>
            </Link>
            <h2>Обратная связь</h2>
            <Input type="text" id="userName" placeholder="Ваши имя и фамилия" />
            <Input
              type="tel"
              id="phone"
              placeholder="Номер телефона*"
              name="phone"
            />
            <Input type="email" id="email" placeholder="Ваш email*" />
            <textarea
              id="message"
              rows="2"
              cols="5"
              defaultValue={`Я хочу приобрести мотоцикл ${moto.name}`}
            ></textarea>

            <button type="submit" onClick={submitButtonHandler}>
              {/* <button type="submit"> */}
              Отправить заявку
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Order };
