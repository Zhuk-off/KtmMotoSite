import { useParams, Link } from 'react-router-dom';
import { Header } from '../../ElementPage/Header';
import styles from './Order.module.scss';
import { useState } from 'react';
import { postOrderForm } from '../../Axios/postOrderForm';
import { useForm } from 'react-hook-form';

export let dataOrderForTest = {};

const Order = (props) => {
  const { id } = useParams();
  const moto = props.moto.find((moto) => moto.id === id);
  const [messageTextArea, setMessageTextArea] = useState({
    message: `Я хочу приобрести мотоцикл ${moto.name}`,
  });
  const [sendFormStatus, setSendFormStatus] = useState(false);
  const dataForm = {
    formOrderTitle: 'Обратная связь',
    buttonOrderTitile: 'Отправить заявку',
    formSendTitle: 'Ваша заявка отпралена',
    buttonSendTitile: 'Вернуться назад',
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const submitHandler = (data) => {
    // console.log('Отправленное имя: ' + JSON.stringify(data));
    setSendFormStatus(true);
    postOrderForm(JSON.stringify(data));
    dataOrderForTest = data;
  };

  const handleChange = (event) => {
    setMessageTextArea({
      ...messageTextArea,
      [event.target.id]: event.target.value,
    });
  };

  const renderSendForm = () => {
    // console.log('renderSendForm', sendFormStatus, dataForm.formSendTitle);

    return (
      <>
        <Link to={`/${moto.category}/${id}`}>
          <button type="submit">{dataForm.buttonSendTitile}</button>
        </Link>
      </>
    );
  };

  const renderOrderForm = () => {
    return (
      <>
        <div className={styles.Input}>
          <input
            {...register('userName', {
              required: 'Введите имя',
              minLength: { value: 2, message: 'Минимум 2 символа' },
            })}
            type="text"
            id="userName"
            placeholder="Ваши имя и фамилия"
            data-testid="userName"
          />
          <span>{errors?.userName && errors?.userName?.message}</span>
        </div>

        <div className={styles.Input}>
          <input
            {...register('phone', {
              required: 'Введите номер телефона',
              minLength: { value: 7, message: 'Минимум 7 символа' },
              pattern: {
                value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                message: 'Введите корректный номер телефона',
              },
            })}
            type="tel"
            id="phone"
            placeholder="Номер телефона*"
            name="phone"
            data-testid="phone"
          />
          <span>{errors?.phone && errors?.phone?.message}</span>
        </div>
        <div className={styles.Input}>
          <input
            {...register('email', {
              required: 'Введите email',
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Введите корректный email',
              },
            })}
            type="text"
            id="email"
            placeholder="Ваш email*"
            data-testid="email"
          />
          <span>{errors?.email && errors?.email?.message}</span>
        </div>
        <div className={styles.Input}>
          <textarea
            {...register('message')}
            id="message"
            data-testid="message"
            rows={2}
            cols={5}
            value={messageTextArea.message}
            onChange={(event) => handleChange(event)}
          ></textarea>
          <span></span>
        </div>

        <button type="submit" disabled={!isValid} id="send" data-testid="send">
          Отправить заявку
        </button>
      </>
    );
  };

  return (
    <div className={styles.order}>
      <Header background={moto.background} />
      <form
        className={styles.form}
        onSubmit={handleSubmit(submitHandler)}
        data-testid="form"
      >
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
