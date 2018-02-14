import React from 'react';
import Actions from '../Library/Actions';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { Card } from 'antd';
const Search = Input.Search

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
     

      
        <Col  offset={7}>
        {this.state.formDisabled===true?<h1>It seems like you are in wrong place</h1>:
      <form onSubmit={this.submitEditValue}>

      <Search value={this.state.editValue} 
      style={{ width: 400 }}
        placeholder='please enter the to do task' name= 'addInput' 
      onChange={this.editValueChange}/>
      <Button type='primary' onClick={this.submitEditValue}>Edit!</Button><br/>
      <Button type='primary' span={20}onClick={(e)=>{Actions.RemoveItem(this.state.id);
      this.props.history.push('/')}}>Remove Me!</Button>
      {this.state.error&&<p>{this.state.error}</p>}
      </form>
    }
      </Col>
     
     
      </div>
    );
  }
}
export default Edit;
