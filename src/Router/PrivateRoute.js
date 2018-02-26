import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Header';
const PrivateRoute=({
    isAuth,
    component:Component,
    ...rest
})=>(
    <div>
    <p>{isAuth}</p>
    <Route {...rest} component={(props)=>(
        isAuth?(<Component {...props}/>):(<Redirect to='/'/>)
        
    )}/>
    </div>
)
const mapStateToProps=(state)=>({
    isAuth:!!state.Auth.uid,
})
export default connect(mapStateToProps)(PrivateRoute);