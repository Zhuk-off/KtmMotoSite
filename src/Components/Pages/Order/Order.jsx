import { useParams, Link } from 'react-router-dom';
import { Input } from '../../ElementPage/Input';
import { Header } from '../../ElementPage/Header';
import styles from './Order.module.scss';
import { useState } from 'react';
import { postOrderForm } from '../../Axios/postOrderForm';

const Order = (props) => {
  const { id } = useParams();
  const moto = props.moto.find((moto) => moto.id === id);
  const [state, setState] = useState({
    userName: '',
    phone: '',
    email: '',
    message: `Я хочу приобрести мотоцикл ${moto.name}`,
  });
  const [sendFormStatus, setSendFormStatus] = useState(false);
  const [dataForm] = useState({
    formOrderTitle: 'Обратная связь',
    buttonOrderTitile: 'Отправить заявку',
    formSendTitle: 'Ваша заявка отпралена',
    buttonSendTitile: 'Вернуться назад',
  });

  const submitHandler = (event) => {
    console.log('Отправленное имя: ' + JSON.stringify(state));
    setSendFormStatus(true);
    postOrderForm(JSON.stringify(state));
    event.preventDefault();
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.id]: event.target.value });
  };

  const renderSendForm = () => {
    console.log('renderSendForm', sendFormStatus, dataForm.formSendTitle);

    return (
      <>
        <Link to={`/${moto.category}/${id}`}>
          <button type="submit">{dataForm.buttonSendTitile}</button>
        </Link>
      </>
    );
  };

  const renderOrderForm = () => {
    console.log('renderOrderForm', sendFormStatus, dataForm);
    return (
      <>
        <Input
          type="text"
          id="userName"
          placeholder="Ваши имя и фамилия"
          onChange={(event) => handleChange(event)}
        />
        <Input
          type="tel"
          id="phone"
          placeholder="Номер телефона*"
          name="phone"
          onChange={(event) => handleChange(event)}
        />
        <Input
          type="text"
          id="email"
          placeholder="Ваш email*"
          onChange={(event) => handleChange(event)}
        />
        <textarea
          id="message"
          rows="2"
          cols="5"
          value={state.message}
          onChange={(event) => handleChange(event)}
        ></textarea>

        <button type="submit">Отправить заявку</button>
      </>
    );
  };

  return (
    <div className={styles.order}>
      <Header background={moto.background} />
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.container}>
          <div>
            <img src={moto.photolink} alt={moto.name} />
          </div>
          <div className={styles.userInfo}>
            <Link to={`/${moto.category}/${id}`}>
              <div className={styles.back}>
                <p>x</p>
              </div>
            </Link>

            <h2>
              {sendFormStatus
                ? dataForm.formSendTitle
                : dataForm.formOrderTitle}
            </h2>
            {sendFormStatus ? renderSendForm() : renderOrderForm()}
          </div>
        </div>
      </form>
    </div>
  );
};

export { Order };
