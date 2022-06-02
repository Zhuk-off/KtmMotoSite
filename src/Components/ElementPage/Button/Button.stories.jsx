import { Button } from './Button';
import './Button.module.scss';
import '../../../index.scss';

export default {
  title: 'Elements/Button',
  component: Button,
  argTypes: {
    title: {
      description: 'Название кнопки',
      defaultValue: 'Button',
    },
  },
};

const Template = (arg) => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Заказать',
};
