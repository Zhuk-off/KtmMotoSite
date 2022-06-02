import { MotoCard } from './MotoCard';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { motoState } from '../../TestHelper/testHelper';
import store from '../../../store/store';
import '../../../index.scss';

export default {
  title: 'Page/MotoCard',
  component: MotoCard,
};

const Template = () => (
  <Provider store={store}>
    <MemoryRouter initialEntries={['/naked/ktm-890-duke-2022']}>
      <Routes>
        <Route path={`naked/:id`} element={<MotoCard moto={motoState} />} />
      </Routes>
    </MemoryRouter>
  </Provider>
);

export const Default = Template.bind({});
