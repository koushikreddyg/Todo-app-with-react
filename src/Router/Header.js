import React from 'react';
import {NavLink} from 'react-router-dom';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import Logout from './Logout';
 const Header=(props)=>(
  <div>
 <Button offset={6} type="primary" icon="cloud-download">
  <NavLink to="/dashboard" exact={true}>Home</NavLink>
 </Button>
 <Logout/>
  </div>
)
export default Header;