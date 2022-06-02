import { Header } from './Header';
import '../../../index.scss';

export default {
  title: 'Elements/Header',
  component: Header,
  argTypes: {
    length: {
      type: 'number',
      description: 'Количество мотоциклов выведеных на экран',
      defaultValue: 1,
      options: [1, 2, 3, 4, 5],
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (arg) => <Header {...arg} />;

export const Default = Template.bind({});
Default.args = {
  category: 'Эндуро мотоциклы',
  description: 'Эндуро',
  length: 3,
  background:
    'http://ktm.by/images/made/images/bg/2556/177270_KTM-350-EXC-F-MY-2018_2f552fd4e6f76672742481ebb95c4027.jpeg',
};
