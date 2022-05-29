import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { state } from '../../TestHelper/testHelper';
import { Provider } from 'react-redux';
import * as reactRedux from 'react-redux';
import store from '../../../store/store';
import { PageNotFound } from './PageNotFound';

describe('PageNotFound component', () => {
  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

  it('render Page not found', () => {
    useSelectorMock.mockReturnValue(state.moto.page);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PageNotFound />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Страница не найдена/)).toBeInTheDocument();
    expect(screen.getByText(/Назад на главную/)).toBeInTheDocument();
  });

  it('render loading data', () => {
    useSelectorMock.mockReturnValue([]);
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PageNotFound />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByText(/Загрузка.../)).toBeInTheDocument();
  });
});
