import { motoState, state } from '../../TestHelper/testHelper';
import '../../../index.scss';
import { MemoryRouter } from 'react-router-dom';
import { MainPage } from './MainPages';

export default {
  title: 'Page/MainPage',
  component: MainPage,
};

const Template = () => (
  <MemoryRouter>
    <MainPage
      moto={motoState}
      category={state.moto.page[0].categoryTitle}
      description={state.moto.page[0].description}
      background={state.moto.page[0].background}
    />
  </MemoryRouter>
);

export const Default = Template.bind({});
