import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MotoCard } from './MotoCard';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { motoState, state } from '../../TestHelper/testHelper';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import * as reactRedux from 'react-redux';

const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

describe('MotoCard component', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

  it('MotoCard render', () => {
    const motoItem = motoState[0];
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/naked/ktm-890-duke-2022']}>
          <Routes>
            <Route path={`naked/:id`} element={<MotoCard moto={motoState} />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(motoItem.name)).toBeInTheDocument();
    expect(screen.getByText(motoItem.price)).toBeInTheDocument();
    expect(screen.getByText(/Заказать/)).toBeInTheDocument();
    expect(screen.getByText(/Заказать/).closest('a')).toHaveAttribute(
      'href',
      '/naked/ktm-890-duke-2022/order'
    );
    expect(screen.getByText(motoItem.titleCard)).toBeInTheDocument();
    expect(screen.getByText(motoItem.descriptionMoto)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', motoItem.photolink);
  });

  it('Wrong adress', () => {
    useSelectorMock.mockReturnValue(state.moto.page);
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/naked/xxx']}>
          <Routes>
            <Route path={`naked/:id`} element={<MotoCard moto={motoState} />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Страница не найдена/)).toBeInTheDocument();
  });
});
