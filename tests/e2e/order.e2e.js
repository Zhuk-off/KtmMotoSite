// const { screen } = require('@testing-library/react');
const OrderPage = require('../pages/order.page');
// import '@testing-library/jest-dom';

describe('OrderPage send data', () => {
  const userName = 'Александр';
  const phone = '375295116445';
  const email = 'zhukoff.alexander@gmail.com';
  const message = 'Этот заказ является тестовым';

  it('order page set data', async () => {
    await OrderPage.open();

    await OrderPage.orderForm(userName, phone, email, message);
    // expect(screen.getByText(/Ваша заявка отпралена/)).toBeInTheDocument();
  });
});
