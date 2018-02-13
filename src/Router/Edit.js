import React from 'react';
import Form from '../components/Form';
import Extras from '../components/Extras';
import Home from './Home';
class Edit extends React.Component{
  state={
    option:''
  }
  submit=(e)=>{
    this.setState((prevState)=>({
      option:e
    }))
  
  }
  render(){
  return(
    <div>

    <Form option={this.props.match.params.id} Submit={this.submit}  />
    <Extras option={this.state.option}  />

    <button >delete</button>
    
    </div>
  );
}
}
export default Edit;
