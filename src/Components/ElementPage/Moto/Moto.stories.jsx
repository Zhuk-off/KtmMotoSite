import { Moto } from './Moto';
import '../../../index.scss';

export default {
  title: 'Elements/Moto',
  component: Moto,
  argTypes: {
    name: {
      type: 'string',
      description: 'Название модели',
    },
    img: {
      type: 'string',
      description: 'Ссылка на фотографию',
    },
  },
};

const Template = (arg) => <Moto {...arg} />;

export const Default = Template.bind({});
Default.args = {
  name: 'KTM 890 Duke 2022',
  img: 'http://ktm.by/images/made/images/moto/ktm-790-duke-2018-1/orange/2715/372812_890-Duke-ORANGE-MY21-90-Right_30313d26236d139f4f81ffc0ef58aaf2.jpg',
};
