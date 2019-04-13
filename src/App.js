import React, { Component } from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './redux/Store';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
              <Route path="/" exact component={Home} />
              <Route path="/search" component={Search} />
          </Router>
      </Provider>
    );
  }
}

export default App;
