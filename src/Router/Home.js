import React from 'react';
import Actions from '../Library/Actions';
import DisplayTasks from '../components/DisplayTasks';
import {connect} from 'react-redux';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';
import addTask from '../store/Actions/AddTask'; 
import store from '../store/Store/store';
const Search = Input.Search


export class Home extends React.Component {
constructor(props){
  super(props);
  this.state={task:'',
  Tasks:Actions.getAllData(), 
  image:undefined,
  error:''}
}
inputChange=(e)=>{
e.preventDefault();
const task=e.target.value;
  this.setState(()=>({
      task: task
  }))

}
componentDidMount(){
  const json=JSON.parse(localStorage.getItem('Tasks Array'))
  if(json){
    Actions.store(json);
  }
}

FormSubmit=(e)=>{
  e.preventDefault();
 
    const id= Date.now();
    const task= this.state.task.trim();
    let error=Actions.errorCheck(task);
    if (task.length===0){
      this.setState(()=>({
        error:'Please enter some value'
      }))
    }
    else if(error.length>0){
      this.setState(()=>({
        error:'this task is already present please enter another task'
      }))
    }
    
    else if(error.length===0){
      this.setState(()=>({
        task:''
      }))
      this.setState(()=>({
        error:undefined
      }))
      store.dispatch(addTask({id:id,task:task}));
      this.setState((prevState)=>({
        Tasks: Actions.Add(id,task)
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
    <DisplayTasks Tasks={this.state.Tasks} bordered={true} />
    {this.state.error&&<p>{this.state.error}</p>}
    </Card>
  </div>
       </Col>
       </Row>

      
      </div>
    
    )
  }
}


export default connect()(Home);