import '../../../index.scss';
import { PageNotFound } from './PageNotFound';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store/store';

export default {
  title: 'Page/PageNotFound',
  component: PageNotFound,
};

const Template = () => (
  <Provider store={store}>
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>
  </Provider>
);

export const Default = Template.bind({});
