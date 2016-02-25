import React                    from 'react';
import { Route, IndexRoute }    from 'react-router';

import App                      from './containers/App'
import Home                     from './components/Home';
import Results                  from './components/Results';

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    <Route path="results" component={Results}/>
  </Route>
);

module.exports = routes;
