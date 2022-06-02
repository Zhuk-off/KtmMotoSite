import { motoState } from '../../TestHelper/testHelper';
import '../../../index.scss';
import { Order } from './Order';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store/store';

export default {
  title: 'Page/Order',
  component: Order,
};

const Template = () => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/naked/ktm-890-duke-2022/order']}>
      <Routes>
        <Route path={`naked/:id/order`} element={<Order moto={motoState} />} />
      </Routes>
    </MemoryRouter>
  </Provider>
);

export const Default = Template.bind({});
