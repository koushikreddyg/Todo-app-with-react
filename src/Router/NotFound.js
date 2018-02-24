import React from 'react';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Card } from 'antd';
const NotFound=(props)=>(
  <div>
  
  <Row>
       <Col offset={7}>
       <div style={{ background: '#ECECEC', padding: '30px',width: 400,textAlign:'left' }}>
    <Card title="You are in wrong place" bordered={true} style={{ width: 330,}}>
    <h1>This is not found page</h1>
  <Button type='primary'><Link to="/">Go Home</Link></Button>
    </Card>
  </div>
       </Col>
       </Row>
  </div>
)
export default NotFound;