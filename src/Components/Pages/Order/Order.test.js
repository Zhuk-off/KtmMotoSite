import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { motoState } from '../../TestHelper/testHelper';
import * as reactRedux from 'react-redux';
import { dataOrderForTest, Order, testObject } from './Order';
import { renderWithRouterReduxOrder } from '../../TestHelper/renderWithRouterRedux';
import userEvent from '@testing-library/user-event';
import { emailTestValidate } from '../../TestHelper/orderTestHelper';
import axios from 'axios';
// import { postOrderForm } from '../../Axios/postOrderForm';

jest.mock('axios');

describe('Order component', () => {
  const handlerFix = jest.fn((data) => {
    data;
  });
  it('MotoCard render', () => {
    const motoItem = motoState[0];
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );

    const userName = screen.getByTestId('userName');
    const phone = screen.getByTestId('phone');
    const email = screen.getByTestId('email');
    const message = screen.getByTestId('message');
    const send = screen.getByTestId('send');

    expect(userName).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(send).toBeInTheDocument();

    expect(screen.getByText(/Обратная связь/)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', motoItem.photolink);
  });

  it('Input User Name working', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const input = screen.getByTestId('userName');
    await userEvent.type(input, '1');
    expect(input).toHaveValue('1');
  });

  it('Input User Name validation 2 symbols', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const input = screen.getByTestId('userName');
    await userEvent.type(input, 'A');
    expect(screen.getByText(/Минимум 2 символа/)).toBeInTheDocument();
    // screen.debug();
  });

  it('Input phone working', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const input = screen.getByTestId('phone');
    await userEvent.type(input, '375291234567');
    expect(input).toHaveValue('375291234567');
  });

  it('Input phone validation min 7 symbols working', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const input = screen.getByTestId('phone');
    await userEvent.type(input, 'A');
    expect(screen.getByText(/Минимум 7 символа/)).toBeInTheDocument();
    // screen.debug();
  });

  it('Input phone validation RegExp working', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const input = screen.getByTestId('phone');
    await userEvent.type(input, '+375291234567A');
    expect(
      screen.getByText(/Введите корректный номер телефона/)
    ).toBeInTheDocument();
    // screen.debug();
  });

  it('Input email working', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const input = screen.getByTestId('email');
    await userEvent.type(input, 'user123@gmail.com');
    expect(input).toHaveValue('user123@gmail.com');
  });

  it('Input email validation RegExp working', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );

    const input = screen.getByTestId('email');
    const errorText = /Введите корректный email/;

    await emailTestValidate(input, 'A', errorText);
    await emailTestValidate(input, 'user', errorText);
    await emailTestValidate(input, 'user@gmail', errorText);

    input.value = '';
    await userEvent.type(input, '123123@gmail.com');
    expect(screen.queryByText(errorText)).toBeNull();
  });

  it('textarea working', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const message = 'Привезите мне этот мотоцикл в эту субботу вечером';

    const textarea = screen.getByTestId('message');
    textarea.value = '';
    await userEvent.type(textarea, message);
    expect(textarea).toHaveValue(message);
  });

  it('Button send form render', () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const btn = screen.getByTestId('send');
    expect(btn).toHaveAttribute('disabled', '');
  });

  it('Button send form enabled-disbled work', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const userName = screen.getByTestId('userName');
    const phone = screen.getByTestId('phone');
    const email = screen.getByTestId('email');
    const send = screen.getByTestId('send');

    await userEvent.type(userName, 'Александр');
    await userEvent.type(phone, '375291234567');
    await userEvent.type(email, 'users@gmail.com');

    expect(send).not.toHaveAttribute('disabled', '');

    await userEvent.type(phone, 'q');

    expect(send).toHaveAttribute('disabled', '');
  });

  it('Button send form enabled-disbled work', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const userName = screen.getByTestId('userName');
    const phone = screen.getByTestId('phone');
    const email = screen.getByTestId('email');
    const send = screen.getByTestId('send');
    const form = screen.getByTestId('form');

    await userEvent.type(userName, 'АлександрTest');
    await userEvent.type(phone, '375291234567');
    await userEvent.type(email, 'users@gmail.com');

    expect(send).not.toHaveAttribute('disabled', '');
  });

  it('Form send data correct', async () => {
    renderWithRouterReduxOrder(
      <Order moto={motoState} />,
      '/naked/ktm-890-duke-2022/order'
    );
    const sendData = {
      userName: 'АлександрTest',
      phone: '375291234567',
      email: 'users@gmail.com',
      message: 'Я хочу приобрести мотоцикл KTM 890 Duke 2022',
    };
    const userName = screen.getByTestId('userName');
    const phone = screen.getByTestId('phone');
    const email = screen.getByTestId('email');
    const send = screen.getByTestId('send');
    const form = screen.getByTestId('form');

    await userEvent.type(userName, 'АлександрTest');
    await userEvent.type(phone, '375291234567');
    await userEvent.type(email, 'users@gmail.com');

    axios.post.mockResolvedValue('');

    await userEvent.click(send);

    expect(dataOrderForTest).toEqual(sendData);
  });
});
