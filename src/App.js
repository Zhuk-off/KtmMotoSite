import { Component } from 'react';
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './Component/Pages/MainPages';
import { MotoCard } from './Component/Pages/MotoCard';
import { Order } from './Component/Pages/Order';
import { fetchMotoData } from './store/actions/action';
import { connect } from 'react-redux';
import { PageNotFound } from './Component/Pages/PageNotFound';

class App extends Component {
  motoCategoryFilter = (category) => {
    let moto = [...this.props.moto];
    moto =
      category === '/'
        ? moto
        : moto.filter((bike) => bike.category === category);

    return moto;
  };

  componentDidMount() {
    this.props.fetchMotoData();
  }

  renderPages() {
    const page = [...this.props.page];
    return (
      <React.Fragment>
        <Routes>
          {page.map((page) => {
            if (page.id !== '/') {
              return (
                <React.Fragment key={page.id}>
                  <Route
                    // key={this.index}
                    path={page.path}
                    element={
                      <MainPage
                        key={this.index}
                        category={page.categoryTitle}
                        description={page.description}
                        moto={this.motoCategoryFilter(page.id)}
                        background={page.background}
                      />
                    }
                  />
                  <Route
                    // key={this.index}
                    path={`${page.path}/:id`}
                    element={
                      <MotoCard key={this.index} moto={this.props.moto} />
                    }
                  />
                  <Route
                    // key={this.index}
                    path={`${page.path}/:id/order`}
                    element={<Order key={this.index} moto={this.props.moto} />}
                  />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={page.id}>
                  <Route
                    // key={this.index}
                    path={page.path}
                    element={
                      <MainPage
                        key={this.index}
                        category={page.categoryTitle}
                        description={page.description}
                        moto={this.motoCategoryFilter(page.id)}
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
  }

  render() {
    return (
      <div className="App">
        {this.props.loading && this.props.page.length !== 0
          ? null
          : this.renderPages()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loading: state.generalReducer.loading,
    moto: state.generalReducer.moto,
    page: state.generalReducer.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMotoData: () => dispatch(fetchMotoData()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
