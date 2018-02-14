import React from 'react';
import Actions from '../Library/Actions';

class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state={
      editValue:Actions.findById(Number(this.props.match.params.id)),
      id:Number(this.props.match.params.id),
      formDisabled:false,
      error:''
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
    let error=Actions.errorCheck(editValue);
    console.log('the error value is ',error)
    if (editValue.length===0 || error.length>0){
      this.setState(()=>({
        error:'please enter Task or please enter valid task'
      }))
    }else if (error.length===0){
      this.setState(()=>({
        error:undefined
      }))
      Actions.editTask(id,{task:editValue});
      this.props.history.push('/')
    }
    
  }

componentWillMount(){
  if (this.state.editValue.length===0){
      this.setState(()=>({
        formDisabled:true
      }))
  }
}
  render() {
    console.log();
    return (
      <div>
      {this.state.error&&<p>{this.state.error}</p>}
      {this.state.formDisabled===true?<p>It seems like you are in wrong place</p>:
      <form onSubmit={this.submitEditValue}>
      <input value={this.state.editValue} onChange={this.editValueChange}/>
      <button type='submit'>Edit me</button>
      </form>
      }
     
      </div>
    );
  }
}
export default Edit;
