import React from 'react';
import Form from '../components/Form';
import Home from './Home';
class Edit extends React.Component{
  constructor(props){
    super(props);
    
  }
  render(){
  return(
    <div>

    <Form option={this.props.match.params.id}/>
    <button >delete</button>
    </div>
  );
}
}
export default Edit;