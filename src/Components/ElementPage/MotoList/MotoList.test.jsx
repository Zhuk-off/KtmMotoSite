import { screen, render } from '@testing-library/react';
import { MotoList } from './MotoList';
import { motoState } from '../../TestHelper/testHelper';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('MotoList component', () => {
  it('MotoList renders', () => {
    render(
      <MemoryRouter>
        <MotoList moto={motoState} />
      </MemoryRouter>
    );
    screen.debug();
    expect(screen.getAllByText(/KTM 890 Duke 2022/i)[0]).toBeInTheDocument();
  });
});
