import React from 'react';
import Form from '../components/Form';

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
  
  
}

render(){
  return(
    <div>
  
    <Form Submit={this.Submit}/>
    </div>
  )
}
}

export default Home;