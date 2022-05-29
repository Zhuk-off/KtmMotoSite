import { screen, render } from '@testing-library/react';
import { Header } from './Header';
import { moto, page } from '../../TestHelper/testHelper';

describe('Header', () => {
  it('renders Header with data', () => {
    render(
      <Header
        category={moto.category}
        description={page.description}
        length={1}
        background={moto.background}
      />
    );
    expect(screen.getByText(/модель/)).toBeInTheDocument;
    expect(screen.getByText(/naked/)).toBeInTheDocument;
    expect(screen.getByText(/1/)).toBeInTheDocument;
    expect(screen.getByText(/Городские мотоциклы-стритфайтеры/))
      .toBeInTheDocument;
  });
  it('Header snapshot', () => {
    const header = render(
      <Header
        category={moto.category}
        description={page.description}
        length={1}
        background={moto.background}
      />
    );
    expect(header).toMatchSnapshot();
  });
});
