import React from 'react';
import Form from '../components/Form';
import Display from '../components/Display';
class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={
      options:[],
      error:false
    }
  }
Submit=(value)=>{
  const realvalue=value.trim();
  this.setState((prevState)=>({
    options:prevState.options.concat(realvalue)
  }))
  
  
}

render(){
  return(
    <div>
    <Form Submit={this.Submit}/>
    <Display options={this.state.options}/>
    </div>
  )
}
}

export default Home;