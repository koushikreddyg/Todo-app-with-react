import React from 'react';
import Form from '../components/Form';
import Extras from '../components/Extras';
import Home from './Home';
class Edit extends React.Component{
  state={
    option:''
  }
  Submit=(e)=>{
    this.setState((prevState)=>({
      option:e
      
    }))
    
  }
  
  render(){
    console.log(this.state.option)
  return(
    <div>

    <Form option={this.props.match.params.id} Submit={this.Submit}  />
    <Extras option={this.state.option}/>

    
    </div>
  );
}
}
export default Edit;
