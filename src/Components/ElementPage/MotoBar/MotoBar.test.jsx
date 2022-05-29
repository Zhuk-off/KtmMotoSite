import { MotoBar } from './MotoBar';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

const motoBarRenderHelper = () =>
  render(
    <MemoryRouter>
      <MotoBar />
    </MemoryRouter>
  );

describe('MotoBar component', () => {
  it('MotoBar render MX-item', () => {
    motoBarRenderHelper();
    expect(screen.getByText(/MX/)).toBeInTheDocument();
    expect(screen.getByText(/MX/).closest('a')).toHaveAttribute('href', '/mx');
  });

  it('MotoBar render Enduro-item', () => {
    motoBarRenderHelper();
    expect(screen.getByText(/Enduro/)).toBeInTheDocument();
    expect(screen.getByText(/Enduro/).closest('a')).toHaveAttribute(
      'href',
      '/enduro'
    );
  });

  it('MotoBar render Freeride-item', () => {
    motoBarRenderHelper();
    expect(screen.getByText(/Freeride/)).toBeInTheDocument();
    expect(screen.getByText(/Freeride/).closest('a')).toHaveAttribute(
      'href',
      '/freeride'
    );
  });

  it('MotoBar render Naked-item', () => {
    motoBarRenderHelper();
    expect(screen.getByText(/Naked/)).toBeInTheDocument();
    expect(screen.getByText(/Naked/).closest('a')).toHaveAttribute(
      'href',
      '/naked'
    );
  });

  it('MotoBar render Travel-item', () => {
    motoBarRenderHelper();
    expect(screen.getByText(/Travel/)).toBeInTheDocument();
    expect(screen.getByText(/Travel/).closest('a')).toHaveAttribute(
      'href',
      '/travel'
    );
  });

  it('MotoBar render Sport Tourer-item', () => {
    motoBarRenderHelper();
    expect(screen.getByText(/Sport Tourer/)).toBeInTheDocument();
    expect(screen.getByText(/Sport Tourer/).closest('a')).toHaveAttribute(
      'href',
      '/sport-tourer'
    );
  });

  it('MotoBar render Supermoto-item', () => {
    motoBarRenderHelper();
    expect(screen.getByText(/Supermoto/)).toBeInTheDocument();
    expect(screen.getByText(/Supermoto/).closest('a')).toHaveAttribute(
      'href',
      '/supermoto'
    );
  });
});
