import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MainPage } from './MainPages';
import { moto } from '../../TestHelper/testHelper';
import { MemoryRouter } from 'react-router-dom';

describe('MotoCard component', () => {
  it('MainPage render', () => {
    render(
      <MemoryRouter>
        <MainPage moto={[moto]} />
      </MemoryRouter>
    );
    expect(screen.getByText(/enduro/i)).toBeInTheDocument();
    expect(screen.getByText(/Freeride/i)).toBeInTheDocument();
    expect(screen.getByText(/KTM 890 Duke 2022/i)).toBeInTheDocument();
    expect(screen.getByText(/модель/i)).toBeInTheDocument();
  });
});
