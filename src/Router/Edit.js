import React from 'react';
import Actions from '../Library/Actions';

class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state={
      editValue:Actions.findById(Number(this.props.match.params.id)),
      id:Number(this.props.match.params.id)
      
    }
  }
  editValueChange=(e)=>{
    e.preventDefault();
    const editValue=e.target.value;
    this.setState(()=>({
      editValue
    }))
  }
  submitEditValue=(e)=>{
    e.preventDefault();
    const editValue=this.state.editValue;
    const id=this.state.id
    Actions.editTask(id,{task:editValue});
    this.props.history.push('/')
  }
goHome=()=>{
  return this.props.history.push('/')
}
  render() {
    console.log();
    return (
      <div>
      {this.state.editValue&&<form onSubmit={this.submitEditValue}>
      <input value={this.state.editValue} onChange={this.editValueChange}/>
      <button type='submit'>Edit me</button>
      </form>}
      {this.state.editValue===false&& <div>It seems like you are in wrong palce
      <button onClick={this.goHome}>Home</button></div>}
      
     
      </div>
    );
  }
}
export default Edit;
