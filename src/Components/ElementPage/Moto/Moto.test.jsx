import { render, screen } from '@testing-library/react';
import { moto } from '../../TestHelper/testHelper';
import { Moto } from './Moto';

describe('moto component', () => {
  it('moto renders data', () => {
    render(<Moto name={moto.name} img={moto.photolink} />);

    expect(screen.getByRole('img')).toBeInTheDocument;
    expect(screen.getByText('KTM 890 Duke 2022')).toBeInTheDocument;
  });

  it('moto render', () => {
    render(<Moto />);
    expect(screen.queryByRole('img')).toBeUndefined;
  });

  it('moto snapshot', () => {
    const motocycle = render(<Moto name={moto.name} img={moto.photolink} />);

    expect(motocycle).toMatchSnapshot();
  });
});
