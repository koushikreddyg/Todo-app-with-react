import React from 'react';
import Header from './Header';
import Edit from './Edit';
import NotFound from './NotFound';
import Home from './Home';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
 const Router=()=>(
  <div>
  <BrowserRouter>
  <div>
      <Header/>
        <Switch>
          <Route path="/" component={Home} exact={true}/>
          <Route path="/edit/:id" component={Edit}/>
          <Route  component={NotFound}/>
        </Switch>
        </div>
      </BrowserRouter>
      
  
  </div>
)
export default Router;