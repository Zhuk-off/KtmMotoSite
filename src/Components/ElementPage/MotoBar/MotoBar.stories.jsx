import { MotoBar } from './MotoBar';
import { MemoryRouter } from 'react-router-dom';
import '../../../index.scss';

export default {
  title: 'Elements/MotoBar',
  component: MotoBar,
};

const Template = () => (
  <MemoryRouter>
    <MotoBar />
  </MemoryRouter>
);

export const Default = Template.bind({});
