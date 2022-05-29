import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import store from '../../store/store';

export const renderWithRouterReduxOrder = (component, initialEntries = '/') => {
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialEntries]}>
        <Routes>
          <Route path={`naked/:id/order`} element={component} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
};
