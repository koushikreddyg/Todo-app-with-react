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
  if (realvalue.length==0){
    this.setState((prevState)=>({
      error:'please enter some value'
    }))
  }else if(this.state.options.indexOf(realvalue)>-1){
    this.setState((prevState)=>({
      error:'option is present'
    }))
  }else {
    this.setState((prevState)=>({
      error: undefined
    }))
  this.setState((prevState)=>({
    
    options:prevState.options.concat(realvalue)
  }))
  
}
}


render(){
  
  return(
    <div>
    {this.state.error&&<p>{this.state.error}</p>}
    <Form Submit={this.Submit}/>
    <Display options={this.state.options} />
 
    </div>
  )
}
}


export default Home;