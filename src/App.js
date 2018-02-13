import React, {Component} from 'react';
import Demoform from './demoform';
import {  Icon, Input, Button } from 'antd';
import './App.css';
class App extends Component{
  constructor(props) {
    super(props);
    this.state=({
      list:[],
      shown:true
    });
    this.todolist = this.todolist.bind(this);
    this.dele = this.dele.bind(this);
    this.edit = this.edit.bind(this);
    this.changevalue=this.changevalue.bind(this);

  }
  todolist(p) {
    let temp = this.state.list;
    temp.push(Object.assign({}, p));
    this.setState({
      list: temp
    });
  }
  dele(ind) {
    let temp = this.state.list;
    temp.splice(ind,1);
    this.setState({
      list: temp
    });
   
  }
  edit() {
    this.setState({
      shown:!this.state.shown
    });
  }
 changevalue(e,x,y){
var state=this.state;
state.list[x][y]=e.target.value;
this.setState(state);
 }
  render(){
    var show={
        display:this.state.shown? "block":"none"
    }
    var hide={
      display:this.state.shown? "none":"block"
  }
    return (
      <div className="todo">
        
      <div>
          <Demoform addlist={this.todolist}></Demoform>
          <div>
      <h1>TODO_List</h1>
      {
      this.state.list.map((i, ind) => {
        return (
          <span key={'key' + ind}>
            <b>Your Details {ind}:</b><br />
            {Object.keys(i).map((k, ind1) => {
              return (
                <span key={'send key' + ind1}>
                  {k}:<Input  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" style={hide} onChange={(e)=>this.changevalue(e,ind,k)} value={i[k]}/>
                  <p style={show}>{i[k]}</p> <br /></span>
              )
            })}
            
            <Button className="login-form-button" onClick={() => { this.edit() }}>edit</Button>
            
            <Button className="login-form-button" onClick={() => { this.dele(ind) }}>Delete</Button><br />
          </span>
        )
      })
    }
      </div>
      </div>
        </div>
    )
  };
}
export default App;