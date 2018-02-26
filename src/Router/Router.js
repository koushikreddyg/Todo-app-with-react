import React from 'react';
import Header from './Header';
import Edit from './Edit';
import NotFound from './NotFound';
import Home from './Home';
import Login from './Login'
import Logout from './Logout';
import {Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import createHistory from 'history/createBrowserHistory';
export const history=createHistory()
 const AppRouter=()=>(
  <div>
  <Router history={history}>
  <div>
        <Switch>
          <PublicRoute path="/" component={Login} exact={true}/>
          <PrivateRoute path="/dashboard" component={Home} />
          <PrivateRoute path="/edit/:id" component={Edit}/>
          <PrivateRoute  component={NotFound}/>
        </Switch>
        </div>
      </Router>
      
  
  </div>
)
export default AppRouter;