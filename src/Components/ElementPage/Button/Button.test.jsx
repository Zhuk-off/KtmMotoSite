import { render, screen } from '@testing-library/react';
import { Button } from './Button';

const title = 'Заказать';

describe('Button component', () => {
  it('renders Button', () => {
    render(<Button title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument;
  });

  it('Button snapshot', () => {
    const button = render(<Button title={title} />);

    expect(button).toMatchSnapshot();
  });
});
