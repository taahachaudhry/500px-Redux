import React                    from 'react';
import { Route, IndexRoute }    from 'react-router';

import App                      from './containers/App'
import Search                   from './containers/Search';
import Results                  from './containers/Results';

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Search}/>
    <Route path="search" component={Search}/>

    <Route path="results" component={Results}/>
    <Route path="popular" component={Results}/>
    <Route path="upcoming" component={Results}/>
    <Route path="editors" component={Results}/>
    <Route path="fresh_today" component={Results}/>

    <Route path="*" component={Search}/>
  </Route>
);

module.exports = routes;
