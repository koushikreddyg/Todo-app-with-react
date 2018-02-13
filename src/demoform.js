import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';



export default class demoform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formFild: {
        name: "",
        email: "",
        age: "",
      },
      list: []
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
      <div className="login-form" >
        <table>
          <Form  className="centre" >
            <tr className="input"><td>Name:</td>
        <td><Input  type="text"  name="name" onChange={this.changevalue} value={this.state.formFild['name']} /><br />
            </td></tr>
            <tr className="input">
              <td>Email:</td>
        <td><Input   type="text" name="email" onChange={this.changevalue} value={this.state.formFild['email']} /><br />
            </td></tr>
            <tr className="input"><td>Age:</td>
        <td><Input   type="text" name="age" onChange={this.changevalue} value={this.state.formFild['age']} /><br />
            </td></tr>
            <button className="login-form-button" onClick={this.alertMsg} >submit</button>
          </Form>
        </table>

      </div>
    )
  }
}
