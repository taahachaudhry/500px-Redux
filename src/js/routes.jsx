import React                    from 'react';
import { Route, IndexRoute }    from 'react-router';

import App                      from './containers/App'
import Search                   from './containers/Search';
import Results                  from './containers/Results';

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>

    <Route path="results" component={Results}/>
    <Route path="popular" component={Results}/>
    <Route path="upcoming" component={Results}/>
    <Route path="editors" component={Results}/>
    <Route path="fresh" component={Results}/>
  </Route>
);

module.exports = routes;
