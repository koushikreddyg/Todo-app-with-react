import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
const PublicRoute=({
  isAuth,
  component:Component,
  ...rest
})=>(
  <div>
  <Route {...rest} component={(props)=>(
    isAuth?<Redirect to='/dashboard'/>:<Component {...props}/>
  )}/>
  </div>  
);
const mapStateToProps=(state)=>({
  isAuth:!!state.Auth
})
export default connect(mapStateToProps)(PublicRoute);
