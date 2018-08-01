import React, { Component } from 'react';
import LayoutContainer from '../containers/LayoutContainer';
import HomeContainer from '../containers/HomeContainer';
import SearchContainer from '../containers/SearchContainer';
import DisplayContainer from '../containers/DisplayContainer';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={LayoutContainer}>
            <IndexRoute component={HomeContainer} />
            <Route path="/search" component={SearchContainer} />
            <Route path="/make/model/:id" component={DisplayContainer} />
          </Route>
        </Router>
    );
  }
}

export default App;
