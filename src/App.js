import { Component } from 'react';
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Mx } from './Component/Pages/Mx';
import { MotoCard } from './Component/Pages/MotoCard';
import { Order } from './Component/Pages/Order';
import axios from 'axios';
import MotoBar from './Component/MotoBar/MotoBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  motoCategoryFilter = (category) => {
    let moto = [...this.state.moto];
    moto = moto.filter((bike) => bike.category === category);
    // console.log(moto, category);
    return moto;
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://ktmmoto-8b132-default-rtdb.europe-west1.firebasedatabase.app/moto/state.json'
      );
      const newState = response.data;
      this.setState({
        moto: newState.moto,
        loading: false,
        page: newState.page,
      });
      console.log('newState', newState);
    } catch (e) {
      console.log(e);
    }
  }

  renderPages() {
    console.log('renderPages');
    let moto = [...this.state.moto];
    const page = [...this.state.page];
    // console.log(JSON.stringify(page));
    return (
      <React.Fragment>
        <Routes>
          {page.map((page) => {
            if (page.id != '/') {
              return (
                <React.Fragment key={page.id}>
                  <Route
                    key={this.index}
                    path={page.path}
                    element={
                      <Mx
                        key={this.index}
                        category={page.categoryTitle}
                        description={page.description}
                        moto={this.motoCategoryFilter(page.id)}
                        background={page.background}
                      />
                    }
                  />
                  <Route
                    key={this.index}
                    path={`${page.path}/:id`}
                    element={
                      <MotoCard key={this.index} moto={this.state.moto} />
                    }
                  />
                  <Route
                    key={this.index}
                    path={`${page.path}/:id/order`}
                    element={<Order key={this.index} moto={this.state.moto} />}
                  />
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment key={page.id}>
                  <Route
                    key={this.index}
                    path={page.path}
                    element={
                      <Mx
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
        </Routes>
      </React.Fragment>
    );
  }

  render() {
    console.log('render');
    console.log('state===', this.state);
    console.log('state.loading===', this.state.loading);

    return (
      <div className="App">
        {this.state.loading ? null : this.renderPages()}
      </div>
    );
  }
}

export default App;
