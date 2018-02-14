import React from 'react';
import Actions from '../Library/Actions';
import DisplayTasks from '../components/DisplayTasks';
class Home extends React.Component {
constructor(props){
  super(props);
  this.state={task:'',Tasks:Actions.getAllData(), error:''}
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
      {this.state.error&&<p>{this.state.error}</p>}
        <form onSubmit={this.FormSubmit}>
       <input value={this.state.task} placeholder='please enter the to do task' name= 'addInput'
       onChange={this.inputChange}
       />
       <button>Submit</button>
       </form>
       <DisplayTasks Tasks={this.state.Tasks} removeTask={this.removeTask}/>
      </div>
    )
  }
}


export default Home;