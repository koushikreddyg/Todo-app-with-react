import React from 'react';
import DisplayTasks from '../components/DisplayTasks';
import {connect} from 'react-redux';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';
import addTask from '../store/Actions/AddTask'; 
import Actions from '../Library/Actions';
const Search = Input.Search


class Home extends React.Component {
constructor(props){
  super(props);
  this.state={task:'',
  error:''}
}
inputChange=(e)=>{
e.preventDefault();
const task=e.target.value;
  this.setState(()=>({
      task: task
  }))

}
FormSubmit=(e)=>{
  e.preventDefault();
    const id= Date.now();
    const task= this.state.task.trim();
    let error=Actions.errorCheck(task,this.props.Tasks)
    if(task.length===0){
      this.setState(()=>({
        error: 'please enter some value'
      }))
    }else if(error.length>0){
      this.setState(()=>({
        error: 'this task is in your task list'
      }))
    }
    else {
      this.setState(()=>({
        error: undefined
      }))
      this.props.dispatch(addTask({id:id,task:task}));
      this.setState(()=>({
        task:''
      }))
    }
   
}



  
  render() {
   
    return (
  
      <div>
      
    <Row>
      
      
        <form onSubmit={this.FormSubmit}>
        <Col  offset={7}><Search value={this.state.task} style={{ width: 325 }}
        placeholder='please enter the to do task' name= 'addInput' 
       onChange={this.inputChange}
       />
       <Button type='primary' onClick={this.FormSubmit}>Submit</Button>
       </Col>
       
       
       </form>
       </Row>
       <Row>
       <Col offset={7}>
       <div style={{ background: '#ECECEC', padding: '30px',width: 400,textAlign:'left' }}>
    <Card title="Task List" bordered={true} style={{ width: 330 }}>
    <DisplayTasks Tasks={this.props.Tasks} bordered={true} />
    
    </Card>
    {this.state.error&&<p>{this.state.error}</p>}
  </div>
       </Col>
       
       </Row>


      </div>
    
    )
  }
}
const mapStateToProps=(state)=>({
Tasks:state.Actions
})


export default connect(mapStateToProps)(Home);