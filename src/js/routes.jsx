import React                    from 'react';
import { Route, IndexRoute }    from 'react-router';

import App                      from './containers/App'
import Home                     from './components/Home';

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
);

module.exports = routes;
