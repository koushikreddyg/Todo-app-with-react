import React from 'react';
import { Col } from 'antd';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import Actions from '../Library/Actions';
import editTask from '../store/Actions/editTask';
import removeTask from '../store/Actions/RemoveTask';
import { connect } from 'react-redux'
const Search = Input.Search;


export class Edit extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      editValue: Actions.validateId(this.props.Tasks,this.props.ID)===true?
      this.props.editTask1.task:'' ,
      id: this.props.ID,
      error:'',
    }
  }
  editValueChange = (e) => {
    e.preventDefault();
    const editValue = e.target.value;
    this.setState(() => ({
      editValue
    }))
  }
  submitEditValue = (e) => {
    e.preventDefault();
    const editValue = this.state.editValue;
    const id = this.state.id;
    const Value=editValue.trim();
    let error=Actions.errorCheck(Value,this.props.Tasks)
    if(Value.length===0){
      this.setState(()=>({
        error: 'please enter some value'
      }))
    }else if(error.length>0){
      this.setState(()=>({
        error: 'this task is in your task list'
      }))
    }else{
      this.setState(()=>({
        error:undefined
      }))
      this.props.editTask(id, { task: Value });
      this.setState(()=>({
        editValue:''
      }))
    this.props.history.push('/')
    }
    
  }
  Remove=(e)=>{
    e.preventDefault();
    this.props.removeTask(this.state.id);
    this.props.history.push('/');
  }
  componentDidMount(){
    if(this.state.editValue===''){
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div>
        (<Col offset={7}>
          <form onSubmit={this.submitEditValue}>
            <Search value={this.state.editValue}
              style={{ width: 400 }}
              placeholder='please enter the to do task' name='addInput'
              onChange={this.editValueChange} />
            <Button type='primary' onClick={this.submitEditValue}>Edit!</Button><br />
            {this.state.error&&<p>{this.state.error}</p>}
          </form>
          <Button type='primary' span={20} onClick={this.Remove}>Remove Me!</Button>
        </Col>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>({
  removeTask:(id)=>dispatch(removeTask(id)),
  editTask:(id,object)=>dispatch(editTask(id,object)),
})
const mapStateToProps = (state, props) => ({

  editTask1: state.Actions.find((item) => (item.id === Number(props.match.params.id))),
  ID:Number(props.match.params.id),
  Tasks:state.Actions,
})
export default connect(mapStateToProps,mapDispatchToProps)(Edit);
