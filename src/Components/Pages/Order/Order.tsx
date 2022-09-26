import { useParams, Link } from 'react-router-dom';
import { Header } from '../../ElementPage/Header';
import styles from './Order.module.scss';
import { useState } from 'react';
import { postOrderForm } from '../../Axios/postOrderForm';
import { useForm } from 'react-hook-form';
import React from 'react';
import { PageNotFound } from '../PageNotFound';
import { FC } from 'react';
import { Button } from '../../ElementPage/Button';

export let dataOrderForTest = {};

const Order: FC<IMotoArrayProps> = (props) => {
  const { id } = useParams();
  const moto = props.moto.find((moto) => moto.id === id);

  const [messageTextArea, setMessageTextArea] = useState({
    message: `Я хочу приобрести мотоцикл ${moto ? moto.name : ''}`,
  });

  const [sendFormStatus, setSendFormStatus] = useState(false);

  const dataForm = {
    formOrderTitle: 'Обратная связь',
    buttonOrderTitle: 'Отправить заявку',
    formSendTitle: 'Ваша заявка отпралена',
    buttonSendTitle: 'Вернуться назад',
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onChange',
  });

  const submitHandler = (data: any) => {
    setSendFormStatus(true);
    postOrderForm(JSON.stringify(data));
    dataOrderForTest = data;
  };

  const handleChange = (event: any) => {
    if (event) {
      setMessageTextArea({
        ...messageTextArea,
        [event.target.id]: event.target.value,
      });
    }
  };

  if (!moto) {
    console.error('Order moto = undefined');
    return (
      <div>
        <PageNotFound />
      </div>
    );
  }
  const renderSendForm = () => {
    return (
      <>
        <Link to={`/${moto.category}/${id}`}>
          <button type="submit">{dataForm.buttonSendTitle}</button>
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
          {dataForm.buttonOrderTitle}
        </button>
      </>
    );
  };

  return (
    <div className={styles.order}>
      <Header background={moto.background} />
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={moto.photolink} alt={moto.name} />
        </div>
        <form
          className={styles.form}
          onSubmit={handleSubmit(submitHandler)}
          data-testid="form"
        >
          <div className={styles.userInfo}>
            <Link to={`/${moto.category}/${id}`}>
              <div className={styles.back}>
                <h3>Закрыть</h3>
              </div>
            </Link>

            <h2>
              {sendFormStatus
                ? dataForm.formSendTitle
                : dataForm.formOrderTitle}
            </h2>
            {sendFormStatus ? renderSendForm() : renderOrderForm()}
          </div>
        </form>
      </div>
    </div>
  );
};

export { Order };
