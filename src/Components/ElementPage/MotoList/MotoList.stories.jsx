import { MotoList } from './MotoList';
import { MemoryRouter } from 'react-router-dom';
import { motoState } from '../../TestHelper/testHelper';
import '../../../index.scss';

export default {
  title: 'Elements/MotoList',
  component: MotoList,
};

const Template = () => (
  <MemoryRouter>
    <MotoList moto={motoState} />
  </MemoryRouter>
);

export const Default = Template.bind({});
