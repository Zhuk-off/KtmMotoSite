import { useEffect } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './Components/Pages/MainPages';
import { MotoCard } from './Components/Pages/MotoCard';
import { Order } from './Components/Pages/Order';
import { useDispatch, useSelector } from 'react-redux';
import { PageNotFound } from './Components/Pages/PageNotFound';
import { fetchMotoData } from './store/motoSlice';
import { StyledApp } from './Components/styles/App.styled';
import Helmet from 'react-helmet';

const App = () => {
  const state = useSelector((state) => state.moto);
  const dispatch = useDispatch();

  const motoCategoryFilter = (category) => {
    let moto = [...state.moto];
    moto =
      category === '/'
        ? moto
        : moto.filter((bike) => bike.category === category);

    return moto;
  };

  useEffect(() => {
    dispatch(fetchMotoData());
  }, [dispatch]);

  const renderPages = () => {
    const page = [...state.page];
    return (
      <React.Fragment>
        <Routes>
          {page.map((page) => {
            if (page.id !== '/') {
              return (
                <React.Fragment key={page.id}>
                  <Route
                    path={page.path}
                    element={
                      <MainPage
                        category={page.categoryTitle}
                        description={page.description}
                        moto={motoCategoryFilter(page.id)}
                        background={page.background}
                      />
                    }
                  />
                  <Route
                    path={`${page.path}/:id`}
                    element={<MotoCard moto={state.moto} />}
                  />
                  <Route
                    path={`${page.path}/:id/order`}
                    element={<Order moto={state.moto} />}
                  />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={page.id}>
                  <Route
                    path={page.path}
                    element={
                      <MainPage
                        category={page.categoryTitle}
                        description={page.description}
                        moto={motoCategoryFilter(page.id)}
                        background={page.background}
                      />
                    }
                  />
                </React.Fragment>
              );
            }
          })}

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </React.Fragment>
    );
  };

  return (
    <StyledApp>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
        <style type="text/css">
          {`
@font-face {
  font-family: 'Bebas Neue';
  src: url('./fonts/BebasNeueCyrillic.ttf');
}
}
      `}
        </style>
      </Helmet>
      {/* <GlobalStyles /> */}
      {state.loading && state.page.length !== 0 ? null : renderPages()}
    </StyledApp>
  );
};

export default App;
