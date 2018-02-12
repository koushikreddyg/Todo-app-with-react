import React, { Component } from 'react';



export default class demoform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formFild: {
        name: "",
        email: "",
        age: "",
      },
      list:[]
    };
    this.alertMsg = this.alertMsg.bind(this);
    this.changevalue = this.changevalue.bind(this);
    this.dataChanged = this.dataChanged.bind(this);
  }
  alertMsg() {
    this.props.addlist(this.state.formFild);
    
  }
  changevalue(e) {
    const state = this.state;
    state.formFild[e.target.name] = e.target.value;
    this.setState(state); 
  }
  dataChanged() {
    console.log("running");
  }
  render() {
    return (
      <div >
        <form >
          Name:
        <input type="text" name="name" onChange={this.changevalue} value={this.state.formFild['name']} /><br />
          Email:
        <input type="text" name="email" onChange={this.changevalue} value={this.state.formFild['email']} /><br />
          Age:
        <input type="text" name="age" onChange={this.changevalue} value={this.state.formFild['age']} />
        <input type="button" value="submit" onClick={this.alertMsg} />
        </form>
      </div>
    )} 
}
