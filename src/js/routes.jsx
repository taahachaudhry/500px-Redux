import React                    from 'react';
import { Route, IndexRoute }    from 'react-router';

import App                      from './containers/App'
import Search                   from './components/Search';
import Results                  from './components/Results';

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>

    <Route path="results" component={Results}/>
  </Route>
);

module.exports = routes;
