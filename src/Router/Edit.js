import React from 'react';
import Header from './Header';
import { Col } from 'antd';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import Actions from '../Library/Actions';
import {editTaskFunction} from '../store/Actions/editTask';
import {removeTaskFunction} from '../store/Actions/RemoveTask';
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
      this.props.editTaskFunction(id, {task:Value} );
      this.setState(()=>({
        editValue:''
      }))
    this.props.history.push('/dashboard')
     }
    
  }
  Remove=(e)=>{
    e.preventDefault();
    this.props.removeTaskFunction(this.state.id);
    this.props.history.push('/dashboard');
  }
  componentDidMount(){
    if(this.state.editValue===''){
      this.props.history.push('/dashboard')
    }
  }

  render() {
    return (
      <div>
      <Header/>
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
  removeTaskFunction:(id)=>dispatch(removeTaskFunction(id)),
  editTaskFunction:(id,Value)=>dispatch(editTaskFunction(id,Value)),
})
const mapStateToProps = (state, props) => ({

  editTask1: state.Actions.find((item) => (item.id === props.match.params.id)),
  ID:props.match.params.id,
  Tasks:state.Actions,
})
export default connect(mapStateToProps,mapDispatchToProps)(Edit);
