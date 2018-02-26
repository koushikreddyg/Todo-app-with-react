import React from 'react';
import Header from './Header';
import Edit from './Edit';
import NotFound from './NotFound';
import Home from './Home';
import Login from './Login'
import Logout from './Logout';
import {Router, Switch, Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
export const history=createHistory()
 const AppRouter=()=>(
  <div>
  <Router history={history}>
  <div>
        <Switch>
          <Route path="/" component={Login} exact={true}/>
          <Route path="/dashboard" component={Home} />
          <Route path="/edit/:id" component={Edit}/>
          <Route  component={NotFound}/>
        </Switch>
        </div>
      </Router>
      
  
  </div>
)
export default AppRouter;