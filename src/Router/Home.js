import React from 'react';
import Actions from '../Library/Actions';
import DisplayTasks from '../components/DisplayTasks';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';

const Search = Input.Search


class Home extends React.Component {
constructor(props){
  super(props);
  this.state={task:'',
  Tasks:Actions.getAllData(), 
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
      this.setState((prevState)=>({
        Tasks: Actions.Add(id,task)
    }))
   
    }
}


removeTask=(id)=>{
  this.setState((prevState)=>({
    Tasks:Actions.RemoveItem(id)
  }))
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
    <DisplayTasks Tasks={this.state.Tasks} bordered={true} removeTask={this.removeTask}/>
    {this.state.error&&<p>{this.state.error}</p>}
    </Card>
  </div>
       </Col>
       </Row>
       

       
      
      </div>
    
    )
  }
}


export default Home;